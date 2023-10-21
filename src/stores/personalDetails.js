// personalDetails.js
import { writable } from 'svelte/store';

// Initialize the store with default values
export const personalDetailsStore = writable({
  name: '',
  address: '',
  email: '',
  phoneNumber: '',
});