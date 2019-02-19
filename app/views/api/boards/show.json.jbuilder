 json.extract! @board, :id, :title, :user_id
  json.set! :numPins, @board.pins.count

 