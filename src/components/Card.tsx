import React from "react";

interface CardProps {
  id: number;
  name: string;
  color: string;
  head: string;
  background: string;
}


const Card: React.FC<CardProps> = ({ id, name, head, background }) => {
  return (
    <div className='container' key={id} title={head} style={{ backgroundImage: `url(${background})` }}>
      <h1>{name}</h1>
    </div>
  )
}

export default Card;