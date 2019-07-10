# frozen_string_literal: true

class FutureVisitsController < ApplicationController
  def index
    visits = FutureVisit.all
    render json: visits.to_json(include: %i[park user]), status: :ok
  end

  def show
    visit = FutureVisit.find(params[:id])
    render json: visit, status: :ok
  end

  def create
    new_visit = FutureVisit.new(s_params)
    if new_visit.save
      render json: new_visit.to_json(include: %i[park user]), status: :created
    else
      render json: new_visit.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    visit = FutureVisit.find(params[:id])
    visit.destroy
    render json: visit, status: :ok
  end

  private

  def s_params
    params.require(:visit).permit(:user_id, :park_id, :title, :description, :season, :year)
  end
end
