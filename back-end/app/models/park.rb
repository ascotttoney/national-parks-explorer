# frozen_string_literal: true

class Park < ApplicationRecord
  has_many :past_visits
  has_many :past_vistors, through: :past_visits, class_name: 'User'
  has_many :future_visits
  has_many :future_vistors, through: :future_visits, class_name: 'User'
end
