class PeoplesController < ApplicationController
  def index
  end

  def create 
    @people = People.new(name: params[:name], bio: params[:bio])

    if @person.save
      render :show
    else
      render json: {errors: "didn't work"}, status: 422
    end
    
  end
end
