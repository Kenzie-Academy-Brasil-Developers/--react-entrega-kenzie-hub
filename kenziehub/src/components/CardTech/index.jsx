import imgRemove from "../../assets/Vector.svg";
import * as S from "./style";

export function CardTech({ title, status, setModalEditTech, setStateId, id }) {
  return (
    <S.Li
      id={id}
      onClick={(event) => {
        setStateId(event.target.id);
        setModalEditTech(true);
      }}
    >
      <h4>{title}</h4>
      <div>
        <span>{status}</span>
        <button
          id={id}
          onClick={(event) => {
            setStateId(event.target.id);
            setModalEditTech(true);
          }}
        >
          <img src={imgRemove} alt="remover" />
        </button>
      </div>
    </S.Li>
  );
}
