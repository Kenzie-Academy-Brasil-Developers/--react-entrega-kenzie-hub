import * as S from "./style.js";
import imgLogo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api.js";
import { Input } from "../../components/Input/style.js";
import { HeaderRegister } from "../../components/Header/style.js";

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

  async function onSubmit(data) {
    try {
      const response = await api.post("/users", data);
      toast.success("Usuario cadastrado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(`${error}`);
    }
  }

  return (
    <>
      <HeaderRegister>
        <img src={imgLogo} alt="Logo" />
        <Link to="/">Voltar</Link>
      </HeaderRegister>
      <main>
        <S.Section>
          <div>
            <h2>Crie sua conta</h2>
            <span>Rapido e grátis, vamos nessa</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nameUser">Nome</label>
            <Input
              type="text"
              id="nameUser"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {errors.name?.message}

            <label htmlFor="emailUser">Email</label>
            <Input
              type="email"
              id="emailUser"
              placeholder="Digite seu email"
              {...register("email")}
            />
            {errors.email?.message}

            <label htmlFor="passwordUser">Senha</label>
            <Input
              type="password"
              id="passwordUser"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password?.message}

            <label htmlFor="passwordConfirm">Confirmar senha</label>
            <Input
              type="password"
              id="passwordConfirm"
              placeholder="Confirme sua senha"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm?.message}

            <label htmlFor="bioUser">Bio</label>
            <Input
              type="text"
              id="bioUser"
              placeholder="Digite sua biografia"
              {...register("bio")}
            />
            {errors.bio?.message}

            <label htmlFor="contactUser">Contato</label>
            <Input
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
    </>
  );
}
