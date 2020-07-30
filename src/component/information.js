import React from 'react'
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import "./../App.css"
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

export default function Information() {
    return (
        <div className="info-main">
            <Container fixed>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <div className="information-bg">
                                <Grid container>
                                    <Grid item xs={12} sm={4} data-aos="fade-right">
                                        <img src="http://azim.commonsupport.com/Appway/images/resource/dashbord-4.jpg" alt="dashboard-4"/>
                                    </Grid>
                                    <Grid item xs={12} sm={4} data-aos="fade-right">
                                        <img src="http://azim.commonsupport.com/Appway/images/resource/dashbord-3.jpg" alt="dashboard-3"/>
                                    </Grid>
                                </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="easy-access" data-aos="fade-left">
                            <h1>Easy access to business<br/> information </h1>
                            <br/>
                            <br/>
                            <p>On the other hand we denounce with righteous indignation and <br/> dislike men who are so beguiled and demoralized.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor.</p>    
                            <br/>
                            <br/>
                            <button data-aos="zoom-in-up">Learn more</button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
