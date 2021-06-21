class CreateFutureVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :future_visits do |t|
      t.references :user, foreign_key: true
      t.references :park, foreign_key: true
      t.string :title
      t.text :description
      t.string :season
      t.integer :year

      t.timestamps
    end
  end
end
