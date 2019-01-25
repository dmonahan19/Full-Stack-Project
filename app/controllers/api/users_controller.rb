class Api::UsersController < ApplicationController
    def create
      @user = User.new(new_user_params)
  
      if @user.save
        login(@user)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  
    def update
      # debugger
      @user = User.find(params[:id]) 
      if params[:user][:photo]
        @user.photo.attach(params[:user][:photo])
      end
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    private

    def new_user_params
      params.require(:user).permit(:email, :password)
    end
  
    def user_params
      params.require(:user).permit(:email, :password, :first_name, :last_name, :about_you, :location)
    end
  end