import React, { useState } from 'react';

export const ModalsContext = React.createContext({
  detailsModalIsOpen: false,
  addProductModalIsOpen: false,
});

export default function ModalsProvider({ children }) {
  const [detailsModalIsOpen, setDetailsModal] = useState(false);
  const [addProductModalIsOpen, setAddProductModal] = useState(true);

  return (
    <ModalsContext.Provider
      value={{
        detailsModalIsOpen,
        setDetailsModal,
        addProductModalIsOpen,
        setAddProductModal
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}
