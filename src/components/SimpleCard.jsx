import React, { Component } from 'react'
import Image from './Image'
import Title from './Title'
import Description from './Description'
import './SimpleCard.css'

export default class SimpleCard extends Component {
    img = 'https://www.outfit4events.com/underwood/download/images/samurajske-mece-09.jpg';
    title = 'Dark Knight(Murasaki) Katana';
    descript = 'From $230.00 USD'
   
  render() {
    return (
        <div>
            <div className='card_container'>
                <div className="img_container">
                    <Image pic={this.img}/>
                </div>
                <div className='titleDesc_container'>
                    <Title heading={this.title} className='Title'/>
                    <Description content={this.descript} Des='The most important component of steel is iron, which is extracted from iron ore in a smelter. Iron was initially imported to Japan, as the first smelting furnaces were not built there until the 7th century AD. 
                    The metal obtained from a smelter is called tamahagane in Japanese. It contains several other elements and impurities and requires further processing. The blacksmith needs to choose lumps with similar composition and process them further...the ability to choose the similar chunks of steel is indicative of the blacksmith'/>
                </div>
           j </div>
        </div>
      
    )
  }
}
