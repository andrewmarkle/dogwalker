class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.boolean :walker
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.string :country
      t.string :postal_code
      t.string :timezone
      t.string :telephone
      t.string :email
      t.string :password_digest

      t.timestamps null: false
    end
  end
end
