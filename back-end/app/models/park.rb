# frozen_string_literal: true

class Park < ApplicationRecord
  has_many :park_images
  has_many :past_visits
  has_many :past_visitors, class_name: 'User', through: :past_visits, source: :user
  has_many :future_visits
  has_many :future_visitors, class_name: 'User', through: :future_visits, source: :user

  def self.national_parks
    Park.all.select { |park| park.designation.include?('National Park') }
  end
end
