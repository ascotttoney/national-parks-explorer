# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attributes :userName, :firstName, :lastName, :profilePicture, :id
end
