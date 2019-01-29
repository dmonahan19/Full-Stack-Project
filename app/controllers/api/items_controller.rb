class Api::ItemsController < ApplicationController
  

  def create
    @item = Item.new(item_params)
    ActiveRecord::Base.transaction do
      begin
        @item.save
        @pin = @item.pins.new(pin_params)
        @pin.save
        render :show
      rescue
        render json: @item.errors.full_messages, status: 422
      end
    end
  end
  


    private
    
      def item_params
        params.require(:item).permit(:website_url, :photo)
      end

      def pin_params 
        params.require(:pin).permit(:title, :description, :board_id)
      end
end 
