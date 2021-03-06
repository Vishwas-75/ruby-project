class AirlinereviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :description, :score, :airline_id

  belongs_to :airline
end
