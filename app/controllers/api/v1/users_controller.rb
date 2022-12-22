module Api
  module V1
    class UsersController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :set_user, only: %i[ show update destroy ]

      def index
        users = User.all
        render json: users, include: :rooms
      end

      def show
        render json: @user, include: :rooms
      end

      def create
        user = User.new(user_params)
        if user.save
          render json: user, include: :rooms
        else
          render json: { error: user.errors.messages }, status: 422
        end
      end

      def update
        if @user.update(user_params)
          render json: @user, include: :rooms
        else
          render json: { error: @user.errors.messages }, status: 422
        end
      end

      def destroy
        unless @user.nil?
          if @user.destroy
            head :no_content
          else
            render json: { error: @user.erros.messages }, status: 422
          end
        end
      end

      private

      def user_params
        params.require(:user).permit(:name)
      end

      def set_user
        @user = User.find_by(id: params[:id])
      end

    end
  end
end
