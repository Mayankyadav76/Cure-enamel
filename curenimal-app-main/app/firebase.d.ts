// firebase.d.ts
declare module 'firebase/firestore' {
    interface Firestore {
      collection(collectionPath: string): firebase.firestore.CollectionReference;
      // Add other methods as needed
    }
  }
  