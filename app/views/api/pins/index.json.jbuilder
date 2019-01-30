
@pins.each do |pin|
  json.pins do
    json.set! pin.id do
      json.extract! pin, :id, :title, :description, :item_id, :board_id, :created_at
      json.extract! pin.item, :website_url
      if pin.item.photo.attached?
        json.photo url_for(pin.item.photo)
      end
    end
  end
end