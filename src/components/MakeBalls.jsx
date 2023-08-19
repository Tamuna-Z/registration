import React from 'react';
import { useState } from 'react';

function MakeBalls() {
    const [actions, setActions] = useState([]);
    const [currentActionIndex, setCurrentActionIndex] = useState(-1);
  
    const addAction = () => {
      const newAction = [...actions, {}];
      setActions(newAction);
      setCurrentActionIndex(newAction.length - 1);
    };
  
    const backAction = () => {
        if (currentActionIndex > 0) {
          setCurrentActionIndex(currentActionIndex - 1);
        }
      };
    
      const forwardAction = () => {
        if (currentActionIndex < actions.length - 1) {
          setCurrentActionIndex(currentActionIndex + 1);
        }
      };
  
    const randomPosition = () => ({
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 80}%`,
    });
  
  return (
    <div>
   
   <button onClick={backAction}>Back</button>
      <button onClick={forwardAction}>Forward</button>
      <div className="ball-container" onClick={addAction}>
        {actions.map((action, index) => (
          <div
            key={index}
            className={`ball ${index === currentActionIndex ? 'selected' : ''}`}
            style={randomPosition()} // Set random position for every ball
          />
        ))}
      </div>
    </div>
  )
}

export default MakeBalls