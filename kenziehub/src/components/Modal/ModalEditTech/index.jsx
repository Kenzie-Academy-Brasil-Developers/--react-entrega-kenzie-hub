import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext/TechContext";
import * as S from "./style";

export function ModalEdit({ PutTech, DeleteTech, setModalEditTech }) {
  const { stateId } = useContext(TechContext);
  const Select = document.querySelector("#status");

  return (
    <S.DivModal>
      <div>
        <h3>Tecnologia Detalhes</h3>
        <button onClick={() => setModalEditTech(false)}>X</button>
      </div>

      <form>
        <label htmlFor="status">Selecionar status</label>
        <select id="status">
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button onClick={() => PutTech(stateId, Select.value)}>
          Salvar alterações
        </button>
        <button type="click" onClick={() => DeleteTech(stateId)}>
          Excluir
        </button>
      </form>
    </S.DivModal>
  );
}
