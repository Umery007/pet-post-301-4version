import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Left,
  Right,
  Header,
  Stats,
  Actions,
  CommentBox
} from "./styles";

import Perfil from "../../assets/post-img/strong.png";
import Gato from "../../assets/post-img/gato.png";
import { FaHeart, FaComment, FaBookmark, FaRetweet } from "react-icons/fa";

export const Post = () => {
  const { id } = useParams();

  return (
    <Container>
      <Left>
        <img src={Gato} alt="post-gato" />
      </Left>

      <Right>
        <Header>
          <div className="profile">
            <img src={Perfil} alt="perfil" />
            <div>
              <strong>Choco</strong>
              <span>São Paulo / Brazil</span>
            </div>
          </div>

          <button>Follow</button>
        </Header>

        <p className="text">
          Post #{id} <br />
          Going to the vet rn with mum for bath!!
        </p>

        <Stats>
          <span>400 Reposts</span>
          <span>50 Comments</span>
          <span>1.452 Likes</span>
          <span>571 Saved</span>
        </Stats>

        <Actions>
          <FaHeart />
          <FaComment />
          <FaBookmark />
          <FaRetweet />
        </Actions>

        <CommentBox>
          <input placeholder="Write a comment..." />
          <button>Send</button>
        </CommentBox>
      </Right>
    </Container>
  );
};