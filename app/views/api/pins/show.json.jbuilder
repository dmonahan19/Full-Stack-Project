

json.extract!  json.extract! @pin, :id, :title, :description, :item_id, :board_id
json.extract! @pin.item, :website_url
json.photo url_for(@pin.item.photo)
