import styled from "styled-components";

export const Perfildiv = styled.div`
  background: #ffffff;
  max-width: 935px;
  margin: 0 auto;
  margin-bottom: 20px; /* 👈 espaço controlado entre perfil e cards */

  .capa {
    height: 80px; /* 👈 diminui o espaço vazio */
    background: #ffffff;
  }

  .container {
    width: 100%;
  }

  .secao-perfil {
    display: flex;
    align-items: center;
    gap: 60px; /* 👈 levemente menor (mais parecido com Instagram) */
    margin-top: -60px; /* 👈 ajustado pra não subir demais */
    padding: 10px 20px 0 20px;
  }

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(45deg, #f59e0b, #ef4444);
    object-fit: cover;
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .linha-topo {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nome-usuario {
    font-weight: 500;
    font-size: 20px;
    color: #970b0b;
  }

  .botao-seguir {
    background: #970b0b;
    color: #fff;
    border: none;
    padding: 6px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
  }

  .botao-seguir:hover {
    background-color: #b53c3c;
  }

  .estatisticas {
    display: flex;
    gap: 30px;
    font-size: 14px;
    margin: 10px 0;
    color: #970b0b;
  }

  .bio {
    font-size: 14px;
    color: #333;
    line-height: 1.4;
  }

  .stories {
    display: flex;
    gap: 15px;
    margin-top: 10px;
  }

  .story {
    text-align: center;
    font-size: 12px;
  }

  .story-border {
    width: 75px;
    height: 75px;
    padding: 3px;
    border-radius: 50%;
    background: linear-gradient(45deg, orange, red);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-border img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .story p {
    margin-top: 6px;
  }
`;