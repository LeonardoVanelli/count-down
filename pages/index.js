import CountDown from 'react-countdown'
import {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'

import imageMobile from "../public/castelomobile3.png"
import imageWeb from "../public/castelobetocarrero.jpg"
import logo from "../public/logo-footer.png"

export default function Home() {
  const [date] = useState(new Date(2021, 5, 11, 20))
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);    
  }, [])


  function ImagePath() {
    return width < 1024 ? imageMobile : imageWeb
  }
  
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.date}>
              {days}
            </div>
            <div className= {styles.label}>
              Dias
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.date}>
              {hours}
            </div>
            <div className= {styles.label}>
              Horas
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.date}>
              {minutes}
            </div>
            <div className= {styles.label}>
              Minutos
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.date}>
              {seconds}
            </div>
            <div className= {styles.label}>
              Segundos
            </div>
          </div>
        </div>;
    }
  };

  return (
      <div
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100%",
            maxHeight: "100%",        
            backgroundImage: "url(" + ImagePath() + ")"
          }}
        >
          <div className={styles.containerTitle}>
            <h1 className={styles.title}>Faltam</h1>
            <CountDown date={date} renderer={renderer} zeroPadDays={2} zeroPadTime={2} className={styles.footer}/>
            <h1 className={styles.title}>para o</h1>
            <img src={logo} height="100em"/>
          </div>
      </div>
  )
}
