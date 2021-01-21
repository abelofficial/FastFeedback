import firebase from './firebase';

const firestore = firebase.firestore();

export const createUser = (uid, data) => {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ ...data }, { merge: true });
};

export const CreateSite = (data) => {
  const sites = firestore.collection('sites').doc();
  sites.set({ ...data });
  return sites;
};

export const CreateFeedback = (data) => {
  const feedbacks = firestore.collection('feedbacks').doc();
  feedbacks.set({ ...data });
  return feedbacks;
};

export const DeleteFeedback = (feedbackId) => {
  return firestore.collection('feedbacks').doc(feedbackId).delete();
};

// export const ChangeFeedbackStatus = (feedbackId) => {
//   return firestore.collection('feedbacks').doc(feedbackId).delete();
// };
