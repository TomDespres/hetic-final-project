import styles from '../styles/components/Header/Header.module.scss'
import Link from 'next/link'

export default function Header(){
    return(
        <>
            <header className={styles.header}>
                <nav className={styles.header__nav}>
                    <Link href="/">
                        <a>
                            <h1>
                                <svg className={styles.header__nav__home} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.97 40">
                                </svg>
                            </h1>
                        </a>
                    </Link>
                    <ul>
                        <Link href="/favoris">
                            <a>
                                <li>Mes favoris</li>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <li>Les salles</li>
                            </a>
                        </Link>
                    </ul>
                </nav>
            </header>
            {/* <style jsx>{`
                header{
                    position:sticky;
                    top:0;
                }
            `}</style> */}
        </>
    )
}