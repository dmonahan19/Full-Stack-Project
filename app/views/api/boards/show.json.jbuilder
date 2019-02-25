 json.extract! @board, :id, :title, :user_id, :created_at
  json.set! :numPins, @board.pins.count
     if !@board.pins.empty?
        json.lastEdited @board.pins.last.updated_at
      end

 