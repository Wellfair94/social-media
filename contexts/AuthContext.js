import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState({
    isLoggedIn: false,
    user: null,
  });
  const router = useRouter();

  const login = (username, password) => {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((data) =>
        setSession({
          isLoggedIn: true,
          user: data,
        })
      )
      .catch((err) => console.log(err));
  };

  const logout = () => {
    setSession({
      isLoggedIn: false,
      user: null,
    });

    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
