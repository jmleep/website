/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const canvasRef = React.createRef();

const drawLine = (x1, y1, x2, y2, canvas) => {
  canvas.beginPath();
  canvas.moveTo(x1, y1);
  canvas.lineTo(x2, y2);
  canvas.lineWidth = 10;
  canvas.strokeStyle = '#14398f';
  canvas.stroke();
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
      for (let i = 0; i <= 10000; i += 1) {
        x1[i] = Math.floor(Math.random() * width);
        y1[i] = Math.floor(Math.random() * (height + 1));
        x2[i] = Math.floor(Math.random() * (width + 1));
        y2[i] = Math.floor(Math.random() * (height + 1));
      }

      for (let i = 0; i <= 10000; i += 1) {
        setTimeout(() => {
          drawLine(x1[i], y1[i], x2[i], y2[i], gc);
        }, 10 * i);
      }
    }
  }, [height, width]);

  return (
    <div>
      <canvas
        height={height}
        width={width}
        ref={canvasRef}
        style={{ position: 'absolute', zIndex: 0 }}
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
