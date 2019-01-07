class HomeController < ApplicationController
  def show
  end

  def update
    service = ::BmiCalculatorService.new(weight: safe_params[:weight],
                                         height: safe_params[:height])
    render_result(service.calculate)
  end

  private

  def safe_params
    params.permit(:weight, :height)
  end

  def render_result(result)
    status = result[:errors].blank? ? 200 : 400
    render json: result, status: status
  end
end
