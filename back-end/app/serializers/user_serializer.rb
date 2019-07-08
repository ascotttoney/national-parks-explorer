class UserSerializer < ActiveModel::Serializer
  attributes :userName, :firstName, :lastName, :profilePicture
end
