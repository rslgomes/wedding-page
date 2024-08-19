import { API_URL, routes } from './config';
const { route: GUESTS_ROUTE } = routes.GUESTS;
const { GET_GUESTS, PUT_UPDATE_BUNDLE, ADD_BUNDLE } = routes.GUESTS.enpoints;

export const paths = {
  GET_GUEST_LIST: `${API_URL}${GUESTS_ROUTE}${GET_GUESTS}`,
  PUT_UPDATE_BUNDLE: `${API_URL}${GUESTS_ROUTE}${PUT_UPDATE_BUNDLE}`,
  PUT_UPDATE_GUEST: `${API_URL}${GUESTS_ROUTE}`,
  POST_ADD_BUNDLE: `${API_URL}${GUESTS_ROUTE}${ADD_BUNDLE}`,
};
