json.pins do 
    json.set! @pin.id do 
        json.extract! @pin, :id, :title, :description, :item_id, :board_id
         json.extract! @item, :website_url
        json.photo url_for(@item.photo)
    end
end