//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";


function App() {
  const [homeCount, setHomeCount] = useState(0);
  const [awayCount, setAwayCount] = useState(0);
  const [currentDown, advanceDown] = useState(1);
  const [currentQuarter, advanceQuarter] = useState(1);
  const [yardsToGo, advanceYardsToGo] = useState(10);
  // console.log(homeCount);

  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">VOLS</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{ homeCount}</div>
          </div>
          <div className="timer">00:01</div>
          <div className="away">
            <h2 className="away__name">Gators</h2>
            <div className="away__score">{ awayCount }</div>
          </div>
        </div>

        
        {/* <BottomRow /> */}
        {/* insert bottom row here */}
        <div className="bottomRow">

          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">{currentDown}</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">{yardsToGo}</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">21</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{currentQuarter}</div>
          </div>
        </div>
      </section>
      



          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}


          <section className="buttons">
            <div className="homeButtons"> 
              <button className="homeButtons__touchdown" onClick={() => setHomeCount(homeCount + 7)}>VOLS Touchdown</button>
               <button className="homeButtons__fieldGoal" onClick = {() => setHomeCount(homeCount + 3)}>VOLS Field Goal</button>
            </div>
            <div className="awayButtons">
               <button className="awayButtons__touchdown" onClick={()=> setAwayCount(awayCount + 7)}>Gators Touchdown</button>
             <button className="awayButtons__fieldGoal" onClick={()=> setAwayCount(awayCount + 3)}>Gators Field Goal</button>
            </div>

                  {/* lower bottom row buttons */}

      <section>
        <div id="container">
          <button className="homeButtons__touchdown"onClick={()=> advanceDown(currentDown - currentDown+1)}>First Down</button>
          <button className="homeButtons__touchdown"onClick={()=> advanceDown(currentDown + 1)}>Advance Down</button>
          <button className="homeButtons__touchdown"onClick={()=> advanceQuarter(currentQuarter - currentQuarter+1)}>Reset Quarter</button>
          <button className="homeButtons__touchdown"onClick={()=> advanceQuarter(currentQuarter + 1)}>Next Quarter</button>
        </div>
      </section> 
       

        <div id="container1">
          <span>  
            <button onClick={()=> advanceYardsToGo(yardsToGo + 1)}>+</button>
            <p> 2 Go</p>
            <button onClick={()=> advanceYardsToGo(yardsToGo - 1)}>-</button>
          </span>
         </div> 
      </section>
    </div>
  );
}

export default App;