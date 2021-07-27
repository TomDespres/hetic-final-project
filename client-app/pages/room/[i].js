import styles from '../../styles/pages/Room.module.scss';
import { useCallback, useEffect,useRef,useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useGesture } from 'react-use-gesture'
import axios from 'axios'

export default function Home(props) {
  const router = useRouter()
  const room = router.query.i

  const rooms = ['A620','A621','A622','A623','A624'];
  var currentRoomIndex = rooms.indexOf(room);

  //slider
  let [sliderCrop, setSliderCrop] = useState({ x: 0, y: 0, scale: 1 });
  let sliderRef = useRef();
  let paginationRef = useRef();
  let statsRef = useRef();
  let averageRef = useRef();

  let markerRef = useRef();
  let mapWrapperRef = useRef();

  useGesture(
    {
      onDrag: ({movement: [mx]}) => {
        if(mx < -50){
          statsRef.current.classList.add(styles.map__stats__centered);
          averageRef.current.classList.add(styles.map__average__hide);
          paginationRef.current.childNodes[0].classList.remove(styles.map__info__slider__pagination__round__selected)
          paginationRef.current.childNodes[1].classList.add(styles.map__info__slider__pagination__round__selected)
        }
        if(mx > 50){
          statsRef.current.classList.remove(styles.map__stats__centered);
          averageRef.current.classList.remove(styles.map__average__hide);
          paginationRef.current.childNodes[0].classList.add(styles.map__info__slider__pagination__round__selected)
          paginationRef.current.childNodes[1].classList.remove(styles.map__info__slider__pagination__round__selected)
        }
      },
    },
    {
      domTarget: sliderRef,
      eventOptions: { passive: false },
    }
  )

  
  //marker
  // const [nbTables, setNbTables] = useState("");

  const [currentTable__nbChairs, setCurrentTable__nbChairs] = useState("");
  const [currentTable, setCurrentTable] = useState("");
  const [currentTableDom, setCurrentTableDom] = useState("");

  const [coordTable, setCoordTable] = useState("");

  const changeMarker = (value,offset)=>{
    markerRef.current.style.display = "block";
    setCurrentTable(value);
    setCoordTable({
      x:offset.x,
      y:offset.y,
    })
    // switch (value) {
    //   case "0":
    //     setCurrentTable__nbChairs("7");
    //     break;
    //   case "1":
    //     setCurrentTable__nbChairs("1");
    //     break;
    //   case "2":
    //     setCurrentTable__nbChairs("2");
    //     break;
    //   case "3":
    //     setCurrentTable__nbChairs("4");
    //     break;
    //   case "4":
    //     setCurrentTable__nbChairs("6");
    //     break;
    //   default:
    //     break;
    // }

    // if (window.matchMedia("(max-width: 640px)").matches) {
    //   setStyleMarker({
    //     transform: 'translate3d(calc('+coordTable.x+'px + 0%), '+coordTable.y+'px,0)',
    //     touchAction: 'none'
    //   })
    // }else{
    //   setStyleMarker({
    //     transform: 'translate3d(calc('+coordTable.x+'px + 0%), '+coordTable.y+'px,0)',
    //     touchAction: 'none'
    //   })
    // }
  }

  const isoVector = {
    x:1,
    y:1
  }
  // const [crop, setCrop] = useState("");
  const onDragMarker = (offset)=>{
    // setCrop({
    //   x:value.x,
    //   y:value.y
    // });
    setCoordTable({
      x:offset.x,
      y:offset.y,
    })

    // if (window.matchMedia("(max-width: 640px)").matches) {
    //   setStyleMarker({
    //     transform: 'translate3d(calc('+coordTable.x+'px - 0%), '+coordTable.y+'px,0)',
    //     touchAction: 'none'
    //   })
    // }else{
    //   setStyleMarker({
    //     transform: 'translate3d(calc('+coordTable.x+'px + 0%), '+coordTable.y+'px,0)',
    //     touchAction: 'none'
    //   })
    // }
  }
  useEffect(()=>{
    setCoordTable({
      x:0,
      y:0,
    })
  },[])

  const [styleMarker, setStyleMarker] = useState(null);

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.pagination}>
          <ButtonBack currentRoomIndex={currentRoomIndex} rooms={rooms} variant="back"/>
          <p>Salle {room}</p>
          <ButtonBack currentRoomIndex={currentRoomIndex} rooms={rooms} variant="next"/>          
        </div>
        <div className={styles.map__wrapper} ref={mapWrapperRef}>  
          <RoomSvg room={room} onClickRoom={changeMarker} onDragRoom={onDragMarker} mapWrapperRef={mapWrapperRef} setNbAvailableChairs={setCurrentTable__nbChairs}/> 
          <div 
              className={styles.map__marker} 
              ref={markerRef} 
              style={{
                transform: 'translate3d('+coordTable.x+'px, '+coordTable.y+'px,0)',
                touchAction: 'none'
              }}>
            <ul className={styles.map__marker__contentList}>
              <li className={styles.map__marker__contentList__item}>
                <p className={styles.map__marker__contentList__item__label}>Salle : <span className={styles.map__marker__contentList__item__text}>{room}</span></p>
              </li>
              <li className={styles.map__marker__contentList__item}>
                <p className={styles.map__marker__contentList__item__label}>Table: <span className={styles.map__marker__contentList__item__text}>{currentTable}</span></p>
              </li>
              <li className={styles.map__marker__contentList__availability}>
              <svg className={styles.map__marker__contentList__availability__svg} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#93cc6f33"/>
                <circle cx="7" cy="7" r="4" fill="#93CC6F"/>
              </svg>
                {currentTable__nbChairs} place{currentTable__nbChairs > 1 ? "s" : ""} disponible{currentTable__nbChairs > 1 ? "s" : ""}
              </li>
            </ul>
            <button className={styles.map__marker__btn}>
              <svg className={styles.map__marker__btn__svg} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z" fill="white"/>
              </svg>
            </button>
            <svg className={styles.map__marker__arrowBottom} viewBox="0 0 36 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 17L1.48619e-06 6.67477e-07L36 3.8147e-06L18 17Z" fill="black"/>
            </svg>
          </div> 
          <div className={styles.map__info__slider} ref={sliderRef}>
            <div className={styles.map__info__slider__pagination} ref={paginationRef}>
              <div className={styles.map__info__slider__pagination__round+" "+styles.map__info__slider__pagination__round__selected}></div>
              <div className={styles.map__info__slider__pagination__round}></div>
            </div>
            <div className={styles.map__stats} ref={statsRef}>
              <h4 className={styles.map__stats__title}>
                Affluence par 
                <span className={styles.map__stats__title__hours}> Heure</span> / <span className={styles.map__stats__title__day}>Jour</span>
              </h4>
              <div className={styles.map__stats__stick__container}>
                <div className={styles.map__stats__stick} data-index="0" data-height="10"></div>
                <div className={styles.map__stats__stick} data-index="1" data-height="10"></div>
                <div className={styles.map__stats__stick} data-index="2" data-height="10"></div>
                <div className={styles.map__stats__stick} data-index="3" data-height="10"></div>
                <div className={styles.map__stats__stick} data-index="4" data-height="10"></div>
                <div className={styles.map__stats__stick} data-index="5" data-height="10"></div>
                <div className={styles.map__stats__stick} data-index="6" data-height="10"></div>
                <div className={styles.map__stats__stick} data-index="7" data-height="10"></div>
                <div className={styles.map__stats__stick} data-index="8" data-height="10"></div>
                <div className={styles.map__stats__stick} data-index="9" data-height="10"></div>
              </div>
              <div className={styles.map__stats__day__container}>
                <span className={styles.map__stats__day}>9</span>
                <span className={styles.map__stats__day}>10</span>
                <span className={styles.map__stats__day}>11</span>
                <span className={styles.map__stats__day}>12</span>
                <span className={styles.map__stats__day}>13</span>
                <span className={styles.map__stats__day}>14</span>
                <span className={styles.map__stats__day}>15</span>
                <span className={styles.map__stats__day}>16</span>
                <span className={styles.map__stats__day}>17</span>
                <span className={styles.map__stats__day}>18</span>
                <span className={styles.map__stats__day}>19</span>
              </div>
            </div>   
            <div className={styles.map__average} ref={averageRef}>
              <h4 className={styles.map__average__title}>{`Temps d'affluence moyen`}</h4>
              <p className={styles.map__average__content}>~ 30 min</p>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
}

