import * as types from './actionTypes';
import rideApi from '../api/rideApi';

export function loadRidesRequest() {

}

export function loadRidesSuccess(rides) {
  return { type: types.LOAD_RIDES_SUCCESS, rides };
}

export function loadRidesFailure(message) {
  return { type: types.LOAD_RIDES_FAILURE, message };
}

export function loadRides(userId) {
  return dispatch => rideApi.getUserRides(userId).then((response) => {
    dispatch(loadRidesSuccess(response.data));
  });
}

export function createRideRequest() {

}

export function createRideSuccess(ride) {
  return { type: types.CREATE_RIDE_SUCCESS, ride };
}

export function createRideFailure(message) {
  return { type: types.CREATE_RIDE_FAILURE, message };
}

export function createRide(ride) {
  return dispatch => rideApi.createRide(ride).then((response) => {
    dispatch(createRideSuccess(response.data));
  });
}

export function updateRideRequest() {

}

export function updateRideSuccess(ride) {
  return { type: types.UPDATE_RIDE_SUCCESS, ride };
}

export function updateRideFailure(message) {
  return { type: types.UPDATE_RIDE_FAILURE, message };
}

export function updateRide(ride) {
  return dispatch => rideApi.updateRide(ride).then((response) => {
    dispatch(updateRideSuccess(response.data));
  });
}

export function deleteRideRequest() {

}

export function deleteRideSuccess(ride) {
  return { type: types.DELETE_RIDE_SUCCESS, ride };
}

export function deleteRideFailure(message) {
  return { type: types.DELETE_RIDE_FAILURE, message };
}

export function deleteRide(id) {
  return dispatch => rideApi.deleteRide(id).then((response) => {
    dispatch(deleteRideSuccess(response.data));
  });
}
