import React, { useState } from 'react'
import { CardsData } from '../../Data/Data';
import CardItem from './CardItem';
import './Cards.css'
const Cards = () => {


    const [disableCompact,setdisableCompact]=useState(false);
    const handleDisableCompact=(status)=>
    {
      setdisableCompact(status);
  
    }
    return (
        <div>
            <div className="Cards">
                {CardsData.map((e, i) => {

                    return (
                        <div className="CardsParentContainer">
                            <CardItem
                                title={e.title}
                                color={e.color}
                                barValue={e.barValue}
                                value={e.value}
                                png={e.png}
                                series={e.series}
                                handleDisableCompact={(s)=>handleDisableCompact(s)}
                                disableCompact={disableCompact}
                            />
                        </div>

                    )


                })}
            </div>
        </div>
    )
}

export default Cards
