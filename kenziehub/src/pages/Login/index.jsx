import * as S from "./style.js";
import imgLogo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "react-toastify/dist/ReactToastify.min.css";

import { Input } from "../../components/Input/style.js";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext/AuthContext";

export function LoginPage() {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const { handleUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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
          <Input
            type="email"
            id="loginEmail"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email?.message}

          <label htmlFor="passwordEmail">Senha</label>
          <Input
            type="password"
            id="passwordEmail"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password?.message}

          <button type="submit">Entrar</button>
        </form>
        <div>
          <p>Ainda não possui uma conta?</p>
        </div>
        <Link to="/register">Cadastre-se</Link>
      </S.Section>
      <ToastContainer />
    </main>
  );
}
