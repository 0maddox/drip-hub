class HomeController < ApplicationController
    def index
      render json: 'Welcome to drip_Hub API Home'
    end
  end