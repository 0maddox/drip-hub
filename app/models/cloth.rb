class Cloth < ApplicationRecord
    belongs_to :user
    has_many :users, through: :favourites

    validates :brand, :color, :type, :size, :image_url, presence: true
end
