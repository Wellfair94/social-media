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
        router.push("/feed");
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

    router.push("/");
    localStorage.setItem("token", "");
  };

  useEffect(() => {
    if (pathname !== "/" && !session.user) {
      router.push("/");
    }
  }, [pathname]);

  const refreshFollowing = (data) => {
    const { isLoggedIn, user } = session;
    const { meta } = user;

    const updatedMeta = {
      ...meta,
      following: data,
    };

    const updatedSession = {
      isLoggedIn: isLoggedIn,
      user: {
        ...user,
        meta: {
          ...updatedMeta,
        },
      },
    };

    setSession({ ...updatedSession });
  };

  console.log(session);

  return (
    <AuthContext.Provider value={{ session, login, logout, refreshFollowing }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
