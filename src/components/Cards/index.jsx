import React from "react";
import { Link } from "react-router-dom";
import { Cardsdiv, CardsImage } from "./styles";
import c2 from "../../assets/img-cards/c2.png";
import c3 from "../../assets/img-cards/c3.png";
import card1 from "../../assets/img-cards/card1.png";
import card4 from "../../assets/img-cards/card4.png";
import card5 from "../../assets/img-cards/card5.png";
import card6 from "../../assets/img-cards/card6.png";
import card7 from "../../assets/img-cards/card7.png";
import card8 from "../../assets/img-cards/card8.png";
import card9 from "../../assets/img-cards/card9.png";

const Cards = () => {
  const posts = [
    { id: 1, img: c2 },
    { id: 2, img: c3 },
    { id: 3, img: card1 },
    { id: 4, img: card4 },
    { id: 5, img: card5 },
    { id: 6, img: card6 },
    { id: 7, img: card7 },
    { id: 8, img: card8 },
    { id: 9, img: card9 },
    { id: 10, img: "https://picsum.photos/300?10" },
  ];

  return (
    <Cardsdiv>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/post/${post.id}`}
          style={{ textDecoration: "none" }}
        >
          <CardsImage src={post.img} alt={`post-${post.id}`} />
        </Link>
      ))}
    </Cardsdiv>
  );
};

export default Cards;