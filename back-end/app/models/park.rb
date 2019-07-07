# frozen_string_literal: true

class Park < ApplicationRecord
  has_many :past_visits
  has_many :past_vistors, class_name: 'User', through: :past_visits, source: :user
  has_many :future_visits
  has_many :future_vistors, class_name: 'User', through: :future_visits, source: :user
end
