import React, { Fragment } from 'react'
import { Card, Image } from 'semantic-ui-react'

import './CardRocket.css'

const CardRocket = ({ rocketName, rocketImg, rocketDes }) => {
    return ( 
        <Fragment>
            <Card className='card-container'>
                <Image className='rocket-img' src={rocketImg[1]} wrapped ui={false} alt={ rocketName }/>
                <h1 className='title'>{ rocketName.toUpperCase() }</h1>
                <p className='description'>{ rocketDes.toUpperCase() }</p>
            </Card>
        </Fragment>
    )   
}

export default CardRocket