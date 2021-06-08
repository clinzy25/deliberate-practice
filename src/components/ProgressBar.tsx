import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const progressStyle = {
    width: `${progress}%`,
  } as React.CSSProperties;
  
  return (
    <div className='progress-bar text-center bg-white h-5/6 w-96 rounded-full overflow-hidden'>
      <span className='progress-num absolute z-10'>{`${progress}%`}</span>
      <div
        className='progress bg-red-400 h-full w-full -z-10'
        style={progressStyle}
      ></div>
    </div>
  );
};
