import { useState, useEffect } from 'react';
import {CanvasOverlay} from 'react-map-gl';

const defaultProps = {
  lngLatAccessor: location => [location.get(0), location.get(1)],
  renderWhileDragging: false,
  dotRadius: 4,
  dotFill: '#1FBAD6',
  globalOpacity: 1,
  compositeOperation: 'source-over'
}

export default function ScatterPlotOverlay() {
  const redraw = ({width, height, ctx, isDragging, project, unproject}) => {
    const {
      dotRadius,
      dotFill,
      compositeOperation,
      renderWhileDragging,
      locations,
      lngLatAccessor
    } = defaultProps;
  
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = compositeOperation;
  
    if((renderWhileDragging || !isDragging) && locations) {
      for (const location of locations) {
        const pixel = project(lngLatAccessor(location));
        const pixelRounded = [round(pixel[0], 1), round(pixel[1], 1)];
        if (
          pixelRounded[0] + dotRadius >= 0 &&
          pixelRounded[0] - dotRadius < width &&
          pixelRounded[1] + dotRadius >= 0 &&
          pixelRounded[1] - dotRadius < height
        ) {
          ctx.fillStyle = dotFill;
          ctx.beginPath();
          ctx.arc(pixelRounded[0], pixelRounded[1], dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }
  return (
    <CanvasOverlay redraw={redraw}/>
  )
}