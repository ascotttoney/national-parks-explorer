# frozen_string_literal: true

class User < ApplicationRecord
  validates :userName, uniqueness: true

  has_many :past_visits
  has_many :past_parks, class_name: 'Park', through: :past_visits, source: :park
  has_many :future_visits
  has_many :future_parks, class_name: 'Park', through: :future_visits, source: :park

  has_secure_password
end
