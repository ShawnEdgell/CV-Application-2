import { writable } from 'svelte/store';

// Initialize the store with an empty array for certificate titles
export const certificateListStore = writable([]);
