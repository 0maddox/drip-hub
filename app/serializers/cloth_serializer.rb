class ClothSerializer < ActiveModel::Serializer
  attributes :id, :size, :type, :price, :image_url, :description
end
