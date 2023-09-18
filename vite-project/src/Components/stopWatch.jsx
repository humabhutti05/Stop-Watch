// import React, { useState, useEffect } from "react";
// import './stop.css'

// function Stopwatch() {
//   const [isRunning, setIsRunning] = useState(false);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     let interval;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isRunning]);

//   const startStop = () => {
//     setIsRunning(!isRunning);
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setTime(0);
//   };

//   const formatTime = (timeInSeconds) => {
//     const hours = Math.floor(timeInSeconds / 3600);
//     const minutes = Math.floor((timeInSeconds % 3600) / 60);
//     const seconds = timeInSeconds % 60;

//     return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
//       2,
//       "0"
//     )}:${String(seconds).padStart(2, "0")}`;
//   };

//   return (
//     <div className="stopwatch">
//       <h1>Stopwatch</h1>
//       <div className="time">{formatTime(time)}</div>
//       <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Stopwatch;




// import React, { useState, useEffect } from 'react';

// function Stopwatch() {
//   const [isRunning, setIsRunning] = useState(false);
//   const [startTime, setStartTime] = useState(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [laps, setLaps] = useState([]);
//   const [intervalId, setIntervalId] = useState(null);

//   useEffect(() => {
//     if (isRunning) {
//       const interval = setInterval(() => {
//         setCurrentTime(currentTime + 1000); // Update time every second
//       }, 1000);

//       setIntervalId(interval);
//     } else {
//       clearInterval(intervalId);
//     }

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isRunning, currentTime, intervalId]);

//   const startStop = () => {
//     if (!isRunning) {
//       setStartTime(Date.now() - currentTime);
//     }
//     setIsRunning(!isRunning);
//   };

//   const pause = () => {
//     setIsRunning(false);
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setCurrentTime(0);
//     setLaps([]);
//   };

//   const lap = () => {
//     const lapTime = currentTime;
//     setLaps([...laps, lapTime]);
//   };

//   return (
//     <div>
//       <div className="stopwatch-circle">
//         <div className="stopwatch-time">
//           {new Date(currentTime).toISOString().substr(11, 8)}
//         </div>
//         <div className="stopwatch-controls">
//           <button onClick={startStop}>{isRunning ? 'Pause' : 'Start'}</button>
//           <button onClick={lap} disabled={!isRunning}>
//             Lap
//           </button>
//           <button onClick={reset}>Reset</button>
//         </div>
//       </div>
//       <div className="lap-times">
//         {laps.map((lapTime, index) => (
//           <div key={index}>Lap {index + 1}: {new Date(lapTime).toISOString().substr(11, 8)}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Stopwatch;


// import React, { Component } from 'react';
// import './stop.css'

