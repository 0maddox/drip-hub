class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true, length: { minimum: 3 }
    validates :password, presence: true, length: { minimum: 6 }
    
    has_secure_password
    has_many :favourites
    has_many :clothes, through: :reviews

    def self.fav_clothes(user)
        favs = []
        user.favourites.each { |a| favs << a.cloth_id }
        Cloth.where(id: favs)
      end
end
