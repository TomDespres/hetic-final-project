import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <code>Page: home</code>
        <div>
          <button>back</button>
          <p>Salle A625</p>
          <button>next</button>
        </div>
        <div>
          <div>Map</div>
          <div>Affluence/h</div>
          <div>Temps moyen d'utilisation</div>
          <div>Marqueur</div>
        </div>
      </main>
    </div>
  )
}
