class ClothRepresenter
    def initialize(cloth, user_id)
      @cloth = cloth
      @user_id = user_id
    end
  
    def as_json
      {
        
        id: cloth.id,
        name: cloth_name(cloth),
        brand: cloth.brand,
        fav: favourite?(cloth.id, user_id),
        color: cloth.color,
        type:  cloth.type,
        size: cloth.size,
        image: cloth.image_url,
        gender: cloth.gender,
        date_added: cloth.created_at     
        
       
      }
    end
  
    private
  
    def cloth_name(cloth)
      "#{cloth.type} #{cloth.size} #{cloth.gender} #{cloth.color}"
    end
  
    
  
    def favourite?(cloth_id, user_id)
      cloth = Cloth.find(cloth_id)
      cloth.favourites.where(user_id: user_id).count.zero? ? 'No' : 'Yes'
    end
  
    attr_reader :clorh, :user_id
  end