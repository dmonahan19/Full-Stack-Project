class Api::FollowsController < ApplicationController
    
    def index
        @follows =  Follow.where(following_id: current_user.id) + Follow.where(user_id: current_user.id)
    end
         
    def create
         @follow = Follow.new(follow_params)
         @follow.user_id = current_user.id
        if @follow.save
            render :show
        else
            render :show
        end
        
    end
   
    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
    
        render :show
    end
    
    private
    
    def follow_params
        params.require(:follow).permit(:following_type, :following_id, :user_id)
    end
end 
