class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :userName
      t.string :password_digest_string
      t.string :firstName
      t.string :lastName
      t.string :profilePicture

      t.timestamps
    end
  end
end
