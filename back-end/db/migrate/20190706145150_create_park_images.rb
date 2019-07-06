class CreateParkImages < ActiveRecord::Migration[5.2]
  def change
    create_table :park_images do |t|
      t.references :park, foreign_key: true
      t.string :title
      t.string :altText
      t.string :url
      t.string :caption
      t.string :credit

      t.timestamps
    end
  end
end
