import { useContext } from "react";
import * as S from "./style.js";
import imgLogo from "../../assets/Logo.svg";
import imgAdd from "../../assets/+.svg";
import { useNavigate } from "react-router-dom";
import { HeaderDashboard } from "../../components/Header/style.js";
import { AuthContext } from "../../contexts/UserContext/AuthContext.jsx";
import { ModalCreate } from "../../components/Modal/ModalCreateTech/index.jsx";
import { CardTech } from "../../components/CardTech/index.jsx";
import { TechContext } from "../../contexts/TechContext/TechContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ModalEdit } from "../../components/Modal/ModalEditTech/index.jsx";

export function DashboardPage() {
  const navigate = useNavigate();

  const { userAuth } = useContext(AuthContext);
  const {
    PostTech,
    PutTech,
    tech,
    modalCreateTech,
    setModalCreateTech,
    modalEditTech,
    setModalEditTech,
    setStateId,
    DeleteTech,
  } = useContext(TechContext);

  function Logout() {
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <HeaderDashboard>
        <img src={imgLogo} alt="Logo" />
        <button onClick={Logout}>Sair</button>
      </HeaderDashboard>
      <main>
        <S.SectionUser>
          <h2>Olá, {userAuth.name}</h2>
          <span>{userAuth.course_module}</span>
        </S.SectionUser>
        <S.SectionTech>
          <div>
            <h2>Tecnologias</h2>
            <button onClick={() => setModalCreateTech(true)}>
              <img src={imgAdd} alt="" />
            </button>
          </div>
          <ul>
            {!tech ? (
              <li>
                <h1>Nehuma tecnologia cadastrada</h1>
              </li>
            ) : (
              tech.map((elem) => (
                <CardTech
                  key={elem.id}
                  title={elem.title}
                  status={elem.status}
                  setModalEditTech={setModalEditTech}
                  setStateId={setStateId}
                  id={elem.id}
                />
              ))
            )}
          </ul>
          {modalCreateTech ? (
            <ModalCreate
              PostTech={PostTech}
              setModalCreateTech={setModalCreateTech}
            />
          ) : null}
          {modalEditTech ? (
            <ModalEdit
              PutTech={PutTech}
              DeleteTech={DeleteTech}
              setModalEditTech={setModalEditTech}
            />
          ) : null}
        </S.SectionTech>
        <ToastContainer />
      </main>
    </>
  );
}
