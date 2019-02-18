class Api::PinsController < ApplicationController
   def index
      if params[:board_id]
        @pins = Board.find(params[:board_id]).pins 
      elsif params[:user_id]
        # boardIds = Board.where(params[:user_id]).ids
        # @pins = Board.where(board_id: boardIds).pins 
        @pins = Pin.joins(:board).where("boards.user_id = #{params[:user_id]}")
      elsif params[:userIds] 
        boardIds = Board.where(user_id: params[:userIds]).ids 
        @pins = Pin.where(board_id: boardIds)
      else 
        @pins = Pin.all 
      end
    end
    
      def show
        @pin = Pin.find(params[:id])
      end
    
      def create
        @pin = Pin.new(pin_params)
        @pin.item_id = params[:item_id]
        if @pin.save
            render :show
        else
          render json: @pin.errors.full_messages, status: 422
        end
      end

      
      def update
        @pin = Pin.find(params[:id]) 
        if @pin.update(pin_params)
          render :show
        else
          render json: @pin.errors.full_messages, status: 422
        end
      end

      def destroy
        @pin = Pin.find(params[:id])
        @pin.destroy
    
        render :show
      end
    
      private
    
      def pin_params
        params.require(:pin).permit(:title, :description, :board_id)
      end
end 
