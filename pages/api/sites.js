import cors from 'cors';
import nc from 'next-connect';

import db from '@lib/firebaseAdmin';

const onError = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: 'Something went wrong. Please try again.' });
};

const onNoMatch = (req, res, next) => {
  res.status(404).json({ message: 'The requested endpoint is not supported.' });
};
const handler = nc({ onNoMatch, onError })
  .use(cors())
  .get(async (req, res) => {
    const snapshot = await db.collection('sites').get();
    const sitesData = {};
    snapshot.forEach((doc) => {
      sitesData[doc.id] = doc.data();
    });

    res.status(200).json(sitesData);
  });

export default handler;
