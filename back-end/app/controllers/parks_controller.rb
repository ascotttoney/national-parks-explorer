class ParksController < ApplicationController
  def show
    park = Park.find(params[:id])
    render json: park, status: :ok
  end

  def images
    park = Park.find(params[:id])
    render json: park.park_images, status: :ok
  end

  def past_visits
    park = Park.find(params[:id])
    render json: park.past_visits, status: :ok
  end

  def past_visitors
    park = Park.find(params[:id])
    render json: park.past_visitors, status: :ok
  end

  def future_visits
    park = Park.find(params[:id])
    render json: park.future_visits, status: :ok
  end

  def future_visitors
    park = Park.find(params[:id])
    render json: park.future_visitors, status: :ok
  end

end
