import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState({
    isLoggedIn: false,
    user: null,
  });
  const router = useRouter();
  const { pathname } = router;

  console.log(session);

  const login = async (username, password, setSubmitting) => {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSession({
          isLoggedIn: true,
          user: data,
        });
        localStorage.setItem("token", data?.token);
        router.push("/");
      })
      .catch((err) =>
        setTimeout(() => {
          setSubmitting(false);
          console.log(err);
        }, 1000)
      );
  };

  const logout = () => {
    setSession({
      isLoggedIn: false,
      user: null,
    });

    router.push("/login");
    localStorage.setItem("token", "");
  };

  useEffect(() => {
    if (pathname !== "/login" && !session.user) {
      router.push("/login");
    }
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
