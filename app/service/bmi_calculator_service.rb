module BmiCalculatorService
  class << self
    def find_index(weight:, height:)
      bmi = find_bmi(weight, height)
      { bmi: bmi, category: find_category(bmi)  }
    end

    private

    def find_bmi(weight, height)
      # (BMI = weight [kg]/ height [m2]).
      bmi = weight.to_f / (height.to_f / 100) ** 2
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
  end
end
