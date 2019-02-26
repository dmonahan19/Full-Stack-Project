class Api::BoardsController < ApplicationController
    def index

        @boards = User.find(params[:user_id]).boards 
    end
    
      def show
        @board = Board.find(params[:id])
      end
    
      def create
        @board = current_user.boards.new(board_params)
    
        if @board.save
          render :show
        else
          render json: @board.errors.full_messages, status: 422
        end
      end
      
      def update
        @board = current_user.boards.find(params[:id]) 
          if @board.update(board_params)
            render :show
          else
            render json: @board.errors.full_messages, status: 422
          end
      end
   
      def destroy
        @board = Board.find(params[:id])
        @board.destroy
    
        render json: {id: @board.id, user_id: @board.user_id}
      end
    
      private
    
      def board_params
        params.require(:board).permit(:title, :description)
      end

end 