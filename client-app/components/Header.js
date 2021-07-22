import styles from '../styles/components/Header/Header.module.scss'
import Link from 'next/link'

export default function Header(){
    return(
            <header className={styles.header}>
                <nav className={styles.header__nav}>
                    <Link href="/">
                        <a>
                            <div className={styles.header__nav__home__container} >
                                <svg className={styles.header__nav__home__svg} viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="48">
                                    <path d="M34.9091 17.4545C34.9091 17.4545 34.9091 30.5455 17.4545 48C0 30.5455 0 17.4545 0 17.4545C0 7.81467 7.81467 0 17.4545 0C27.0944 0 34.9091 7.81467 34.9091 17.4545Z" fill="#93CC6F"/>
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <path d="M34.9091 17.4545C34.9091 17.4545 34.9091 30.5455 17.4545 48C0 30.5455 0 17.4545 0 17.4545C0 7.81467 7.81467 0 17.4545 0C27.0944 0 34.9091 7.81467 34.9091 17.4545Z" fill="#F6E015"/>
                                        <path d="M33.3813 31.9641C33.3813 40.8207 26.2016 48.0005 17.345 48.0005C8.48832 48.0005 1.30859 40.8207 1.30859 31.9641C1.30859 23.1075 8.48832 15.9277 17.345 15.9277C26.2016 15.9277 33.3813 23.1075 33.3813 31.9641Z" fill="#F19812"/>
                                        <path d="M27.9273 16.0359C27.9273 21.8801 23.1897 26.6177 17.3455 26.6177C11.5013 26.6177 6.76367 21.8801 6.76367 16.0359C6.76367 10.1917 11.5013 5.4541 17.3455 5.4541C23.1897 5.4541 27.9273 10.1917 27.9273 16.0359Z" fill="#C4C4C4"/>
                                        <path d="M25.3091 16.0359C25.3091 20.4341 21.7437 23.9995 17.3455 23.9995C12.9473 23.9995 9.38184 20.4341 9.38184 16.0359C9.38184 11.6377 12.9473 8.07227 17.3455 8.07227C21.7437 8.07227 25.3091 11.6377 25.3091 16.0359Z" fill="white"/>
                                        <path d="M13.7453 33.3337C13.7453 33.3386 13.745 33.3435 13.745 33.3484L13.7447 33.3586C13.738 34.0655 13.4851 34.7482 13.0294 35.2898C12.5736 35.8314 11.9433 36.1983 11.2461 36.3277V43.3004C11.2461 43.4473 11.1876 43.5881 11.0835 43.6919C10.9793 43.7958 10.8381 43.8541 10.6908 43.8541C10.5435 43.8541 10.4022 43.7958 10.2981 43.6919C10.1939 43.5881 10.1354 43.4473 10.1354 43.3004V36.3277C9.43829 36.1983 8.80794 35.8313 8.35219 35.2897C7.89644 34.7481 7.6436 34.0654 7.63692 33.3585C7.63672 33.3552 7.63672 33.3518 7.63658 33.3484C7.63658 33.3435 7.63623 33.3387 7.63623 33.3337C7.63623 33.3284 7.63692 33.3233 7.63699 33.3181C7.63734 33.3082 7.63769 33.2981 7.63852 33.2881C7.63935 33.278 7.6406 33.268 7.64199 33.2581C7.64269 33.2529 7.64296 33.2478 7.6438 33.2427L8.19917 29.9205C8.21072 29.8484 8.23647 29.7792 8.27493 29.7171C8.31339 29.6549 8.3638 29.601 8.42326 29.5583C8.48272 29.5157 8.55005 29.4852 8.62138 29.4686C8.69271 29.452 8.76663 29.4496 8.83888 29.4616C8.91113 29.4736 8.98028 29.4998 9.04236 29.5385C9.10444 29.5773 9.15821 29.6279 9.20059 29.6875C9.24296 29.747 9.2731 29.8144 9.28927 29.8856C9.30543 29.9568 9.3073 30.0305 9.29478 30.1025L8.84722 32.78H10.1354V30.0115C10.1354 29.8646 10.1939 29.7238 10.2981 29.62C10.4022 29.5161 10.5435 29.4578 10.6908 29.4578C10.8381 29.4578 10.9793 29.5161 11.0835 29.62C11.1876 29.7238 11.2461 29.8646 11.2461 30.0115V32.78H12.5343L12.0868 30.1025C12.0742 30.0305 12.0761 29.9568 12.0923 29.8856C12.1085 29.8144 12.1386 29.747 12.181 29.6875C12.2233 29.6279 12.2771 29.5773 12.3392 29.5385C12.4013 29.4998 12.4704 29.4736 12.5427 29.4616C12.6149 29.4496 12.6888 29.452 12.7602 29.4686C12.8315 29.4852 12.8988 29.5157 12.9583 29.5583C13.0178 29.601 13.0682 29.6549 13.1066 29.7171C13.1451 29.7792 13.1708 29.8484 13.1824 29.9205L13.7378 33.2427C13.7386 33.2478 13.7388 33.2529 13.7396 33.2581C13.7409 33.268 13.7422 33.278 13.743 33.2881C13.7439 33.2981 13.7442 33.3082 13.7446 33.3181C13.7447 33.3234 13.7453 33.3285 13.7453 33.3337Z" fill="#242424"/>
                                        <path d="M25.9592 28.4143C25.9617 28.4334 25.9631 28.4525 25.9634 28.4717C25.9635 28.4751 25.9639 28.4783 25.9639 28.4816V41.7739C25.9639 41.9208 25.9026 42.0617 25.7935 42.1655C25.6844 42.2694 25.5364 42.3277 25.3821 42.3277C25.2278 42.3277 25.0798 42.2694 24.9707 42.1655C24.8616 42.0617 24.8003 41.9208 24.8003 41.7739V37.897H21.3093C21.2277 37.897 21.147 37.8806 21.0724 37.849C20.9979 37.8173 20.9311 37.7711 20.8766 37.7133C20.822 37.6555 20.7808 37.5874 20.7557 37.5134C20.7306 37.4395 20.7222 37.3613 20.7309 37.2841C20.9061 35.8963 21.1919 34.5232 21.5859 33.1767C22.4544 30.2588 23.6548 28.5084 25.1537 27.9721C25.1564 27.971 25.1592 27.9701 25.1619 27.9691C25.169 27.9666 25.176 27.9636 25.1832 27.961C25.1865 27.9599 25.1898 27.9593 25.1931 27.9582C25.2218 27.9487 25.2513 27.9414 25.2813 27.9365C25.3111 27.9315 25.3413 27.9287 25.3716 27.9282C25.3751 27.9281 25.3786 27.9277 25.3821 27.9277C25.3859 27.9277 25.3896 27.9282 25.3934 27.9283C25.4055 27.9285 25.4175 27.9291 25.4294 27.93C25.4572 27.9322 25.4848 27.9362 25.512 27.9421C25.5203 27.9439 25.5286 27.946 25.5369 27.9482C25.5473 27.9509 25.5576 27.9538 25.5678 27.9571C25.5741 27.9591 25.5802 27.9613 25.5864 27.9635L25.589 27.9644C25.5996 27.9682 25.6101 27.9723 25.6204 27.9767C25.6272 27.9797 25.6339 27.9828 25.6406 27.986C25.6504 27.9905 25.6601 27.9953 25.6696 28.0004C25.6769 28.0044 25.684 28.0087 25.691 28.0129C25.6994 28.0178 25.7077 28.0229 25.7158 28.0283C25.7236 28.0336 25.7313 28.0391 25.7389 28.0447C25.7456 28.0497 25.7524 28.0548 25.759 28.0601C25.7671 28.0667 25.775 28.0736 25.7827 28.0806C25.7883 28.0856 25.7939 28.0907 25.7992 28.096C25.8069 28.1036 25.8144 28.1114 25.8216 28.1194L25.822 28.1198C25.8269 28.1252 25.8319 28.1307 25.8366 28.1363C25.8431 28.1442 25.8495 28.1523 25.8555 28.1605C25.8607 28.1673 25.8656 28.1742 25.8704 28.1812C25.8755 28.1887 25.8803 28.1963 25.885 28.204C25.8903 28.2127 25.8953 28.2214 25.9002 28.2303C25.9037 28.237 25.9071 28.2437 25.9104 28.2506C25.9155 28.261 25.9202 28.2717 25.9246 28.2825C25.9259 28.2859 25.9276 28.289 25.9289 28.2923C25.9301 28.2954 25.9307 28.2985 25.9319 28.3016C25.9451 28.3382 25.9542 28.3759 25.9592 28.4143Z" fill="#242424"/>
                                    </g>
                                </svg>
                                <div className={styles.header__nav__home__content}>
                                    <h1 className={styles.header__nav__home__content__title}>ViteMaTable</h1>
                                    <h2 className={styles.header__nav__home__content__subtitle}>We do the better for you</h2>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <ul className={styles.header__nav__list}>
                        <li>
                            <button className={styles.header__nav__list__btn+' '+styles.header__nav__list__btn__1}>
                                Mes favoris
                            </button>
                        </li>
                        <li>
                            <button className={styles.header__nav__list__btn+' '+styles.header__nav__list__btn__2}>
                                Les salles
                            </button>
                        </li>
                    </ul>
                    <button className={styles.header__nav__btn__mobile}>
                        <svg className={styles.header__nav__btn__mobile__svg} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="white"/>
                        </svg>
                    </button>
                </nav>
                <div className={styles.header__popup__background}></div>
                <div className={styles.header__popup}>
                        <button class={styles.header__popup__close__btn}>
                            <svg class={styles.header__popup__close__svg} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
                            </svg>

                        </button>
                        <div className={styles.header__popup__content}>
                            <button className={styles.header__popup__content__label}>Voir les salles favorites
                                <svg className={styles.header__popup__content__label__svg} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z" fill="white"/>
                                </svg>

                            </button>
                            <ul className={styles.header__popup__content__list}>
                                <li className={styles.header__popup__content__list__item}>
                                    <button>
                                        <svg className={styles.header__popup__content__list__item__svg} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 14.392L15.1503 17.5003L13.7837 11.642L18.3337 7.70033L12.342 7.19199L10.0003 1.66699L7.65866 7.19199L1.66699 7.70033L6.21699 11.642L4.85033 17.5003L10.0003 14.392Z" fill="#F6E015"/>
                                        </svg>
                                    </button>
                                    Salle A625
                                </li>
                                <li className={styles.header__popup__content__list__item}>
                                    <button>
                                        <svg className={styles.header__popup__content__list__item__svg} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 14.392L15.1503 17.5003L13.7837 11.642L18.3337 7.70033L12.342 7.19199L10.0003 1.66699L7.65866 7.19199L1.66699 7.70033L6.21699 11.642L4.85033 17.5003L10.0003 14.392Z" fill="#F6E015"/>
                                        </svg>
                                    </button>
                                    Salle A260
                                </li>
                                <li className={styles.header__popup__content__list__item}>
                                    <button>
                                        <svg className={styles.header__popup__content__list__item__svg} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 14.392L15.1503 17.5003L13.7837 11.642L18.3337 7.70033L12.342 7.19199L10.0003 1.66699L7.65866 7.19199L1.66699 7.70033L6.21699 11.642L4.85033 17.5003L10.0003 14.392Z" fill="#F6E015"/>
                                        </svg>
                                    </button>
                                    Salle A480
                                </li>
                            </ul>
                        </div>
                        <div className={styles.header__popup__content}>
                            <button className={styles.header__popup__content__label}>Voir la liste des salles
                                <svg className={styles.header__popup__content__label__svg} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z" fill="white"/>
                                </svg>
                            </button>
                            <ul className={styles.header__popup__content__list}>
                                <li className={styles.header__popup__content__list__item}>
                                    <button>
                                        <svg className={styles.header__popup__content__list__item__svg} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 14.392L15.1503 17.5003L13.7837 11.642L18.3337 7.70033L12.342 7.19199L10.0003 1.66699L7.65866 7.19199L1.66699 7.70033L6.21699 11.642L4.85033 17.5003L10.0003 14.392Z" fill="#F6E015"/>
                                        </svg>
                                    </button>
                                    Salle A625
                                </li>
                                <li className={styles.header__popup__content__list__item}>
                                    <button>
                                        <svg className={styles.header__popup__content__list__item__svg} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 14.392L15.1503 17.5003L13.7837 11.642L18.3337 7.70033L12.342 7.19199L10.0003 1.66699L7.65866 7.19199L1.66699 7.70033L6.21699 11.642L4.85033 17.5003L10.0003 14.392Z" fill="#F6E015"/>
                                        </svg>
                                    </button>
                                    
                                    Salle A260
                                </li>
                                <li className={styles.header__popup__content__list__item}>
                                    <button>
                                        <svg className={styles.header__popup__content__list__item__svg} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 14.392L15.1503 17.5003L13.7837 11.642L18.3337 7.70033L12.342 7.19199L10.0003 1.66699L7.65866 7.19199L1.66699 7.70033L6.21699 11.642L4.85033 17.5003L10.0003 14.392Z" fill="#F6E015"/>
                                        </svg>
                                    </button>
                                    Salle A480
                                </li>
                            </ul>
                        </div>                   
                        <div className={styles.header__popup__info}>
                            <div className={styles.header__popup__info__progressBar}>
                                <div className={styles.header__popup__info__progressBar__currentProgress}></div>
                            </div>
                            <div className={styles.header__popup__info__content__wrapper}>
                                <p className={styles.header__popup__info__content}>Cette salle à été supprimée de vos favoris</p>
                                <button className={styles.header__popup__info__btn__cancel}>ANNULER</button>
                            </div>
                            
                        </div>
                    </div>
            </header>
    )
}