module Api 
    module V1 
        class AirlinesController < ApplicationController
        
            protect_from_forgery with: :null_session
            def index 
                airlines = Airline.all

                render json: AirlineSerializer.new(airlines, options).serialized_json
            end

            def show
                airline = Airline.find_by(slug: params[:slug])

                if(airline)
                 render json: AirlineSerializer.new(airline, options).as_json
                else
                    flash[:alert] = "Somithing went wrong"
                end        
            end

            def create
                airline=Airline.new(airline_params)

                if airline.save
                    flash[:alert] = "Successfully Created"
                    render json: AirlineSerializer.new(airline).as_json
                else
                    flash[:alert] = airline.errors.message
                end
            end

            def update 
                airline=Airline.find_by(slug: params[:slug])

                if airline.update(airline_params)
                    flash[:alert] = "Successfully Updated"
                    render json: AirlineSerializer.new(airline).as_json
                else
                    flash[:alert] = airline.errors.message
                end
            end

            def destroy
                airline=Airline.find_by(slug: params[:slug])

                if airline
                    review = Airlinereview.find_by(airline_id: airline.id)
                    review.destroy

                    if airline.destroy
                     flash[:alert] = "Successfully deleted"
                     render plain: "OK"
                    end   
                else
                    flash[:alert] = airline.errors.message
                end

            end

            private

            def airline_params
             params.required(:airline).permit(:name, :image_url)
            end

            def options
                @option ||= { include: %i[airlinereviews]}
            end
        end
    end

end
