import React from 'react';
import styled from 'styled-components';

const CardImg = styled.img`
  width: 220px; height: 310px;
  background-size: cover;
`;

type CardProps = {
  src: string;
};

export default function Card(props: CardProps) {
  const { src } = props;

  return (
    <CardImg
      className="card"
      src={src}
      alt=""
    />
  )
}
