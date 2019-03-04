class Api::ItemsController < ApplicationController
  

  def create
    ActiveRecord::Base.transaction do
      begin
        @item = Item.new(item_params)
        @item.save!
        @pin = @item.pins.new(pin_params)
        @pin.save!
        render :show
      rescue
        if @pin.errors.full_messages.length > 0
             render json: ["A board is required to create a Pin."], status: 422
        end 
       if @item.errors.full_messages.length > 0
          render json:["An image is required to create a Pin."], status: 422
       end
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
