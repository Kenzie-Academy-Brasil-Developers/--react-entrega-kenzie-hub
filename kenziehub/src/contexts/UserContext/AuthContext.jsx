import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api.js";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserAuth(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  async function handleUser(user) {
    try {
      const response = await api.post("/sessions", user);

      const { user: userResponse } = response.data;
      setUserAuth(userResponse);

      window.localStorage.clear();
      window.localStorage.setItem("authToken", response.data.token);

      toast.success("Login realizado com sucesso");

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      toast.error(`${error}`);
    }
  }
  return (
    <AuthContext.Provider value={{ handleUser, userAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
