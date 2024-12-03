import { createContext, useState } from "react";
import auth from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)

export default function AuthProvider({children}) {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const createUser = (email, password) => {
       setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
     };

     const signInUser = (email, password) => {
       setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
     };




    const userInfo = {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      signInUser,
    };
  return (
    <AuthContext.Provider  value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}
