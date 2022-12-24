module Api
  module V1
    class RoomsController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :set_room, only: %i[show update destroy]

      def index
        rooms = Room.all.order(created_at: :desc)
        render json: rooms, include: %i[user reviews]
      end

      def show
        render json: @room, include: %i[user reviews]
      end

      def create
        room = Room.new(room_params)
        if room.save
          render json: room, include: %i[user reviews]
        else
          render json: { error: room.errors.messages }, status: 422
        end
      end

      def update
        if @room.update(room_params)
          render json: @room, include: %i[user reviews]
        else
          render json: { error: @room.erros.messages }, status: 422
        end
      end

      def destroy
        if @room.destroy
          head :no_content
        else
          render json: { error: @room.erros.messages }, status: 422
        end
      end

      private

      def room_params
        params.require(:room).permit(:title, :user_id)
      end

      def set_room
        @room = Room.find_by(id: params[:id])
      end

    end
  end

end
