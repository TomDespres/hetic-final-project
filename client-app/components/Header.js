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
                    <ul className={styles.header__nav__list}>
                        <li>
                            <button className={styles.header__nav__list__btn__1}>
                                Mes favoris
                            </button>
                        </li>
                        <li>
                            <button className={styles.header__nav__list__btn__2}>
                                Les salles
                            </button>
                        </li>
                    </ul>
                </nav>
                <div>
                    menuPopup
                </div>
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