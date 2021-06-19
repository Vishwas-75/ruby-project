class CreateAirlines < ActiveRecord::Migration[6.1]
  def change
    create_table :airlines do |t|
      t.string :name
      t.string :image_url
      t.string :slug

      t.timestamps
    end
    add_index :airlines, :slug, unique: true
  end
end
