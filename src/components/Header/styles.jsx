
import styled from "styled-components";

export const Headerdiv = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  .container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
  }

  .logo {
    font-size: 18px;
    font-weight: bold;
  }

  .search {
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: #222;
  padding: 6px 12px;
  border-radius: 20px;

  width: 350px;
  transition: all 0.3s ease;
}

.search img {
  width: 16px;
  opacity: 0.7;
  transition: 0.3s;
}

.search input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
}

/* 🔥 quando clicar dentro */
.search:focus-within {
  width: 420px;
  background-color: #333;
  box-shadow: 0 0 8px rgba(255, 59, 92, 0.5);
}

/* anima a lupa também */
.search:focus-within img {
  opacity: 1;
  transform: scale(1.1);
}
    
  .buttons-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .buttons-header button {
    padding: 6px 14px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 13px;
  }

  
  .buttons-header button:first-child {
    background-color: #ff3b5c;
    color: #fff;
  }

  /* Create Account (transparente) */
  .buttons-header button:last-child {
    background: transparent;
    color: #fff;
  }

  .buttons-header button:hover {
    opacity: 0.8;
  }
`;