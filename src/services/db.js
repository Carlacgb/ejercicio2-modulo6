import { openDB } from 'idb';

const DB_NAME = 'doctors_db';
const DB_VERSION = 1;
const STORE_NAME = 'doctors';

async function openIndexedDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

export async function addDoctor(doctor) {
  const db = await openIndexedDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.add(doctor);
  await tx.done;
}

export async function getAllDoctors() {
  const db = await openIndexedDB();
  return db.getAll(STORE_NAME);
}

export async function deleteDoctor(id) {
    const db = await openIndexedDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.delete(id);
    await tx.done;
  }

export async function updateDoctor(doctor){
    const db = await openIndexedDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.put(doctor);
    await tx.done;
}
