json.array!(@daily_schedules) do |daily_schedule|
  json.extract! daily_schedule, :id, :date_and_time, :dog_name, :people_name
  json.url daily_schedule_url(daily_schedule, format: :json)
end
