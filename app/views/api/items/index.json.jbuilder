json.items do
  @items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :website_url
      json.photo url_for(item.photo)
    end
  end

end