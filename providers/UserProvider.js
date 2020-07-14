import React, { useState } from 'react';

export const UserContext = React.createContext({
  userToken: null,
  userEmail: null,
  detailsModalIsOpen: false
});

export default function UserProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [detailsModalIsOpen, setDetailsModal] = useState(false);

  const updateUserToken = (token) => {
    setUserToken(token);
  };

  const updateEmail = (newValue) => {
    console.log('UPDATED!!!')
    setUserEmail(newValue);
  };

  return (
    <UserContext.Provider
      value={{
        userToken,
        updateUserToken,
        userEmail,
        updateEmail,
        detailsModalIsOpen,
        setDetailsModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
