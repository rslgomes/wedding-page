import { Guest } from '../helpers/types';
import { paths } from './paths';

// Get all guests
export const fetchGuests = async () => {
  try {
    const response = await fetch(paths.GET_GUEST_LIST, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch guests:', error);
    throw error;
  }
};

// Update bundle
export const updateBundle = async (bundleData: Guest[]) => {
  try {
    const response = await fetch(paths.PUT_UPDATE_BUNDLE, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guests: bundleData }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to update bundle:', error);
    throw error;
  }
};
