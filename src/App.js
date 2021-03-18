import './App.css';
import react from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Particles from 'react-particles-js'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <>
    <Particles 
    className='particles-bg-header'
    /*
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 6,
            color: "#f9ab00"
          }
        }
        
      }}
      */
      
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
      
    />
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
      <Testimonials />
    </>
  );
}

export default App;
