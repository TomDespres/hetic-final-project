import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://vite-ma-table.vercel.app/">Vite Ma Table</a>
        </h1>
        <a href="/favoris">Voir mes salles favorites</a>
      </main>
    </div>
  )
}
