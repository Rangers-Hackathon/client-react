import axios from 'axios';
import * as types from './actionTypes';

const API_BASE_URL = 'http://102.133.146.44/api';

export const fetchFacilities = () => async dispatch => {
    const response = await axios.get(`${API_BASE_URL}/facility/`);
    dispatch({ type: types.FETCH_FACILITIES, payload: response.data });
};

export const fetchFacility = id => async dispatch => {
    const response = await axios.get(`${API_BASE_URL}/facility/${id}`);
    dispatch({ type: types.FETCH_FACILITY, payload: response.data });
};

export const login = credentials => async dispatch => {
    const response = await axios.post(`${API_BASE_URL}/login/`, credentials);
    dispatch({ type: types.LOGIN, payload: response.data });
};

export const logout = () => async dispatch => {
    await axios.post(`${API_BASE_URL}/logout/`);
    dispatch({ type: types.LOGOUT });
};

export const fetchMe = () => async dispatch => {
    const response = await axios.get(`${API_BASE_URL}/me/`);
    dispatch({ type: types.FETCH_ME, payload: response.data });
};

export const fetchPharmacies = () => async dispatch => {
    const response = await axios.get(`${API_BASE_URL}/pharmacy/`);
    dispatch({ type: types.FETCH_PHARMACIES, payload: response.data });
};

export const fetchPharmacy = id => async dispatch => {
    const response = await axios.get(`${API_BASE_URL}/pharmacy/${id}`);
    dispatch({ type: types.FETCH_PHARMACY, payload: response.data });
};

export const register = data => async dispatch => {
    const response = await axios.post(`${API_BASE_URL}/register/`, data);
    dispatch({ type: types.REGISTER, payload: response.data });
};

export const fetchServiceProviders = () => async dispatch => {
    const response = await axios.get(`${API_BASE_URL}/serviceproviders/all/`);
    dispatch({ type: types.FETCH_SERVICE_PROVIDERS, payload: response.data });
};

export const refreshToken = token => async dispatch => {
    const response = await axios.post(`${API_BASE_URL}/token/refresh/`, { token });
    dispatch({ type: types.REFRESH_TOKEN, payload: response.data });
};

export const updateUser = (username, data) => async dispatch => {
    const response = await axios.patch(`${API_BASE_URL}/update/${username}`, data);
    dispatch({ type: types.UPDATE_USER, payload: response.data });
};

export const fetchUser = () => async dispatch => {
    const response = await axios.get(`${API_BASE_URL}/user/`);
    dispatch({ type: types.FETCH_USER, payload: response.data });
};
