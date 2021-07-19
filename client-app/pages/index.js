import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <code>Page: home</code>
      </main>
    </div>
  )
}
