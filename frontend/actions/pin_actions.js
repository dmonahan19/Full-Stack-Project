import * as PinApiUtil from '../util/pin_api_util';
export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = 'RECEIVE_ERRORS';

    const receiveAllPins = (payload, userIds) => {
      return({
        type: RECEIVE_ALL_PINS,
        payload,
        userIds
      });
    };


    const receivePin = pin => ({
        type: RECEIVE_PIN,
        pin
    });
    
    const removePin = pinId => ({
        type: REMOVE_PIN,
        pinId
    });

export const receiveErrors = (errors) => ({
  type: RECEIVE_PIN_ERRORS,
  errors,
});

export const fetchBoardPins = (boardIds) => dispatch => {
    return(
    PinApiUtil.fetchBoardPins(boardIds).then(pins => dispatch(receiveAllPins(pins)))
  );
};

export const fetchUsersPins = (userIds) => dispatch => (
  PinApiUtil.fetchUsersPins(userIds).then(pins => dispatch(receiveAllPins(pins)))
);

  export const fetchPins = (boardId) => dispatch => { 
    return(
    PinApiUtil.fetchPins(boardId).then(pins => dispatch(receiveAllPins(pins)))
    )};

  export const fetchUserPins = (userId) => dispatch => (
  PinApiUtil.fetchUserPins(userId).then(pins => dispatch(receiveAllPins(pins)))
);



  export const fetchPin = id => dispatch => (
    PinApiUtil.fetchPin(id).then(pin => dispatch(receivePin(pin)))
  );


export const updatePin = pin => dispatch => (
  PinApiUtil.updatePin(pin).then(pin => dispatch(receivePin(pin)))
);
  
  export const createPin = pin => dispatch => (
    PinApiUtil.createPin(pin).then(pin => dispatch(receivePin(pin)),
     errors => dispatch(receiveErrors(errors.responseJSON))
      )
  );
  
  export const deletePin = pinId => dispatch => (
    PinApiUtil.deletePin(pinId).then(pinId => dispatch(removePin(pinId)))
  );

  