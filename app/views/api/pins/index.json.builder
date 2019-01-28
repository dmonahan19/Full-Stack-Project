json.pins do
  @pins.each do |pin|
    json.set! pin.id do
      json.extract! pin, :id, :title, :description, :item_id, :board_id :created_at
    end
  end

end