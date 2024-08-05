import React from 'react'
import { CardsData } from '../../Data/Data';
import CardItem from './CardItem';
import './Cards.css'
const Cards = () => {
    return (
        <div>
            <div className="Cards">
                {CardsData.map((e, index) => {

                    return (
                        <div className="CardsParentContainer">
                            <CardItem
                                title={e.title }
                                color={e.color}
                                barValue={e.barValue}
                                value={e.value}
                                png={e.png}
                                series={e.series}
                            />
                        </div>

                    )


                })}
            </div>
        </div>
    )
}

export default Cards
