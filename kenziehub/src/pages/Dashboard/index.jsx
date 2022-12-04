import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./style.js";
import imgLogo from "../../assets/Logo.svg";
import imgAdd from "../../assets/+.svg";
import imgRemove from "../../assets/Vector.svg";
import { useNavigate } from "react-router-dom";

export function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const token = window.localStorage.getItem("authToken");
  const modal = document.querySelector("dialog");

  function Logout() {
    window.localStorage.clear();
    navigate("/");
  }
  useEffect(() => {
    axios
      .get("https://kenziehub.herokuapp.com/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(user);
  return (
    <body>
      <S.Header>
        <img src={imgLogo} alt="Logo" />
        <button onClick={Logout}>Sair</button>
      </S.Header>
      <main>
        <S.SectionUser>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </S.SectionUser>
        <S.SectionTech>
          <div>
            <h2>Tecnologias</h2>
            <button onClick={() => modal.showModal()}>
              <img src={imgAdd} alt="" />
            </button>
          </div>
          <ul>
            <li>teste</li>
          </ul>
          <dialog>
            <div>
              <h3>Cadastrar Tecnologia</h3>
              <button onClick={() => modal.close()}>X</button>
            </div>
            <form>
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="Insira uma tecnologia" />

              <label htmlFor="">Selecionar status</label>
              <select name="" id="">
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <button type="submit">Cadastrar Tecnologia</button>
            </form>
          </dialog>
        </S.SectionTech>
      </main>
    </body>
  );
}
