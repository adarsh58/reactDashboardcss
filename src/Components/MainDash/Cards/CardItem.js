import React, { useState } from 'react'
import './CardItem.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LayoutGroup, motion } from "framer-motion"
import {
  UilTimes
} from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
const CardItem = (props) => {
  const [isCompact,setIscompact]=useState(true);
    const handleSize =()=>{
      if(isCompact && !props.disableCompact)
        {
            props.handleDisableCompact(true);
            setIscompact(false);
        }
        else if(!isCompact && props.disableCompact){
            props.handleDisableCompact(false);
            setIscompact(true);
        }
    }

  return (
    <LayoutGroup>
      {isCompact ? <Compact param={props} handleSize={(e)=>handleSize(e)} /> : <Expanded param={props} handleSize={(e)=>handleSize(e)} />}
    </LayoutGroup>
  )

}
const Compact = ({ param, handleSize }) => {
  return (
    <div >
      <div className="Compact" style={{

        background: param.color.backGround,
        boxShadow: param.color.boxShadow
      }} onClick={handleSize}>
        <div className="RadialBar">
          <CircularProgressbar value={param.barValue}
            text={`${param.barValue}%`} />
          <span className='Title'>{param.title}</span>
        </div>
        <div className="CardDetails">
          <param.png style= {{alignSelf:'flex-end', cursor:'Pointer',color:'white'}} />
          <span>{param.value}</span>
          <span>Updated 24hrs</span>
        </div>

      </div>
    </div>
  )

}

const Expanded = ({ param, handleSize }) => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <div >
      <div className="Expanded" style={{

        background: param.color.backGround,
        boxShadow: param.color.boxShadow
      }} >
        <div style={{alignSelf:'flex-end', cursor:'Pointer',color:'white'}}><UilTimes onClick={handleSize}/></div>
        <span className='Title'>{param.title}</span>
        <div className="ChartContainer">
          <Chart series={param.series} type='area' options={data.options}></Chart>
        </div>
        <span>Updated 24hrs</span>

      </div>
    </div>
  )

}

export default CardItem
