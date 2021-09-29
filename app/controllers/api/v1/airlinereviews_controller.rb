module Api 
  module V1
    class AirlinereviewsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        reviews = airline.airlinereviews
        if reviews.present?
            render json: AirlinereviewSerializer.new(reviews).as_json
        else
            render json: { success: true, messageType: 'success', message: 'No reviews found' }
        end  
      end  

      def create
        review = airline.airlinereviews.new(review_params)
        if review.save!
            render json: { success: true, messageType: 'success', message:'Thanks for your review', data:AirlinereviewSerializer.new(review).as_json}
        else
            render json: { success: false, messageType: 'failure', message: 'Failed to Uplaod' }
        end
      end  

      def update
        review = airline.airlinereviews.find_by(id: params[:id])
        begin
          review.update!(review_params)
        rescue
          render json: { success: false, messageType: 'failure', message: 'Failed to Uplaod' }
          return
        end
        render json: { success: true, messageType: 'success', message: 'Updated successfully', data: AirlinereviewSerializer.new(review)}
      end

      def destroy
        review = airline.airlinereviews.find_by(id: params[:id])
        if review.destroy
            render json: { success: true, messageType: 'success', message: 'Deleted Successfully', data: AirlinereviewSerializer.new(review) }
        else
            render json: { success: false, messageType: 'failure', message: 'Failed to deleted' }
        end    
      end
               
      private

        def airline
            airline = Airline.find_by(id: params[:airline_id])
        end  
  
        def review_params
            params.require(:airlinereview).permit(:title, :description, :score, :airline_id)
        end
    end
  end
end
