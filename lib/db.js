import firebase from './firebase';

const firestore = firebase.firestore();

export const createUser = (uid, data) => {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ ...data }, { merge: true });
};

export const CreateSite = (data) => {
  return firestore.collection('sites').add({ ...data });
};

export const CreateFeedback = (data) => {
  return firestore.collection('feedbacks').add({ ...data });
};
