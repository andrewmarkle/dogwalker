class CreateDogs < ActiveRecord::Migration
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :age
      t.string :treats
      t.integer :user_id

      t.timestamps null: false
    end

    add_column :daily_schedules, :user_id, :integer
  end
end
