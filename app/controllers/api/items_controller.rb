class Api::ItemsController < ApplicationController
  
  def index
    @items = Item.all
  end

  def show
    @item = Item.find(params[:id])
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end
  
  def update
    @Item = Item.find(params[:id]) 
    if @item.update(pin_params)
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    render :show
  end

    private
    
      def item_params
        params.require(:item).permit(:web_url, :photo)
      end
end 
