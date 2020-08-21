import React from 'react';
import Particles from 'react-particles-js'
import ReactLogo from '../logos/R-logo.png';
import NodeLogo from '../logos/Node.js_logo.png';
import MongodbLogo from '../logos/Mongodb_logo.png';
import JSLogo from '../logos/JavaScript_logo.png';
import MUILogo from '../logos/MaterialUI_logo.png';
import NPMLogo from '../logos/Npm_logo.png';

const ParticleBar = () => {
  return (
    <Particles
        params={{
          particles: {
              number: {
                  value: 6,
                  density: {
                      enable: true,
                      value_area: 800
                  }
              },
              line_linked: {
                  enable: false
              },
              move: {
                  speed: 4,
                  out_mode: "out"
              },
              shape: {
                  type: [
                      "image",
                      "circle"
                  ],
                  image: [
                      {
                          src: ReactLogo,
                          height: 20,
                          width: 23
                      },
                      {
                          src: NodeLogo,
                          height: 20,
                          width: 30
                      },
                      {
                          src: JSLogo,
                          height: 20,
                          width: 20
                      },
                      {
                          src: MongodbLogo,
                          height: 20,
                          width: 20
                      },
                      {
                          src: MUILogo,
                          height: 20,
                          width: 20
                      },
                      {
                          src: NPMLogo,
                          height: 10,
                          width: 30
                      }
                  ]
              },
              color: {
                  value: "#6B85D4"
              },
              size: {
                  value: 30,
                  random: false,
                  anim: {
                      enable: true,
                      speed: 6,
                      size_min: 10,
                      sync: false
                  }
              },
              opacity: {
                value: 0.8
              }
          },
          retina_detect: false
        }} 
      />
  )
}

export default ParticleBar;
