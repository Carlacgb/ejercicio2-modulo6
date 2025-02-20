import PouchDB from 'pouchdb';

const DB_NAME = 'doctors_pouch';
let db;

export const initPouchDB = () => {
  if (!db) {
    db = new PouchDB(DB_NAME);
    
  }
    return db;
};

export const syncWithIndexedDB = async () => {
  const localDB = initPouchDB();
  try{
  await localDB.replicate.from('doctors_db', {
    live:true,
    retry: true,
    filter: (doc) => {
        return doc._id;
      }
  });
}
catch(err){
    console.log("error de replicacion", err)
}
};

export async function getAllDoctorsPouch() {
    const localDB = initPouchDB();
    return localDB.allDocs({ include_docs: true })
    .then((result) => result.rows.map((row) => row.doc));
  }
  
  export async function addDoctorPouch(doctor) {
    const localDB = initPouchDB();
    return localDB.post(doctor);
  }

  export async function deleteDoctorPouch(id){
    const localDB = initPouchDB();
    return localDB.get(id).then(doc => localDB.remove(doc));
  }

  export async function updateDoctorPouch(doctor){
    const localDB = initPouchDB();
   return localDB.put(doctor);
  }