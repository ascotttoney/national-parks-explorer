# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attributes :userName, :firstName, :lastName, :profilePicture, :id, :past_visits, :future_visits, :parks

  def parks
    object.past_visits.map do |visit|
      ParkSerializer.new(visit.park)
    end
  end
end