// room svg
function RoomSvg({room, onClickRoom, onDragRoom, mapWrapperRef, setNbAvailableChairs}) {
  const [currentTable, setCurrentTable] = useState("");

  //Map
  let [crop, setCrop] = useState({ x: 0, y: 0, scale: 1 });
  const roomRef = useRef();
  useGesture(
    {
      onDrag: ({ offset: [dx, dy] }) => {
        setCrop((crop) => ({ ...crop, x: dx, y: dy }));
        if(currentTable)
          onDragRoom(
          // {
          //   x:dx,
          //   y:dy,
          // },
          {
            x:currentTable.getBoundingClientRect().left - mapWrapperRef.current.getBoundingClientRect().left,
            y:currentTable.getBoundingClientRect().top - mapWrapperRef.current.getBoundingClientRect().top,
          }
          );
      },
      onPinch: ({ offset: [d] }) => {
        setCrop((crop) => ({ ...crop, scale: 1 + d / 50 }));
      },
    },
    {
      domTarget: roomRef,
      eventOptions: { passive: false },
    }
  )
  
  const [chairsPosition, setChairsPosition] = useState(null)
  const [tablesPosition, setTablesPosition] = useState(null)
  // const [nbTables, setNbTables] = useState(null)
  const [arrayTablesDom, setArrayTablesDom] = useState(null)
  const [arrayChairsDom, setArrayChairsDom] = useState(null)

  
  const [elementsPosition, setElementsPosition] = useState(null)
  const [availableChairs, setAvailableChairs] = useState(null)
  const [isAvailableChairs, setIsAvailableChairs] = useState(null)
  const fetchElementsPosition = async () => {
    const options = {
      url: 'https://us-west-2-1.aws.cloud2.influxdata.com/api/v2/query?org=najib.tahar-berrabah@hetic.net',
      method: 'POST',
      headers: {
        'Authorization': 'Token cOg0bJOydZSfkVqtW71XbM6KAWe17iPiOFrepj8dEYLuR7WBZItrKHfHO2nGz0SIMBbCyx0UBBGiEGN2QLU3Og==',
        'Content-Type': "application/vnd.flux; charset=utf-8"
      },
      data: 'from(bucket: "mqtt")\
              |> range(start: -1h)\
              |> filter(fn: (r) => r["_measurement"] == "Position")\
              |> filter(fn: (r) => r["_field"] == "position_x" or r["_field"] == "position_y")\
              |> aggregateWindow(every: 1s, fn: last)\
              |> last()'
    }
    const {data} = await axios(options)
    
    const lines = data.split(/\r\n|\n/);
    const chairsAndTables = lines.map((line, index) => {
      if(index % 2 === 0) return
      const arrayLine = line.split(',');
      const nextArrayLine = lines[index+1].split(',');

      return {
        time: arrayLine[5],
        node_ID: arrayLine[7],
        position_x: arrayLine[6],
        position_y: nextArrayLine[6],
      }
    }).filter(line => line != undefined && line.node_ID != undefined)
    setElementsPosition(chairsAndTables)
    console.log(chairsAndTables)
  }

  const fetchAvailableChairs = async () => {
    const options = {
      url: 'https://us-west-2-1.aws.cloud2.influxdata.com/api/v2/query?org=najib.tahar-berrabah@hetic.net',
      method: 'POST',
      headers: {
        'Authorization': 'Token cOg0bJOydZSfkVqtW71XbM6KAWe17iPiOFrepj8dEYLuR7WBZItrKHfHO2nGz0SIMBbCyx0UBBGiEGN2QLU3Og==',
        'Content-Type': "application/vnd.flux; charset=utf-8"
      },
      data: 'from(bucket: "mqtt")\
              |> range(start: -1h)\
              |> filter(fn: (r) => r["_measurement"] == "Poids" and r["_field"] == "weight")\
              |> map(fn: (r) => ({\
                r with\
                available:\
                  if r._value >= 30 then false\
                  else true\
                }))\
              |> aggregateWindow(every: 1s, fn: last)\
              |> last()'
    }
    const {data} = await axios(options)
    const lines = data.split(/\r\n|\n/);
    const availableChairs = lines.map((line, index) => {
      if(index === 0) return
      const arrayLine = line.split(',');

      return {
        time: arrayLine[8],
        node_ID: arrayLine[3],
        available: arrayLine[10],
      }
    }).filter(line => line != undefined && line.node_ID != undefined)
    setAvailableChairs(availableChairs)
    console.log(availableChairs)
  }
  useEffect(()=> {
    fetchElementsPosition()
    fetchAvailableChairs()
  }, []);

  useEffect(()=>{
    if(availableChairs){
      let array = []
      let nbAvailable = 0;
      for (var i = 0; i < availableChairs.length; i++) {
        if(availableChairs[i].available){
          array.push("true");
          nbAvailable++;
        }else{
          array.push("false")
        }
      }
      setNbAvailableChairs(nbAvailable);
      setIsAvailableChairs(array)
    }
  },[availableChairs]);


  useEffect(()=>{
    if(elementsPosition){
      let arrayChairsPosition = []
      let arrayTablesPosition = []
      elementsPosition.forEach((element)=>{
        if(element.node_ID.indexOf('Chaise') !== -1){
          arrayChairsPosition.push(element)
        }
        if(element.node_ID.indexOf('Table') !== -1){
          arrayTablesPosition.push(element)
        }
      });
      setChairsPosition(arrayChairsPosition);
      setTablesPosition(arrayTablesPosition);
    }
  },[elementsPosition]);

  
  useEffect(()=>{
    if(chairsPosition){
      let arrayDom = []
      for (var i = 0; i < chairsPosition.length; i++) {
          let isoX = ( (chairsPosition[i].position_x/100)+(chairsPosition[i].position_y/100) )*1000 + 1000;
          let isoY = ( ( (chairsPosition[i].position_y/100)-(chairsPosition[i].position_x/100) ) / 2.0)*1200 + 1000;
          arrayDom.push(
            <path key={i} d="M83.7,48.3L0,35.4L61.2,0L83.7,48.3z" transform={`matrix(1 0 0 1 `+isoX+` `+isoY+`)`} fill={isAvailableChairs ? (isAvailableChairs[i] ? '#C4C4C4' : 'rgba(255,255,255,.3)') : 'rgba(255,255,255,.3)'}/>
          );
      }
      setArrayChairsDom(arrayDom)
    }

  },[chairsPosition,isAvailableChairs]);

  useEffect(()=>{
    if(tablesPosition){
      let arrayDom = []

      // const list = [
      //   {position_x: 0, position_y: 0},
      //   {position_x: 0, position_y: 100},
      //   {position_x: 100, position_y: 100},
      //   {position_x: 100, position_y: 0},
      //   {position_x: 50, position_y: 50},
      //   {position_x: 50, position_y: 50}
      // ]

      for (var i = 0; i < tablesPosition.length; i++) {
          let isoX = ( (tablesPosition[i].position_x/100)+(tablesPosition[i].position_y/100) )*1000 + 1000;
          let isoY = ( ( (tablesPosition[i].position_y/100)-(tablesPosition[i].position_x/100) ) / 2.0)*1200 + 1000;
          arrayDom.push(<rect key={i} data-table={i} className={"map__table "+styles.map__table} onClick={selectTable} y="0" width="322.592" height="159.296" transform={`matrix(0.866044 0.499967 -0.866044 0.499967 `+isoX+` `+isoY+`)`} fill="black" stroke="#F4C113" strokeWidth="4"/>);
      }

      setArrayTablesDom(arrayDom)
    }
  },[tablesPosition]);

  const selectTable = (e)=>{
    roomRef.current.querySelectorAll(".map__table").forEach((table)=>{
      table.classList.remove(styles.map__table__selected);
    });

    // setCurrentTable(e);
    setCurrentTable(e.target);
    let dataTable = e.target.getAttribute('data-table');

    onClickRoom(dataTable, 
      { 
        x:e.target.getBoundingClientRect().left - mapWrapperRef.current.getBoundingClientRect().left,
        y:e.target.getBoundingClientRect().top - mapWrapperRef.current.getBoundingClientRect().top
      }
    );
    // switch (dataTable) {
    //   case "0":
    //     break;
    //   case "1":
    //     break;
    //   case "2":
    //     break;
    //   case "3":
    //     break;
    //   case "4":
    //     onClickRoom("cc", 
    //       { 
    //         x:e.target.getBoundingClientRect().left - mapWrapperRef.current.getBoundingClientRect().left,
    //         y:e.target.getBoundingClientRect().top - mapWrapperRef.current.getBoundingClientRect().top
    //       }
    //     );
    //     break;
    
    //   default:
    //     break;
    // }

    // tables
    e.target.classList.add(styles.map__table__selected);
  }

  switch (room) {
    case 'A624':
      return  <svg  ref={roomRef} 
                    style={{
                      transform: 'translate3d(calc(-50% + '+crop.x+'px), calc(-50% + '+crop.y+'px),0) scale('+crop.scale+')',
                      touchAction: 'none'
                    }}
                    className={styles.map} viewBox="0 0 3536 2042" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="1.99987" width="2445.44" height="1628.96" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1415.95 1)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                {/* <rect data-table="0" className={"map__table "+styles.map__table} onClick={selectTable} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1975.27 1511.8)" fill="black" stroke="#F4C113" strokeWidth="4"/> */}
                {arrayTablesDom}
                {arrayChairsDom}
                {/* <path d="M2189.91 1616.11L2212.32 1567.82L2273.56 1603.17L2189.91 1616.11Z" fill="white" fillOpacity="0.3"/>
                <path d="M2207.59 1727.56L2291.24 1740.5L2230 1775.85L2207.59 1727.56Z" fill="white" fillOpacity="0.3"/>
                <path d="M2014.55 1717.35L1992.13 1765.64L1930.9 1730.29L2014.55 1717.35Z" fill="white" fillOpacity="0.3"/>
                <path d="M2062.63 1542.64L2085.04 1494.34L2146.28 1529.7L2062.63 1542.64Z" fill="#C4C4C4"/>
                <path d="M1880.9 1538.96L1797.25 1526.02L1858.49 1490.67L1880.9 1538.96Z" fill="#C4C4C4"/>
                <rect data-table="1" className={"map__table "+styles.map__table} onClick={selectTable} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 2065.07 708.841)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M1977.07 840.918L1954.66 889.21L1893.42 853.858L1977.07 840.918Z" fill="#C4C4C4"/>
                <path d="M2279.71 813.16L2302.13 764.868L2363.36 800.22L2279.71 813.16Z" fill="white" fillOpacity="0.3"/>
                <path d="M2104.35 914.396L2081.94 962.689L2020.7 927.336L2104.35 914.396Z" fill="white" fillOpacity="0.3"/>
                <path d="M2152.43 739.681L2174.85 691.389L2236.08 726.742L2152.43 739.681Z" fill="#C4C4C4"/>
                <path d="M1970.71 736.008L1887.05 723.068L1948.29 687.715L1970.71 736.008Z" fill="#C4C4C4"/>
                <rect data-table="2" className={"map__table "+styles.map__table} onClick={selectTable} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 955.619 598.215)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M867.62 730.292L845.206 778.585L783.968 743.232L867.62 730.292Z" fill="#C4C4C4"/>
                <path d="M1170.26 702.534L1192.68 654.242L1253.91 689.594L1170.26 702.534Z" fill="white" fillOpacity="0.3"/>
                <path d="M994.899 803.771L972.485 852.063L911.248 816.711L994.899 803.771Z" fill="white" fillOpacity="0.3"/>
                <path d="M1042.98 629.056L1065.4 580.764L1126.63 616.116L1042.98 629.056Z" fill="#C4C4C4"/>
                <path d="M861.256 625.382L777.604 612.442L838.842 577.09L861.256 625.382Z" fill="#C4C4C4"/>
                <rect data-table="3" className={"map__table "+styles.map__table} onClick={selectTable} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1414.53 333.285)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M1326.53 465.362L1304.12 513.654L1242.88 478.302L1326.53 465.362Z" fill="#C4C4C4"/>
                <path d="M1629.17 437.604L1651.59 389.312L1712.83 424.664L1629.17 437.604Z" fill="white" fillOpacity="0.3"/>
                <path d="M1646.85 549.046L1730.5 561.986L1669.27 597.338L1646.85 549.046Z" fill="white" fillOpacity="0.3"/>
                <path d="M1453.81 538.841L1431.4 587.133L1370.16 551.781L1453.81 538.841Z" fill="white" fillOpacity="0.3"/>
                <path d="M1501.89 364.126L1524.31 315.834L1585.55 351.186L1501.89 364.126Z" fill="#C4C4C4"/>
                <path d="M1320.17 360.452L1236.52 347.512L1297.75 312.16L1320.17 360.452Z" fill="#C4C4C4"/>
                <rect data-table="4" className={"map__table "+styles.map__table} onClick={selectTable} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 2469.53 1226.45)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M2381.54 1358.53L2359.12 1406.82L2297.88 1371.47L2381.54 1358.53Z" fill="#C4C4C4"/>
                <path d="M2684.18 1330.77L2706.59 1282.48L2767.83 1317.83L2684.18 1330.77Z" fill="white" fillOpacity="0.3"/>
                <path d="M2508.81 1432.01L2486.4 1480.3L2425.16 1444.95L2508.81 1432.01Z" fill="white" fillOpacity="0.3"/>
                <path d="M2556.9 1257.3L2579.31 1209L2640.55 1244.36L2556.9 1257.3Z" fill="#C4C4C4"/> */}
              </svg>
      break;
    case 'A623':
      return  <svg  ref={roomRef} 
                    style={{
                      transform: 'translate3d(calc(-50% + '+crop.x+'px), calc(-50% + '+crop.y+'px),0)',
                      touchAction: 'none'
                    }}
                    className={styles.map} viewBox="0 0 4184 2415" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <path d="M4183.27 1207.5L3137.45 1811.25L2091.63 1207.5L1045.82 1811.25L0.00017125 1207.5L2091.63 -6.4161e-05L4183.27 1207.5Z" fill="black"/>
                <rect data-table="0" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 3404.47 990.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M3316.47 1122.17L3294.05 1170.46L3232.82 1135.11L3316.47 1122.17Z" fill="#C4C4C4"/>
                <path d="M3619.11 1094.41L3641.52 1046.12L3702.76 1081.47L3619.11 1094.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M3443.75 1195.65L3421.33 1243.94L3360.09 1208.59L3443.75 1195.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M3491.83 1020.93L3514.24 972.643L3575.48 1007.99L3491.83 1020.93Z" fill="#C4C4C4"/>
                <path d="M3310.1 1017.26L3226.45 1004.32L3287.69 968.969L3310.1 1017.26Z" fill="#C4C4C4"/>
                <rect data-table="1" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 2903.47 699.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M2815.47 831.171L2793.05 879.463L2731.82 844.111L2815.47 831.171Z" fill="#C4C4C4"/>
                <path d="M3118.11 803.413L3140.52 755.121L3201.76 790.473L3118.11 803.413Z" fill="white" fillOpacity="0.3"/>
                <path d="M2942.75 904.65L2920.33 952.942L2859.09 917.59L2942.75 904.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M2990.83 729.935L3013.24 681.643L3074.48 716.995L2990.83 729.935Z" fill="#C4C4C4"/>
                <path d="M2809.1 726.261L2725.45 713.321L2786.69 677.969L2809.1 726.261Z" fill="#C4C4C4"/>
                <rect data-table="2" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 2387.47 380.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M2299.47 512.171L2277.05 560.463L2215.82 525.111L2299.47 512.171Z" fill="#C4C4C4"/>
                <path d="M2602.11 484.413L2624.52 436.121L2685.76 471.473L2602.11 484.413Z" fill="white" fillOpacity="0.3"/>
                <path d="M2426.75 585.65L2404.33 633.942L2343.09 598.59L2426.75 585.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M2474.83 410.935L2497.24 362.643L2558.48 397.995L2474.83 410.935Z" fill="#C4C4C4"/>
                <path d="M2293.1 407.261L2209.45 394.321L2270.69 358.969L2293.1 407.261Z" fill="#C4C4C4"/>
                <rect data-table="3" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1299.47 757.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M1211.47 889.171L1189.05 937.463L1127.82 902.111L1211.47 889.171Z" fill="#C4C4C4"/>
                <path d="M1514.11 861.413L1536.52 813.121L1597.76 848.473L1514.11 861.413Z" fill="white" fillOpacity="0.3"/>
                <path d="M1338.75 962.65L1316.33 1010.94L1255.09 975.59L1338.75 962.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M1386.83 787.935L1409.24 739.643L1470.48 774.995L1386.83 787.935Z" fill="#C4C4C4"/>
                <path d="M1205.1 784.261L1121.45 771.321L1182.69 735.969L1205.1 784.261Z" fill="#C4C4C4"/>
                <rect data-table="4" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 859.465 1017.09)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M771.466 1149.17L749.052 1197.46L687.815 1162.11L771.466 1149.17Z" fill="#C4C4C4"/>
                <path d="M1074.11 1121.41L1096.52 1073.12L1157.76 1108.47L1074.11 1121.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M898.745 1222.65L876.331 1270.94L815.094 1235.59L898.745 1222.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M946.829 1047.93L969.243 999.643L1030.48 1034.99L946.829 1047.93Z" fill="#C4C4C4"/>
                <path d="M765.103 1044.26L681.451 1031.32L742.688 995.969L765.103 1044.26Z" fill="#C4C4C4"/>
              </svg>
      break;
    case 'A622':
      return  <svg  ref={roomRef}
                    style={{
                      transform: 'translate3d(calc(-50% + '+crop.x+'px), calc(-50% + '+crop.y+'px),0)',
                      touchAction: 'none'
                    }}
                    className={styles.map} viewBox="0 0 3749 2164" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="3240.27" height="1087.42" transform="matrix(0.866044 -0.499967 0.866044 0.499967 0.681152 1620.03)" fill="black"/>
                <rect data-table="0" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 2780.47 300.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M2692.47 432.171L2670.05 480.463L2608.82 445.111L2692.47 432.171Z" fill="#C4C4C4"/>
                <path d="M2995.11 404.413L3017.52 356.121L3078.76 391.473L2995.11 404.413Z" fill="white" fillOpacity="0.3"/>
                <path d="M2819.75 505.65L2797.33 553.942L2736.09 518.59L2819.75 505.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M2867.83 330.935L2890.24 282.643L2951.48 317.995L2867.83 330.935Z" fill="#C4C4C4"/>
                <path d="M2686.1 327.261L2602.45 314.321L2663.69 278.969L2686.1 327.261Z" fill="#C4C4C4"/>
                <rect data-table="1" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 2337.47 558.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M2249.47 690.172L2227.05 738.464L2165.82 703.111L2249.47 690.172Z" fill="#C4C4C4"/>
                <path d="M2552.11 662.413L2574.52 614.121L2635.76 649.473L2552.11 662.413Z" fill="white" fillOpacity="0.3"/>
                <path d="M2376.75 763.65L2354.33 811.942L2293.09 776.59L2376.75 763.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M2424.83 588.935L2447.24 540.643L2508.48 575.995L2424.83 588.935Z" fill="#C4C4C4"/>
                <path d="M2243.1 585.261L2159.45 572.321L2220.69 536.969L2243.1 585.261Z" fill="#C4C4C4"/>
                <rect data-table="2" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1902.47 816.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M1814.47 948.172L1792.05 996.464L1730.82 961.111L1814.47 948.172Z" fill="#C4C4C4"/>
                <path d="M2117.11 920.413L2139.52 872.121L2200.76 907.473L2117.11 920.413Z" fill="white" fillOpacity="0.3"/>
                <path d="M1941.75 1021.65L1919.33 1069.94L1858.09 1034.59L1941.75 1021.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M1989.83 846.935L2012.24 798.643L2073.48 833.995L1989.83 846.935Z" fill="#C4C4C4"/>
                <path d="M1808.1 843.261L1724.45 830.321L1785.69 794.969L1808.1 843.261Z" fill="#C4C4C4"/>
                <rect data-table="3" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1452.47 1074.09)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M1364.47 1206.17L1342.05 1254.46L1280.81 1219.11L1364.47 1206.17Z" fill="#C4C4C4"/>
                <path d="M1667.11 1178.41L1689.52 1130.12L1750.76 1165.47L1667.11 1178.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M1491.75 1279.65L1469.33 1327.94L1408.09 1292.59L1491.75 1279.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M1539.83 1104.93L1562.24 1056.64L1623.48 1091.99L1539.83 1104.93Z" fill="#C4C4C4"/>
                <path d="M1358.1 1101.26L1274.45 1088.32L1335.69 1052.97L1358.1 1101.26Z" fill="#C4C4C4"/>
                <rect data-table="4" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1024.47 1332.09)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M936.466 1464.17L914.052 1512.46L852.815 1477.11L936.466 1464.17Z" fill="#C4C4C4"/>
                <path d="M1239.11 1436.41L1261.52 1388.12L1322.76 1423.47L1239.11 1436.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M1063.75 1537.65L1041.33 1585.94L980.094 1550.59L1063.75 1537.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M1111.83 1362.93L1134.24 1314.64L1195.48 1349.99L1111.83 1362.93Z" fill="#C4C4C4"/>
                <path d="M930.103 1359.26L846.451 1346.32L907.688 1310.97L930.103 1359.26Z" fill="#C4C4C4"/>
              </svg>
      break;
    case 'A620':
      return  <svg  ref={roomRef}
                    style={{
                      transform: 'translate3d(calc(-50% + '+crop.x+'px), calc(-50% + '+crop.y+'px),0)',
                      touchAction: 'none'
                    }}
                    className={styles.map} viewBox="0 0 4545 2625" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1757.61 6.99975L4544.47 1604.41L2786.86 2618.25L-0.000101858 1020.85L1757.61 6.99975Z" fill="black"/>
                <rect data-table="0" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 2746.47 1854.09)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M2658.47 1986.17L2636.05 2034.46L2574.81 1999.11L2658.47 1986.17Z" fill="#C4C4C4"/>
                <path d="M2961.11 1958.41L2983.52 1910.12L3044.76 1945.47L2961.11 1958.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M2785.75 2059.65L2763.33 2107.94L2702.09 2072.59L2785.75 2059.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M2833.83 1884.93L2856.24 1836.64L2917.48 1871.99L2833.83 1884.93Z" fill="#C4C4C4"/>
                <path d="M2652.1 1881.26L2568.45 1868.32L2629.69 1832.97L2652.1 1881.26Z" fill="#C4C4C4"/>
                <rect data-table="1" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 3379.47 1488.09)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M3291.47 1620.17L3269.05 1668.46L3207.81 1633.11L3291.47 1620.17Z" fill="#C4C4C4"/>
                <path d="M3594.11 1592.41L3616.52 1544.12L3677.76 1579.47L3594.11 1592.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M3418.75 1693.65L3396.33 1741.94L3335.09 1706.59L3418.75 1693.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M3466.83 1518.93L3489.24 1470.64L3550.48 1505.99L3466.83 1518.93Z" fill="#C4C4C4"/>
                <path d="M3285.1 1515.26L3201.45 1502.32L3262.69 1466.97L3285.1 1515.26Z" fill="#C4C4C4"/>
                <rect data-table="2" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1026.47 883.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M938.466 1015.17L916.052 1063.46L854.815 1028.11L938.466 1015.17Z" fill="#C4C4C4"/>
                <path d="M1241.11 987.413L1263.52 939.121L1324.76 974.473L1241.11 987.413Z" fill="white" fillOpacity="0.3"/>
                <path d="M1065.75 1088.65L1043.33 1136.94L982.094 1101.59L1065.75 1088.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M1113.83 913.935L1136.24 865.643L1197.48 900.995L1113.83 913.935Z" fill="#C4C4C4"/>
                <path d="M932.103 910.261L848.451 897.321L909.688 861.969L932.103 910.261Z" fill="#C4C4C4"/>
                <rect data-table="3" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1709.47 467.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M1621.47 599.171L1599.05 647.463L1537.81 612.111L1621.47 599.171Z" fill="#C4C4C4"/>
                <path d="M1924.11 571.413L1946.52 523.121L2007.76 558.473L1924.11 571.413Z" fill="white" fillOpacity="0.3"/>
                <path d="M1748.75 672.65L1726.33 720.942L1665.09 685.59L1748.75 672.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M1796.83 497.935L1819.24 449.643L1880.48 484.995L1796.83 497.935Z" fill="#C4C4C4"/>
                <path d="M1615.1 494.261L1531.45 481.321L1592.69 445.969L1615.1 494.261Z" fill="#C4C4C4"/>
                <rect data-table="4" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 2220.47 1159.09)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M2132.47 1291.17L2110.05 1339.46L2048.81 1304.11L2132.47 1291.17Z" fill="#C4C4C4"/>
                <path d="M2435.11 1263.41L2457.52 1215.12L2518.76 1250.47L2435.11 1263.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M2259.75 1364.65L2237.33 1412.94L2176.09 1377.59L2259.75 1364.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M2307.83 1189.93L2330.24 1141.64L2391.48 1176.99L2307.83 1189.93Z" fill="#C4C4C4"/>
                <path d="M2126.1 1186.26L2042.45 1173.32L2103.69 1137.97L2126.1 1186.26Z" fill="#C4C4C4"/>
              </svg>
    case 'A621':
      return  <svg  ref={roomRef}
                    style={{
                      transform: 'translate3d(calc(-50% + '+crop.x+'px), calc(-50% + '+crop.y+'px),0)',
                      touchAction: 'none'
                    }}
                    className={styles.map} viewBox="0 0 5198 3001" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4162.82" height="1838.3" transform="matrix(0.866044 -0.499967 0.866044 0.499967 0 2081.27)" fill="black"/>
                <rect data-table="0" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1363.47 2119.09)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M1275.47 2251.17L1253.05 2299.46L1191.81 2264.11L1275.47 2251.17Z" fill="#C4C4C4"/>
                <path d="M1578.11 2223.41L1600.52 2175.12L1661.76 2210.47L1578.11 2223.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M1402.75 2324.65L1380.33 2372.94L1319.09 2337.59L1402.75 2324.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M1450.83 2149.93L1473.24 2101.64L1534.48 2136.99L1450.83 2149.93Z" fill="#C4C4C4"/>
                <path d="M1269.1 2146.26L1185.45 2133.32L1246.69 2097.97L1269.1 2146.26Z" fill="#C4C4C4"/>
                <rect data-table="1" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 1705.47 1567.09)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M1617.47 1699.17L1595.05 1747.46L1533.81 1712.11L1617.47 1699.17Z" fill="#C4C4C4"/>
                <path d="M1920.11 1671.41L1942.52 1623.12L2003.76 1658.47L1920.11 1671.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M1744.75 1772.65L1722.33 1820.94L1661.09 1785.59L1744.75 1772.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M1792.83 1597.93L1815.24 1549.64L1876.48 1584.99L1792.83 1597.93Z" fill="#C4C4C4"/>
                <path d="M1611.1 1594.26L1527.45 1581.32L1588.69 1545.97L1611.1 1594.26Z" fill="#C4C4C4"/>
                <rect data-table="2" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 2513.47 1421.09)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M2425.47 1553.17L2403.05 1601.46L2341.81 1566.11L2425.47 1553.17Z" fill="#C4C4C4"/>
                <path d="M2728.11 1525.41L2750.52 1477.12L2811.76 1512.47L2728.11 1525.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M2552.75 1626.65L2530.33 1674.94L2469.09 1639.59L2552.75 1626.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M2600.83 1451.94L2623.24 1403.64L2684.48 1439L2600.83 1451.94Z" fill="#C4C4C4"/>
                <path d="M2419.1 1448.26L2335.45 1435.32L2396.69 1399.97L2419.1 1448.26Z" fill="#C4C4C4"/>
                <rect data-table="3" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 2796.47 920.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M2708.47 1052.17L2686.05 1100.46L2624.81 1065.11L2708.47 1052.17Z" fill="#C4C4C4"/>
                <path d="M3011.11 1024.41L3033.52 976.121L3094.76 1011.47L3011.11 1024.41Z" fill="white" fillOpacity="0.3"/>
                <path d="M2835.75 1125.65L2813.33 1173.94L2752.09 1138.59L2835.75 1125.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M2883.83 950.935L2906.24 902.643L2967.48 937.995L2883.83 950.935Z" fill="#C4C4C4"/>
                <path d="M2702.1 947.261L2618.45 934.321L2679.69 898.969L2702.1 947.261Z" fill="#C4C4C4"/>
                <rect data-table="4" onClick={selectTable} className={"map__table "+styles.map__table} y="1.99987" width="322.592" height="159.296" transform="matrix(0.866044 0.499967 -0.866044 0.499967 3514.47 709.094)" fill="black" stroke="#F4C113" strokeWidth="4"/>
                <path d="M3426.47 841.171L3404.05 889.463L3342.82 854.111L3426.47 841.171Z" fill="#C4C4C4"/>
                <path d="M3729.11 813.413L3751.52 765.121L3812.76 800.473L3729.11 813.413Z" fill="white" fillOpacity="0.3"/>
                <path d="M3553.75 914.65L3531.33 962.942L3470.09 927.59L3553.75 914.65Z" fill="white" fillOpacity="0.3"/>
                <path d="M3601.83 739.935L3624.24 691.643L3685.48 726.995L3601.83 739.935Z" fill="#C4C4C4"/>
                <path d="M3420.1 736.261L3336.45 723.321L3397.69 687.969L3420.1 736.261Z" fill="#C4C4C4"/>
              </svg>
      break;
    default:
      return <p ref={roomRef}>{"sorry, there isn't room"}</p>;
      break;
  }
}

function ButtonBack({currentRoomIndex,rooms,variant}){
  if(currentRoomIndex>0 && variant === 'back'){
    return  <Link href={`/room/`+rooms[currentRoomIndex-1]}>
              <a>
                <svg className={styles.pagination__svg} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="white"/>
                </svg>
              </a>
            </Link>
  }
  if(currentRoomIndex<4 && variant === "next"){
    return  <Link href={`/room/`+rooms[currentRoomIndex+1]}>
              <a>
                <svg className={styles.pagination__svg} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="white"/>
                </svg>
              </a>
            </Link>
  }
  return <svg className={styles.pagination__svg}></svg>
}
