# frozen_string_literal: true

class PastVisitsController < ApplicationController
  def index
    visits = PastVisit.all
    render json: visits.to_json(include: [:user, park: {include: [:park_images]}]), status: :ok
  end

  def show
    visit = PastVisit.find(params[:id])
    render json: visit, status: :ok
  end

  def create
    new_visit = PastVisit.new(s_params)
    if new_visit.save
      render json: new_visit, status: :created
    else
      render json: new_visit.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    visit = PastVisit.find(params[:id])
    visit.destroy
    render json: visit, status: :ok
  end

  private

  def s_params
    params.require(:visit).permit(:user_id, :park_id, :title, :description, :season, :year)
  end
end
