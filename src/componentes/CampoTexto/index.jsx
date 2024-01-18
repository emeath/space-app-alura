import { styled } from "styled-components";

const CampoTextoEstilizado = styled.div`
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    /* layout */
    display: inline-flex; /*o que isso faz?*/
    padding: 12px 16px;
    align-items: center;
    gap: 10px; /* espaço entre os elementos */

    input {
        width: 600px;
        color: #D9D9D9;
        font-family: "Gandhi Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 100% */
        background: none;
        border: none;

        &:focus {
      background: none;
      outline: none;
    }
    &::placeholder {
      color: #d9d9d9;
    }
    }
`

const CampoTexto = () => {
    return (
        <CampoTextoEstilizado>
            <input type="text" placeholder="O que você procura?" />
            <img src="/imagens/search.png" alt="" />
        </CampoTextoEstilizado>
    )
}

export default CampoTexto