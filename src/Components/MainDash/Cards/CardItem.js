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
  const [isVisible, setIsVisible] = useState(true);
  const HandleCard = () => {
    if (isVisible) {
      setIsVisible(false)
    }
    else { setIsVisible(true) }
  }

  return (
    <LayoutGroup>
      {isVisible ? <Compact param={props} setIsVisible={HandleCard} /> : <Expanded param={props} setIsVisible={HandleCard} />}

    </LayoutGroup>
  )

}


function Submenu({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.ul
      layout
      style={{ height: isOpen ? "auto" : 40 }}
    >
      Hello
    </motion.ul>
  )
}

const Compact = ({ param, setIsVisible }) => {
  return (
    <div >
      <div className="Compact" style={{

        background: param.color.backGround,
        boxShadow: param.color.boxShadow
      }} onClick={setIsVisible}>
        <div className="RadialBar">
          <CircularProgressbar value={param.barValue}
            text={`${param.barValue}%`} />
          <span className='Title'>{param.title}</span>
        </div>
        <div className="Details">
          <param.png />
          <span>{param.value}</span>
          <span>Updated 24hrs</span>
        </div>

      </div>
    </div>
  )

}

const Expanded = ({ param, setIsVisible }) => {
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
        <div><UilTimes onClick={setIsVisible}/></div>
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
