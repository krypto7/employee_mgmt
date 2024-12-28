import React, { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
