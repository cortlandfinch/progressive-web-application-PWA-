import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  // create connection to the database and version
  const jateDB = await openDB("jate", 1);
  // create a new transaction and which database is used and the data privileges
  const tx = jateDB.transaction("jate", "readwrite");
  // open up the object store
  const store = tx.objectStore("jate");
  // use put method for the store and pass in content
  const request = store.put({ jate: content });
  // get the confirmation for the request
  const result = await request;
  console.log('Your data was saved to your database!', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
  // create connection to the database and version
  const jateDB = await openDB("jate", 1);
  // create a new transaction and which database is used and the data privileges
  const tx = jateDB.transaction("jate", "readonly");
};

initdb();
