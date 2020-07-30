import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Feature from "./component/features";
import useWebAnimations from "@wellyshen/use-web-animations"; 
import MobileApp from "./component/mobileApp"
import Information from "./component/information"
import Newsletter from "./component/newsletter"


// Link p5bootcamp.surge.sh

function App() {


    const { ref } = useWebAnimations({
      keyframes: [
        {transform: "translate(0,20px)"},
        {transform: "translate(0,-20px)"},
        {transform: "translate(0,20px)"}
      ],
      timing: {
        duration: 4000,
        iterations: Infinity, 
        direction: "alternate",
        easing: "ease-in-out", 
      },
      
    });
  



  return (
    <div className="App"> 
        <div className="main-header">
          <div className="nav"> 
            <img src="http://azim.commonsupport.com/Appway/images/logo.png" alt="Logo" />
          </div>

          <br/>
          <br/>
          <br/>
          <br/>

          <Container fixed>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className="header-title">
                <h1>Profect App For <br/> Boost Your Business</h1>
                <p>The collapse of the online-advertising market in 2001 made <br/> marketing on the Internet seem even less compelling.</p>
                <button>Get App Now</button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} id="mobile-images" ref={ref}>
              <img src="http://azim.commonsupport.com/Appway/images/resource/phone-1.png" alt="phone" />
              <img src="http://azim.commonsupport.com/Appway/images/resource/phone-2.png" alt="phone2"/>
            </Grid> 
          </Grid>
          </Container>
  
        </div>

        <br/>
        <br/>
        <br/>
        <br/>


        <Feature />

        <MobileApp />

        <Information />

        <Newsletter />

    </div>
  );
}

export default App;
