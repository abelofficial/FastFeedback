import React, { useState, useEffect, useContext, createContext } from 'react';
import cookie from 'js-cookie';

import { createUser } from './db';
import firebase from './firebase';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const { token, ...userDataWithoutToken } = formatUser(rawUser);
      cookie.set('fast-feedback-auth', true, { expires: 1 });
      createUser(userDataWithoutToken.uid, userDataWithoutToken);
      setUser({ ...userDataWithoutToken, token: token });

      return user;
    } else {
      cookie.remove('fast-feedback-auth');
      setUser(false);
      return false;
    }
  };

  const signinWithGithub = async (email, password) => {
    return await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
      });
  };

  const signinWithGoogle = async (email, password) => {
    return await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);
      });
  };

  const signout = async () => {
    return await firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signinWithGoogle,
    signout
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.ya,
    provider: user.providerData[0].providerId,
    imgUrl: user.providerData[0].photoURL
  };
};
