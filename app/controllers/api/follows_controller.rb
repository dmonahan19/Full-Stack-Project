class Api::FollowsController < ApplicationController
    def index
     
    end
         
    def create
        debugger
         @follow = Follow.new(follow_params)
         @follow.user_id = current_user.id
        if @follow.save
          render json: {id: @follow.id, user_id: @follow.user_id}
        else
          render json: @follow.errors.full_messages, status: 422
        end
        
    end
   
    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
    
        render json: {id: @follow.id, user_id: @follow.user_id}
    end
    
    private
    
    def follow_params
        params.require(:follow).permit(:following_type, :following_id, :user_id)
    end
end 
