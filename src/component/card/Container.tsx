import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import Overlay from './Overlay';

const ContainerDiv = styled.div`
  position: relative;
  width: 220px; 
  height: 310px;
  transition : all 0.1s;
  margin: 8px;
`;

type ContainerProps = {
  img: string;
  type: "diagonal" | "hologram-1" | "hologram-2";
}

function Container(props: ContainerProps) {
  const { img, type } = props;

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const rotateY = -1 / 5 * x + 20;
    const rotateX = 4 / 30 * y - 20;

    const target = e.currentTarget as HTMLDivElement;
    target.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  const handleMouseOut = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    target.style.transform = 'perspective(350px) rotateY(0deg) rotateX(0deg)';
  }

  return (
    <ContainerDiv
      className="container"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <Overlay type={type} />
      <Card src={img} />
    </ContainerDiv>
  );
}

export default Container;
