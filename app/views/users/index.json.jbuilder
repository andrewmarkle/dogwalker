json.array!(@users) do |user|
  json.extract! user, :id, :walker, :name, :street_address, :city, :state, :country, :postal_code, :timezone, :telephone
  json.url user_url(user, format: :json)
end
