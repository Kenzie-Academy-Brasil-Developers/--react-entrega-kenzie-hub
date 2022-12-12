import * as S from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export function ModalCreate({ PostTech, setModalCreateTech }) {
  const formSchema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <S.DivModal>
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <button onClick={() => setModalCreateTech(false)}>X</button>
      </div>

      <form onSubmit={handleSubmit(PostTech)}>
        <label htmlFor="inputTech">Nome</label>
        <input
          id="inputTech"
          type="text"
          placeholder="Insira uma tecnologia"
          {...register("title")}
        />
        {errors.title?.message}

        <label htmlFor="status">Selecionar status</label>
        <select id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button
          type="submit"
          // onClick={() => setTimeout(setModalCreatetech(false), 5000)}
        >
          Cadastrar Tecnologia
        </button>
      </form>
    </S.DivModal>
  );
}
