import styles from '../styles/pages/Favoris.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://vite-ma-table.vercel.app/">Vite Ma Table</a>
        </h1>
        <a href="/">page home</a>
      </main>
    </div>
  )
}
