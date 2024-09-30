import { openDB } from 'idb';

// Initialize the database, creating an object store if it doesn't exist
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create object store with auto-incrementing ID
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method to add content to the database (PUT request)
export const putDb = async (content) => {
  console.log('PUT to the database');

  const jateDb = await openDB('jate', 1); // Connect to the database
  const tx = jateDb.transaction('jate', 'readwrite'); // Start a transaction
  const store = tx.objectStore('jate'); // Access the object store
  const request = store.put({ id: 1, value: content }); // Put content in store
  const result = await request; // Await the result
  console.log('Data saved to the database', result);
};

// Method to retrieve content from the database (GET request)
export const getDb = async () => {
  console.log('GET from the database');

  const jateDb = await openDB('jate', 1); // Connect to the database
  const tx = jateDb.transaction('jate', 'readonly'); // Start a transaction
  const store = tx.objectStore('jate'); // Access the object store
  const request = store.get(1); // Get data by key (ID)
  const result = await request; // Await the result
  console.log('Data retrieved from the database', result?.value);
  return result?.value; // Return retrieved value or undefined if not found
};

// Initialize the database when the module is loaded
initdb();
