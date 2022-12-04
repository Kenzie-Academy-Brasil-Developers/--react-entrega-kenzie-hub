import * as S from "./style.js";
import axios from "axios";
import imgLogo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "react-toastify/dist/ReactToastify.min.css";

export function RegisterPage() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    passwordConfirm: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "As senhas não correspondem"),
    bio: yup.string().required("Biografia obrigatória"),
    contact: yup.string().required(" Meio de contato necessário"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();

  function onSubmit(data) {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        toast.success("Usuario cadastrado com sucesso");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => toast.error(`${error}`));
  }
  const comeBack = () => navigate(-1);
  return (
    <body>
      <S.Header>
        <img src={imgLogo} alt="Logo" />
        <button onClick={comeBack}>Voltar</button>
      </S.Header>
      <main>
        <S.Section>
          <div>
            <h2>Crie sua conta</h2>
            <span>Rapido e grátis, vamos nessa</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nameUser">Nome</label>
            <input
              type="text"
              id="nameUser"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {errors.name?.message}

            <label htmlFor="emailUser">Email</label>
            <input
              type="email"
              id="emailUser"
              placeholder="Digite seu email"
              {...register("email")}
            />
            {errors.email?.message}

            <label htmlFor="passwordUser">Senha</label>
            <input
              type="password"
              id="passwordUser"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password?.message}

            <label htmlFor="passwordConfirm">Confirmar senha</label>
            <input
              type="password"
              id="passwordConfirm"
              placeholder="Confirme sua senha"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm?.message}

            <label htmlFor="bioUser">Bio</label>
            <input
              type="text"
              id="bioUser"
              placeholder="Digite sua biografia"
              {...register("bio")}
            />
            {errors.bio?.message}

            <label htmlFor="contactUser">Contato</label>
            <input
              type="text"
              id="contactUser"
              placeholder="Insira o meio de contato"
              {...register("contact")}
            />
            {errors.contact?.message}

            <label htmlFor="selectModule">Selecionar módulo</label>
            <select id="selectModule" {...register("course_module")}>
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo">Terceiro Módulo</option>
              <option value="Quarto Módulo">Quarto Módulo</option>
              <option value="Quinto Módulo">Quinto Módulo</option>
              <option value="Sexto Módulo">Sexto Módulo</option>
            </select>
            {errors.course_module?.message}

            <button>Cadastrar</button>
          </form>
        </S.Section>
        <ToastContainer />
      </main>
    </body>
  );
}
