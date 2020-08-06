import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const UserContext = React.createContext({
  userToken: null,
  userEmail: null,
  detailsModalIsOpen: false
});

export default function UserProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [detailsModalIsOpen, setDetailsModal] = useState(false);
  const router = useRouter();

  const SignUpUrls =  ['/', '/email']

  const updateUserToken = (token) => {
    setUserToken(token);
  };

  const updateEmail = (newValue) => {
    console.log('UPDATED!!!')
    setUserEmail(newValue);
  };

  const updateUserImage = (image) => {
    setUserImage(image);
  }

  useEffect(() => {
    if (!SignUpUrls.includes(router.pathname) && !userToken) {
      // router.push('/email');
    }
    return () => {}
  }, [userToken])

  return (
    <UserContext.Provider
      value={{
        userToken,
        updateUserToken,
        userEmail,
        updateEmail,
        detailsModalIsOpen,
        setDetailsModal,
        userImage,
        updateUserImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
