module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        review = Review.new(reviews_params)
        if review.save
          render json: review
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      def destroy
        review = Review.find(params[:id])
        if review.destroy
          head :no_content
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      private

      def reviews_params
        params.require(:review).permit(:title, :description, :score, :room_id)
      end

    end
  end
end
