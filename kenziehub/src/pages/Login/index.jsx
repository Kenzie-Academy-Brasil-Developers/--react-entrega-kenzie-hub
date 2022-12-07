import * as S from "./style.js";
import imgLogo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "react-toastify/dist/ReactToastify.min.css";
import { api } from "../../services/api.js";

export function LoginPage() {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function handleUser(user) {
    try {
      const response = await api.post("/sessions", user);
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
          {errors.email?.message}

          <label htmlFor="passwordEmail">Senha</label>
          <input
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
        <Link to="/register" className="Link">
          Cadastre-se
        </Link>
      </S.Section>
      <ToastContainer />
    </main>
  );
}
