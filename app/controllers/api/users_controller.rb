class Api::UsersController < ApplicationController

    def index
      if params[:search_query]
        @users = User.where("lower(email) LIKE ? or lower(first_name) LIKE ?", "%#{params[:search_query].downcase}%", "%#{params[:search_query].downcase}%")
        render "api/users/index"
      elsif params[:userIds]  
        @users = User.where(id: params[:userIds]) 
        render "api/users/index"
      end
    end 

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