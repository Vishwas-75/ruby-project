module Api 
    module V1 
        class AirlinereviewsController < ApplicationController
            protect_from_forgery with: :null_session

            def create
                review = Airlinereview.new(review_params)

                if review.save
                    render json: AirlinereviewSerializer.new(review).as_json
                 else
                     flash[:alert] = review.errors.message
                end
            end

            def destroy
                review = Airlinereview.find_by(id: params[:id])

                if review.destroy
                    flash[:notice] ="Sccessfull Deleted"
                else
                     flash[:alert] = review.errors.message
                end    

            end
                   
            private
            
            def review_params
                params.require(:airlinereview).permit(:title, :description, :score, :airline_id)
            end
        end
    end
end
