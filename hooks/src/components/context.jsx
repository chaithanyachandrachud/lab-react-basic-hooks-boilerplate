import React, { createContext, useState } from 'react';

export const MyContext = createContext();

function Context({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <MyContext.Provider value={{ dark, setDark }}>
      {children}
    </MyContext.Provider>
  );
}
export default Context