// class Stopwatch extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isRunning: false,
//       startTime: 0,
//       currentTime: 0,
//       laps: [],
//     };
//     this.timer = null;
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   startTimer = () => {
//     if (!this.state.isRunning) {
//       const startTime = Date.now() - this.state.currentTime;
//       this.timer = setInterval(this.updateTimer, 1000);
//       this.setState({ isRunning: true, startTime });
//     }
//   };

//   updateTimer = () => {
//     const currentTime = Date.now() - this.state.startTime;
//     this.setState({ currentTime });
//   };

//   pauseTimer = () => {
//     clearInterval(this.timer);
//     this.setState({ isRunning: false });
//   };

//   resetTimer = () => {
//     clearInterval(this.timer);
//     this.setState({
//       isRunning: false,
//       startTime: 0,
//       currentTime: 0,
//       laps: [],
//     });
//   };

//   lapTimer = () => {
//     const { laps, currentTime } = this.state;
//     this.setState({ laps: [...laps, currentTime] });
//   };

//   resumeTimer = () => {
//     this.startTimer();
//   };

//   render() {
//     const { isRunning, currentTime, laps } = this.state;
//     const circleRotation = isRunning ? `rotate(${(currentTime / 1000) * 6}deg)` : 'rotate(0deg)';

//     return (
//       <div>
//         <div className="circle">
//           <div className="circle-timer" style={{ transform: circleRotation }}>
//             <span>
//               {Math.floor(currentTime / 3600000).toString().padStart(2, '0')}:
//             </span>
//             <span>
//               {Math.floor((currentTime % 3600000) / 60000).toString().padStart(2, '0')}:
//             </span>
//             <span>
//               {Math.floor((currentTime % 60000) / 1000).toString().padStart(2, '0')}
//             </span>
//           </div>
//         </div>
//         <div>
//           {!isRunning ? (
//             <button onClick={this.startTimer}>Start</button>
//           ) : (
//             <button onClick={this.pauseTimer}>Pause</button>
//           )}
//           {isRunning ? (
//             <button onClick={this.lapTimer}>Lap</button>
//           ) : (
//             <button onClick={this.resetTimer}>Reset</button>
//           )}
//           {laps.length > 0 && !isRunning ? (
//             <button onClick={this.resumeTimer}>Resume</button>
//           ) : null}
//         </div>
//         <div>
//           <ul>
//             {laps.map((lap, index) => (
//               <li key={index}>Lap {index + 1}: {lap / 1000} seconds</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Stopwatch;




// import React, { Component } from 'react';

// class Stopwatch extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isRunning: false,
//       startTime: 0,
//       currentTime: 0,
//       laps: [],
//     };
//     this.timer = null;
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   startTimer = () => {
//     if (!this.state.isRunning) {
//       const startTime = Date.now() - this.state.currentTime;
//       this.timer = setInterval(this.updateTimer, 1000);
//       this.setState({ isRunning: true, startTime });
//     }
//   };

//   updateTimer = () => {
//     const currentTime = Date.now() - this.state.startTime;
//     this.setState({ currentTime });
//   };

//   pauseTimer = () => {
//     clearInterval(this.timer);
//     this.setState({ isRunning: false });
//   };

//   resetTimer = () => {
//     clearInterval(this.timer);
//     this.setState({
//       isRunning: false,
//       startTime: 0,
//       currentTime: 0,
//       laps: [],
//     });
//   };

//   lapTimer = () => {
//     const { laps, currentTime } = this.state;
//     this.setState({ laps: [...laps, currentTime] });
//   };

//   resumeTimer = () => {
//     this.startTimer();
//   };

//   render() {
//     const { isRunning, currentTime, laps } = this.state;

//     return (
//       <div>
//         <div className="circle">
//           <span>
//             {Math.floor(currentTime / 3600000).toString().padStart(2, '0')}:
//           </span>
//           <span>
//             {Math.floor((currentTime % 3600000) / 60000).toString().padStart(2, '0')}:
//           </span>
//           <span>
//             {Math.floor((currentTime % 60000) / 1000).toString().padStart(2, '0')}
//           </span>
//         </div>
//         <div>
//           {!isRunning ? (
//             <button onClick={this.startTimer}>Start</button>
//           ) : (
//             <button onClick={this.pauseTimer}>Pause</button>
//           )}
//           {isRunning ? (
//             <button onClick={this.lapTimer}>Lap</button>
//           ) : (
//             <button onClick={this.resetTimer}>Reset</button>
//           )}
//           {laps.length > 0 && !isRunning ? (
//             <button onClick={this.resumeTimer}>Resume</button>
//           ) : null}
//         </div>
//         <div>
//           <ul>
//             {laps.map((lap, index) => (
//               <li key={index}>Lap {index + 1}: {lap} milliseconds</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Stopwatch;



// import React, { Component } from 'react';

// class Stopwatch extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isRunning: false,
//       startTime: 0,
//       currentTime: 0,
//       laps: [],
//     };
//     this.timer = null;
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   startTimer = () => {
//     if (!this.state.isRunning) {
//       const startTime = Date.now() - this.state.currentTime;
//       this.timer = setInterval(this.updateTimer, 1000);
//       this.setState({ isRunning: true, startTime });
//     }
//   };

//   updateTimer = () => {
//     const currentTime = Date.now() - this.state.startTime;
//     this.setState({ currentTime });
//   };

//   pauseTimer = () => {
//     clearInterval(this.timer);
//     this.setState({ isRunning: false });
//   };

//   resetTimer = () => {
//     clearInterval(this.timer);
//     this.setState({
//       isRunning: false,
//       startTime: 0,
//       currentTime: 0,
//       laps: [],
//     });
//   };

//   lapTimer = () => {
//     const { laps, currentTime } = this.state;
//     this.setState({ laps: [...laps, currentTime] });
//   };

//   resumeTimer = () => {
//     this.startTimer();
//   };

//   render() {
//     const { isRunning, currentTime, laps } = this.state;

//     return (
//       <div>
//         <div className="circle">
//           <span>
//             {Math.floor(currentTime / 3600000).toString().padStart(2, '0')}:
//           </span>
//           <span>
//             {Math.floor((currentTime % 3600000) / 60000).toString().padStart(2, '0')}:
//           </span>
//           <span>
//             {Math.floor((currentTime % 60000) / 1000).toString().padStart(2, '0')}
//           </span>
//         </div>
//         <div>
//           {!isRunning ? (
//             <button onClick={this.startTimer}>Start</button>
//           ) : (
//             <>
//               <button onClick={this.lapTimer}>Lap</button>
//               <button onClick={this.pauseTimer}>Pause</button>
//             </>
//           )}
//           {isRunning && laps.length > 0 && (
//             <button onClick={this.resetTimer}>Reset</button>
//           )}
//           {!isRunning && laps.length > 0 && (
//             <button onClick={this.resumeTimer}>Resume</button>
//           )}
//         </div>
//         <div>
//           <ul>
//             {laps.map((lap, index) => (
//               <li key={index}>Lap {index + 1}: {lap} milliseconds</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Stopwatch;



import React, { Component } from 'react';
import './stop.css'

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      isRunning: false,
      startTime: 0,
      currentTime: 0,
      laps: [],
      showStartButton: true,
      showPauseButton: false,
      showLapButton: false,
      showResetButton: false,
      showResumeButton: false,
    };
    this.timer = null;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      const startTime = Date.now() - this.state.currentTime;
      this.timer = setInterval(this.updateTimer, 1000);
      this.setState({
        isRunning: true,
        startTime,
        showStartButton: false,
        showPauseButton: true,
        showLapButton: true,
      });
    }
  };

  updateTimer = () => {
    const currentTime = Date.now() - this.state.startTime;
    this.setState({ currentTime });
  };

  pauseTimer = () => {
    clearInterval(this.timer);
    this.setState({
      isRunning: false,
      showPauseButton: false,
      showLapButton: false,
      showResetButton: true,
      showResumeButton: true,
    });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      isRunning: false,
      startTime: 0,
      currentTime: 0,
      laps: [],
      showStartButton: true,
      showPauseButton: false,
      showLapButton: false,
      showResetButton: false,
      showResumeButton: false,
    });
  };

  lapTimer = () => {
    const { laps, currentTime } = this.state;
    this.setState({ laps: [...laps, currentTime] });
  };

  resumeTimer = () => {
    this.startTimer();
    this.setState({
      showPauseButton: true,
      showLapButton: true,
      showResetButton: false,
      showResumeButton: false,
    });
  };

  render() {
    const {
      isRunning,
      currentTime,
      laps,
      showStartButton,
      showPauseButton,
      showLapButton,
      showResetButton,
      showResumeButton,
    } = this.state;

    return (
      <div className='stopwatch-container'>
        <h1 style={{fontSize: "70px", }}>Stopwatch</h1>
        <div className="circle">
          <span>
            {Math.floor(currentTime / 3600000).toString().padStart(2, '0')}:
          </span>
          <span>
            {Math.floor((currentTime % 3600000) / 60000).toString().padStart(2, '0')}:
          </span>
          <span>
            {Math.floor((currentTime % 60000) / 1000).toString().padStart(2, '0')}
          </span>
        </div>
        <div>
          {showStartButton && (
            <button onClick={this.startTimer}>Start</button>
          )}
          {showPauseButton && (
            <button onClick={this.pauseTimer}>Pause</button>
          )}
          {showLapButton && (
            <button onClick={this.lapTimer}>Lap</button>
          )}
          {showResetButton && (
            <button onClick={this.resetTimer}>Reset</button>
          )}
          {showResumeButton && (
            <button onClick={this.resumeTimer}>Resume</button>
          )}
        </div>
        <div>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>Lap {index + 1}: {lap} milliseconds</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Stopwatch;




