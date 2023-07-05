module Api
    module V1
      class FavouritesController < ApplicationController
        before_action :authenticate_request!
  
        def index
          favourites = User.fav_cloth(current_user!)
  
          render json: ClothesRepresenter.new(favourites, current_user!.id).as_json
        end
  
        def create
          favourite = current_user!.favourites.create(cloth_id: params[:cloth_id])
  
          if favourite.save
            render json: { message: 'Added to favourite succesfully' }, status: :created
          else
            render json: { error: favourite.errors.full_messages.first }, status: :unprocessable_entity
          end
        end
  
        def destroy
          favourite = Favourite.find_by(user_id: current_user!.id, cloth_id: params[:id])
  
          if favourite
            favourite.destroy
            render json: { message: 'Cloth removed successfully from favorite' }
          else
            render json: { message: 'Something went wrong' }
          end
        end
      end
    end
  end