class CreateDailySchedules < ActiveRecord::Migration
  def change
    create_table :daily_schedules do |t|
      t.datetime :date_and_time
      t.string :dog_name
      t.string :people_name

      t.timestamps null: false
    end
  end
end
