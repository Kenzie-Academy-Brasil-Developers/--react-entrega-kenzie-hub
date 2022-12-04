import axios from "axios";
import * as S from "./style.js";
import imgLogo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export function LoginPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function handleUser(user) {
    console.log({ ...user });
    axios
      .post("https://kenziehub.herokuapp.com/sessions", { ...user })
      .then((response) => {
        console.log(response);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        toast.success("Login realizado com sucesso");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  }

  return (
    <main>
      <S.DivLogo>
        <img src={imgLogo} alt="Logo" />
      </S.DivLogo>
      <S.Section>
        <div>
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit(handleUser)}>
          <label htmlFor="loginEmail">Email</label>
          <input
            type="email"
            id="loginEmail"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <label htmlFor="passwordEmail">Senha</label>
          <input
            type="password"
            id="passwordEmail"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <button type="submit">Entrar</button>
        </form>
        <div>
          <p>Ainda não possui uma conta?</p>
        </div>
        <button onClick={() => navigate("/register")}>Cadastre-se</button>
      </S.Section>
      <ToastContainer />
    </main>
  );
}
