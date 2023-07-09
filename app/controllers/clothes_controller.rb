module Api
    module V1
      class ClothesController < ApplicationController
        before_action :authenticate_request!
        rescue_from NoMethodError, with: :no_user
        MAX_PAGINATION_LIMIT = 100
  
        def index
          current_user = current_user!
          clothes = Cloth.limit(limit).offset(params[:offset])
  
          render json: ClothRepresenter.new(clothes, current_user.id).as_json
        end
  
        def create
          current_user = current_user!
  
          cloth = current_user.clothes.create(cloth_params)
  
          if cloth.save
            render json: ClothRepresenter.new(cloth).as_json, status: :created
          else
            render json: cloth.errors, status: :unprocessable_entity
          end
        end
  
        def show
          current_user = current_user!
          cloth = Cloth.find(params[:id])
  
          render json: ClothRepresenter.new(cloth, current_user.id).as_json
        end
  
        def destroy
          Cloth.find(params[:id]).destroy!
  
          head :no_content
        end
  
        private
  
        def limit
          [
            params.fetch(:limit, MAX_PAGINATION_LIMIT).to_i,
            MAX_PAGINATION_LIMIT
          ].min
        end
  
        def cloth_params
          params.require(:cloth).permit(:brand, :color, :type, :size, :image_url)
        end
  
        def no_user
          render json: { error: 'You need to login before you can add a cloth' }, status: :unauthorized
        end
      end
    end
  end
