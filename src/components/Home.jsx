import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <>
      <div className="banner">
        {/* <h1 className='bannerHead'>NESW APP</h1> */}
      </div>
      <div className="header">
        <ul className="headerNav">
          <a href="/">
            <li>News</li>
          </a>

          <a href="About.jsx">
            <li>About-us</li>
          </a>

          

      

          <a href="/">
            <li>BreakingNews</li>
          </a>

          <a href="/">
            <li>Contact-us</li>
          </a>
        </ul>
        <div className="searchInput">
          <input type="text" class="css-input" placeholder="enter news here" onChange={(e) => {
              props.getfun(e.target.value);
            }} />
          <button className="inputSubmit">Submit</button>
        </div>
      

        <div className="heading">
        <h1 className="heading1">Great a wonderfull today!</h1>
        <h3 className="heading3">© Copyright. singhanish124.com. All Rights Reservered. Terms | Site Map</h3>
        </div>
        


      </div>
    </>
  );
}

export default Home;
