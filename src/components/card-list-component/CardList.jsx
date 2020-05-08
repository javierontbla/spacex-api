import React from 'react'

import './CardList.css'
import CardRocket from '../card-component/CardRocket'

const CardList = ({ rockets }) => {
    return (
      <div className='card-list'>
        { rockets.map(rocket => (
          <CardRocket
            key={ rocket.id } 
            rocketName={ rocket.rocket_name }
            rocketImg={ rocket.flickr_images }
            rocketDes={ rocket.description }
          />
        )) }
      </div>
    )
}

export default CardList