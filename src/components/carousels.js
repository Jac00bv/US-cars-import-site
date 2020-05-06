import React from 'react'
import {Carousel} from 'react-bootstrap'
import Image from "react-bootstrap"
import Car1 from "../images/carc.jpg"
import Car2 from "../images/cara.jpg"
import Car3 from "../images/carb.jpg"
import Image1 from "./gatimages/image1"
import Image2 from "./gatimages/image2"
import Image3 from "./gatimages/image3"
import "./css/carousels.scss"
import 'animate.css/animate.css'

export default function Carousels() {
    return (
      <section className="karuzela">
        <Carousel>
        <Carousel.Item>
       <img src={Car1} />  
          <Carousel.Caption>
            <h2 className="carou animated zoomIn slow">Us Cars Import</h2>
            <h3 className="carou animated zoomIn slow">Najlepsze samochody wprost z USA</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <img src={Car2} /> 
          <Carousel.Caption>
            <h2 className="carou animated zoomIn slow">Us Cars Import</h2>
            <h3 className="carou animated zoomIn slow">Najszybszy i najpewniejszy import</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <img src={Car3} /> 
          <Carousel.Caption>
            <h2 className="carou animated zoomIn slow">Us Cars Import</h2>
            <h3 className="carou animated zoomIn slow">Sprawdz nas juz teraz!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </section>
    )
}
