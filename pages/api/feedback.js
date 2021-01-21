import cors from 'cors';
import nc from 'next-connect';

import { auth } from '@lib/firebaseAdmin';
import { getUserFeedback } from '@lib/admin-db';

const onError = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err });
};

const onNoMatch = (req, res, next) => {
  res.status(404).json({ message: 'The requested endpoint is not supported.' });
};
const handler = nc({ onNoMatch, onError })
  .use(cors())
  .get(async (req, res) => {
    try {
      const { authorization } = req.headers;
      const { uid } = await auth.verifyIdToken(authorization);
      const feedbacks = await getUserFeedback(uid);
      res.status(200).json({ feedbacks });
    } catch (error) {
      res.status(401).json({ error });
    }
  });

export default handler;
