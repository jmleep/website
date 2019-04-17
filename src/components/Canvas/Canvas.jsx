/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const canvasRef = React.createRef();

const randomColor = () => {
  const chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
};

const drawLine = (x1, y1, x2, y2, canvas) => {
  canvas.beginPath();
  canvas.moveTo(x1, y1);
  canvas.lineTo(x2, y2);
  canvas.strokeStyle = randomColor();
  canvas.stroke();
};

const drawPoint = (x, y, canvas) => {
  canvas.fillStyle = randomColor();
  canvas.fillRect(x, y, 7, 7);
};

const Canvas = ({ height, width }) => {
  useEffect(() => {
    const { current } = canvasRef;
    const gc = current.getContext('2d');
    gc.clearRect(0, 0, width, height);
    if (width) {
      const x1 = [];
      const y1 = [];
      const x2 = [];
      const y2 = [];
      const colors1 = [];
      for (let i = 0; i <= 10000; i += 1) {
        x1[i] = Math.floor(Math.random() * (width + 1));
        y1[i] = Math.floor(Math.random() * (height + 1));
        x2[i] = Math.floor(Math.random() * (width + 1));
        y2[i] = Math.floor(Math.random() * (height + 1));
        colors1[i] = 0;
      }

      for (let i = 0; i <= 10000; i += 1) {
        if (i % 5 === 0) {
          setTimeout(() => {
            drawPoint(x2[i], y1[i], gc);
          }, 30 * i);
        }

        setTimeout(() => {
          drawLine(x1[i], y1[i], x2[i], y2[i], gc);
        }, 30 * i);
      }
    }
  }, [height, width]);

  return (
    <div>
      <canvas
        height={height}
        width={width}
        ref={canvasRef}
        style={{ position: 'absolute', zIndex: 1 }}
      />
    </div>
  );
};

Canvas.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number
};

Canvas.defaultProps = {
  width: null
};

export default Canvas;
