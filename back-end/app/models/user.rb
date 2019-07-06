# frozen_string_literal: true

class User < ApplicationRecord
  has_many :past_visits
  has_many :past_parks, through: :past_visits, class_name: 'Park'
  has_many :future_visits
  has_many :future_parks, through: :future_visits, class_name: 'Park'
  
end
