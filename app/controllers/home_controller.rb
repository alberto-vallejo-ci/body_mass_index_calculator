class HomeController < ApplicationController
  def show
  end

  def update
    result = ::BmiCalculatorService.find_index(weight: safe_params[:weight],
                                               height: safe_params[:height])
    render json: result, status: 200
  end

  private

  def safe_params
    params.permit(:weight, :height)
  end
end
