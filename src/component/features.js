import React from 'react'
import "./../App.css"
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import logo1 from "./../images/mobilelogo.png"
import logo2 from "./../images/targetlogo.png"
import logo3 from "./../images/box.png"
import logo4 from "./../images/Dashboard.png"
import useWebAnimations from "@wellyshen/use-web-animations";
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    },
  }));

export default function Feature() {
    const classes = useStyles(); 
    const { ref} = useWebAnimations({
        keyframes:[
            {transform: "translate(0,10px)"},
            {transform: "translate(0,-10px)"},
            {transform: "translate(0,10px)"},
        ],
        timing: { 
          duration: 5000, 
          iterations: Infinity, 
          direction: "alternate", 
          easing: "ease-in-out", 
        }
      });
    
    return (
        <div>
            <Container fixed>
            <Grid container>
                <Grid item xs={12} sm={6} data-aos="fade-right">
                    <img ref={ref} src="http://azim.commonsupport.com/Appway/images/resource/phone-3.png" alt="MobileImage" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="features">
                        <h1>Amazing Features</h1>
                        <br/>
                        <p>Cumque adipisci anim quisque provident posuere blandit accumsan delectus quam quos interdum sociosqu.</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                   
                    

                    <div className={classes.root}>
                        <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>
                                        <div className="paper-div" data-aos="fade-up">
                                            <img src={logo1} alt="logo" width={30}/>
                                            <h3>Unique Design</h3>
                                            <p>Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</p>
                                        </div>
                                    </Paper>
                                 </Grid>
                                 <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>
                                    <div className="paper-div" data-aos="fade-up">
                                        <img src={logo2} alt="logo" width={29}/>
                                        <h3>Easy and New Project</h3>
                                        <p>Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</p>
                                    </div>
                                    </Paper>
                                 </Grid>
                                 <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>
                                    <div className="paper-div" data-aos="fade-up">
                                        <img src={logo3} alt="logo" width={29}/>
                                        <h3>Track Anything</h3>
                                        <p>Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</p>
                                    </div>
                                    </Paper>
                                 </Grid>
                                 <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>
                                    <div className="paper-div" data-aos="fade-up">
                                        <img src={logo4} alt="logo" width={29}/>
                                        <h3>Unlimited Dashboard</h3>
                                        <p>Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</p>
                                    </div>
                                    </Paper>
                                 </Grid>
                            </Grid>
                     </div>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}
