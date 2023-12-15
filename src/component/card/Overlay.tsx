import React from 'react';
import styled from 'styled-components';

const OverlayDiv = styled.div`
  position: absolute;
  width: 220px;
  height: 310px;

  &.diagonal {
    background: linear-gradient(105deg,
      transparent 40%,
      rgba(255, 219, 112, 0.8) 45%,
      rgba(132, 50, 255 ,0.6) 50%,
      transparent 54%);
    filter: brightness(1.1) opacity(0.8);
    mix-blend-mode: color-dodge;
    background-size: 150% 150%;
    background-position: 100%;
    transition: all 0.1s;
  }

  &.hologram-1 {
    background: linear-gradient(45deg, rgba(52, 152, 219, 0.5), rgba(192, 57, 43, 0.5), rgba(243, 156, 18, 0.5), rgba(39, 174, 96, 0.5));
    filter: opacity(0.8);
    border-radius: 10px;
    transition: 0.3s;
  }

  &.hologram-2 {
    background: linear-gradient(45deg, rgba(52, 152, 219, 0.5), rgba(192, 57, 43, 0.5), rgba(243, 156, 18, 0.5), rgba(39, 174, 96, 0.5));
    filter: opacity(0.8);
    border-radius: 10px;
    mix-blend-mode: color-dodge;
    background-size: 150% 150%;
    background-position: 100%;
    transition: all 0.1s;
  }
`;

type OverlayProps = {
  type: string;
}

export default function Overlay(props: OverlayProps) {
  const { type } = props;

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const target = e.currentTarget as HTMLDivElement;

    if (type === 'diagonal') {
      target.style.backgroundPosition = `${x / 5 + y / 5}%`;
      target.style.filter = `opacity(${x / 200}) brightness(1.2)`;
    } else if (type.includes('hologram')) {
      const rgbaValues = [
        Math.floor(x * 255),
        Math.floor(y * 255),
        Math.floor((2 - x) * 255),
        0.8
      ];
      
      target.style.filter = `opacity(${0.5 * (1 - Math.sin((Math.PI * x) / 100))}) brightness(1.2)`;

      const newBackgroundColor = `linear-gradient(
        45deg,
        rgba(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]}, ${rgbaValues[3]}),
        rgba(${rgbaValues[1]}, ${rgbaValues[2]}, ${rgbaValues[0]}, ${rgbaValues[3]}),
        rgba(${rgbaValues[2]}, ${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[3]}),
        rgba(${rgbaValues[0]}, ${rgbaValues[2]}, ${rgbaValues[1]}, ${rgbaValues[3]}))`;
      target.style.background = newBackgroundColor;

      target.style.backgroundPosition = `${x / 5 + y / 5}%`;
    }
  }

  const handleMouseOut = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    target.style.filter = 'opacity(0.5)';
  }

  return (
    <OverlayDiv
      className={`overlay ${type}`}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    />
  )
}
