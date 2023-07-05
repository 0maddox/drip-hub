class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :passwod_digest
end
