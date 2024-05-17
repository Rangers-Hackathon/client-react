import { combineReducers } from 'redux';
import * as types from './actionTypes';

const facilitiesReducer = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_FACILITIES:
            return action.payload;
        default:
            return state;
    }
};

const facilityReducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_FACILITY:
            return action.payload;
        default:
            return state;
    }
};

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, user: action.payload };
        case types.LOGOUT:
            return { ...state, user: null };
        default:
            return state;
    }
};

const meReducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_ME:
            return action.payload;
        default:
            return state;
    }
};

const pharmaciesReducer = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_PHARMACIES:
            return action.payload;
        default:
            return state;
    }
};

const pharmacyReducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_PHARMACY:
            return action.payload;
        default:
            return state;
    }
};

const serviceProvidersReducer = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_SERVICE_PROVIDERS:
            return action.payload;
        default:
            return state;
    }
};

const tokenReducer = (state = {}, action) => {
    switch (action.type) {
        case types.REFRESH_TOKEN:
            return { ...state, token: action.payload };
        default:
            return state;
    }
};

const updateUserReducer = (state = {}, action) => {
    switch (action.type) {
        case types.UPDATE_USER:
            return action.payload;
        default:
            return state;
    }
};

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    facilities: facilitiesReducer,
    facility: facilityReducer,
    auth: authReducer,
    me: meReducer,
    pharmacies: pharmaciesReducer,
    pharmacy: pharmacyReducer,
    serviceProviders: serviceProvidersReducer,
    token: tokenReducer,
    updatedUser: updateUserReducer,
    user: userReducer,
});

export default rootReducer;
