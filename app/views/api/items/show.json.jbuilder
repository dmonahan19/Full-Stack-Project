
json.set! @item.id do
  json.extract! @item, :id, :website_url
  json.photo url_for(@item.photo)
end