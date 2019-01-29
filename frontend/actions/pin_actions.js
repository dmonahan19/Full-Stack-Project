import * as PinApiUtil from '../util/pin_api_util';
export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS"
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";

    const receiveAllPins = pins => ({
        type: RECEIVE_ALL_Pins,
        pins
    })


    const receivePin = pin => ({
        type: RECEIVE_PIN,
        pin
    });
    
    const removePin = pinId => ({
        type: REMOVE_PIN,
        pinId
    });

  export const fetchPins = (boardId) => dispatch => (
    PinApiUtil.fetchPins(boardId).then(pins => dispatch(receiveAllPins(pins)))
  )

  export const fetchPin = id => dispatch => (
    PinApiUtil.fetchPin(id).then(pin => dispatch(receivePin(pin)))
  );
  
  export const createPin = pin => dispatch => (
    PinApiUtil.createPin(pin).then(pin => dispatch(receivePin(pin)))
  );
  
  export const deletePin = pinId => dispatch => (
    PinApiUtil.deletePin(pinId).then(pinId => dispatch(removePin(pinId)))
  );
  