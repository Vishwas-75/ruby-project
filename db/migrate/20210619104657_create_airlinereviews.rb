class CreateAirlinereviews < ActiveRecord::Migration[6.1]
  def change
    create_table :airlinereviews do |t|
      t.string :title
      t.string :description
      t.integer :score
      t.belongs_to :airline, null: false, foreign_key: true

      t.timestamps
    end
  end
end
