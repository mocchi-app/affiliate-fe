import React, { useState } from 'react';

export const UserContext = React.createContext({
  userToken: null,
});

export default function UserProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [comission, setComission] = useState(null);

  const updateUserToken = (token) => {
    setUserToken(token);
  };

  const updateComission = (newValue) => {
    setComission(newValue);
  };

  return (
    <UserContext.Provider
      value={{
        userToken,
        updateUserToken,
        comission,
        updateComission,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
