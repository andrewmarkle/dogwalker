json.array!(@dogs) do |dog|
  json.extract! dog, :id, :name, :age, :treats
  json.url dog_url(dog, format: :json)
end
