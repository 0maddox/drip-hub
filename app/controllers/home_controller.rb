class HomeController < ApplicationController
    def index
      render json: 'Welcome to Drip_Hub API Home'
    end
  end