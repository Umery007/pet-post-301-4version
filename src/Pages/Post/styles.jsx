import styled from "styled-components";

const fadeInSlide = `
  @keyframes fadeInSlide {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Container = styled.div`
  ${fadeInSlide}
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #eaeaea;
  animation: fadeInSlide 0.5s ease-out;
`;

export const Left = styled.div`
  flex: 1;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 🔥 evita sobras */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 🔥 PREENCHE IGUAL INSTAGRAM */
  }
`;

export const Right = styled.div`
  width: 420px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;

  .text {
    margin: 20px 0;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .profile {
    display: flex;
    gap: 10px;
    align-items: center;

    img {
      width: 40px;
      height: 40px; /* 🔥 mantém redondo perfeito */
      border-radius: 50%;
      object-fit: cover;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }

  button {
    background: #ff2e63;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  margin-top: 10px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  margin: 15px 0;

  svg {
    cursor: pointer;
    transition: 0.2s;
  }

  svg:hover {
    transform: scale(1.2);
  }
`;

export const CommentBox = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;
  border-top: 1px solid #ddd;
  padding-top: 15px;

  input {
    flex: 1;
    padding: 8px;
  }

  button {
    padding: 8px 12px;
    cursor: pointer;
  }
`;