import React from 'react';

const skills = () => {
  return (
        <div className="skills">
          <div className="title">my skills</div>
          <div className="box-container">
            <div className="box">
              <div className="progress">
                <h3>html <span>95%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>css <span>95%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>javascript <span>85%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>photoshop <span>55%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
            <div className="box">
              <div className="progress">
                <h3>web design <span>55%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>graphic design <span>55%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>app design <span>95%</span></h3>
                <div className="bar"><span></span></div>
              </div>
              <div className="progress">
                <h3>digital marketing <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default skills;