class Airline < ApplicationRecord
    has_many :airlinereviews
    before_create :slugify
    def slugify
        self.slug = name.parameterize
    end

    def avg_score
       return 0 unless airlinereviews.count.positive?
        
     airlinereviews.average(:score).round(2).to_f
    end
end
