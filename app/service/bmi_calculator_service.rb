class BmiCalculatorService
  def initialize(height:, weight:)
    @height = height.to_f
    @weight = weight.to_f
    @errors = []
  end

  def calculate
    return {errors: errors} unless valid?
    find_index
  end

  private

  attr_reader :height, :weight, :errors

  def find_index
    bmi = find_bmi
    { bmi: bmi, category: find_category(bmi)  }
  end

  def find_bmi
    # (BMI = weight [kg]/ height [m2]).
    bmi = weight / (height / 100) ** 2
    bmi.round(1)
  end

  def find_category(bmi)
    lower, upper, categories = read_categories_files

    return lower['category'] if bmi <= lower['to']
    return upper['category'] if bmi >= upper['from']

    categories.inject('') do |result, category|
      next result unless (bmi < category['to'] && bmi > category['from'])
      result = category['category']
    end
  end

  def read_categories_files
    categories = YAML.load_file(Rails.root.join('lib', 'files', 'bmi_categories.yml')).values
    [categories.shift, categories.pop, categories]
  end

  def valid?
    validate_height
    validate_weight
    errors.blank?
  end

  def validate_height
    errors << 'Height should be given in centimeters.' if height < 60
    errors << "How it's the whether up there?" if height >= 280
  end

  def validate_weight
    errors << "Weight it's too low for an adult." if weight < 10
    errors << 'Weight should be given in kilograms.' if weight > 1000
  end
end
