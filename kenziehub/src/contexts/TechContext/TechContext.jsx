import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api.js";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const token = localStorage.getItem("authToken");
  const [modalCreateTech, setModalCreateTech] = useState(false);
  const [modalEditTech, setModalEditTech] = useState(false);
  const [stateId, setStateId] = useState([]);
  const [tech, setTech] = useState([]);

  useEffect(() => {
    async function loadTech() {
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTech(data.techs);
      } catch (error) {
        console.error(error);
      }
    }

    loadTech();
  }, [modalCreateTech, modalEditTech, stateId, token]);

  async function PostTech(data) {
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia cadastrada com sucesso");
    } catch (error) {
      toast.error(`${error}`);
    }
  }
  async function PutTech(id, data) {
    try {
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia alterada com sucesso");
    } catch (error) {
      toast.error(`${error}`);
    }
  }
  async function DeleteTech(id) {
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia deletada com sucesso");
    } catch (error) {
      toast.error(`${error}`);
    }
  }
  return (
    <TechContext.Provider
      value={{
        PostTech,
        tech,
        modalCreateTech,
        setModalCreateTech,
        modalEditTech,
        setModalEditTech,
        PutTech,
        stateId,
        setStateId,
        DeleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
