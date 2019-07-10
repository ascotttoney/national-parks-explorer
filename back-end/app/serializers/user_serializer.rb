class UserSerializer < ActiveModel::Serializer
  attributes :id, :userName, :firstName, :lastName, :profilePicture
end
