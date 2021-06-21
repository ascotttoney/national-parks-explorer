class ParkImagesController < ApplicationController
  def show
    img = ParkImage.find(params[:id])
    render json: img, status: :ok
  end
end
