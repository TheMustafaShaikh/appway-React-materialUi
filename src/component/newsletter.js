import React from 'react'
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import "./../App.css"
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



export default function Newsletter() {
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
        <div className="newsLetter">
            <Container fixed>
                <Grid container >
                    <Grid item xs={12} sm={6} data-aos="fade-right" >
                        <img ref={ref} src="http://azim.commonsupport.com/Appway/images/resource/subscribe-1.png" alt="subcribe"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="subscribe-details" data-aos="fade-left">
                            <h1>Subscribe our Newsletter</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus<br/> pellentesque dui vel tristique purus justo</p>
                            <input type="text" placeholder="Enter Your Email"/>
                            <br/>
                            <br/>
                            <button>Subscribe Now</button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
