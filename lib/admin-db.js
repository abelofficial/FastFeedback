import { compareDesc, parseISO } from 'date-fns';
import { db } from './firebaseAdmin';

export const getAllFeedbacks = async (siteId) => {
  try {
    const snapshot = await db
      .collection('feedbacks')
      .where('siteId', '==', siteId)
      .get();

    const feedbacks = [];
    snapshot.forEach((doc) => {
      feedbacks.push({ id: doc.id, ...doc.data() });
    });

    feedbacks.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { feedbacks };
  } catch (error) {
    return { error };
  }
};

export const getAllSites = async () => {
  try {
    const snapshot = await db.collection('sites').get();

    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    sites.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { sites };
  } catch (error) {
    return { error };
  }
};

export const getUserSites = async (authorId) => {
  const snapshot = await db
    .collection('sites')
    .where('authorId', '==', authorId)
    .get();

  const sites = [];
  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  sites.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return sites;
};

export const getUserFeedback = async (authorId) => {
  const snapshot = await db
    .collection('feedbacks')
    .where('authorId', '==', authorId)
    .get();

  const feedbacks = [];
  snapshot.forEach((doc) => {
    feedbacks.push({ id: doc.id, ...doc.data() });
  });

  feedbacks.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return feedbacks;
};
