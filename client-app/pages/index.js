import styles from '../styles/pages/Home.module.scss';
import Image from 'next/image'
import picture from '../assets/images/room.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.pagination}>
          {/* <button>
            <svg className={styles.pagination__svg} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="white"/>
            </svg>
          </button> */}
          <p>étage 1</p>
          {/* <button>
            <svg className={styles.pagination__svg} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="white"/>
            </svg>
          </button> */}
        </div>
        <div className={styles.map__wrapper}>
          <svg className={styles.map} viewBox="0 0 9285 5353" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Link href={`/room/A620`}>
              <a>
                <rect className={styles.map__room} y="11.9992" width="2425.44" height="1608.96" transform="matrix(0.866044 0.499967 -0.866044 0.499967 7173.61 976)" fill="black" stroke="#F6E015" strokeWidth="24"/>
              </a>
            </Link>
            <Link href={`/room/A621`}>
              <a>
                <path className={styles.map__room+" "+styles.map__room__selected} d="M5659.24 3065.5L4623.82 3663.25L3598.79 3071.5L5669.63 1876L7740.48 3071.5L6715.45 3663.25L5680.03 3065.5L5669.63 3059.5L5659.24 3065.5Z" fill="black" stroke="#F6E015" strokeWidth="24"/>
              </a>
            </Link>
            <Link href={`/room/A622`}>
              <a>
                <rect className={styles.map__room} x="20.7851" width="3216.27" height="1063.42" transform="matrix(0.866044 -0.499967 0.866044 0.499967 2870.47 4819.42)" fill="black" stroke="#F6E015" strokeWidth="24"/>
              </a>
            </Link>
            <Link href={`/room/A624`}>
              <a>
                <rect className={styles.map__room} x="20.7851" width="4138.82" height="1814.3" transform="matrix(0.866044 -0.499967 0.866044 0.499967 1892.78 2091.66)" fill="black" stroke="#F6E015" strokeWidth="24"/>
              </a>
            </Link>
            <Link href={`/room/A623`}>
              <a>
                <path className={styles.map__room} d="M20.8263 3150.83L1757.64 2148.98L4523.64 3734.43L2786.83 4736.28L20.8263 3150.83Z" fill="black" stroke="#F6E015" strokeWidth="24"/>
              </a>
            </Link>
          </svg>

          {/* desktop or mobile */}
          <div className={styles.map__marker}>
            <div className={styles.map__marker__img__wrapper}>
              <Image className={styles.map__marker__img} src={picture}/>
            </div>
            <svg className={styles.map__marker__sound} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 3.97V12.02C12.48 11.29 13.5 9.77 13.5 8C13.5 6.23 12.48 4.71 11 3.97ZM0 5V11H4L9 16V0L4 5H0ZM7 4.83V11.17L4.83 9H2V7H4.83L7 4.83Z" fill="white"/>
            </svg>

            <ul className={styles.map__marker__contentList}>
              <li className={styles.map__marker__contentList__item}>
                <p>Salle : <span>A625</span></p>
              </li>
              <li className={styles.map__marker__contentList__item}>
                <p>Places : <span>12 libres / 20</span></p>
              </li>
            </ul>
            <button className={styles.map__marker__btn}>
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99967 0.666992V3.33366H15.7863L0.333008 18.787L2.21301 20.667L17.6663 5.21366V14.0003H20.333V0.666992H6.99967Z" fill="white"/>
              </svg>
            </button>
            <svg className={styles.map__marker__arrowBottom} viewBox="0 0 36 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 17L1.48619e-06 6.67477e-07L36 3.8147e-06L18 17Z" fill="black"/>
            </svg>
          </div>
          <div className={styles.map__marker__slider}>
            <div className={styles.map__marker__slider__pagination}>
              <div className={styles.map__marker__slider__pagination__round+" "+styles.map__marker__slider__pagination__round__selected}></div>
              <div className={styles.map__marker__slider__pagination__round}></div>
              <div className={styles.map__marker__slider__pagination__round}></div>
              <div className={styles.map__marker__slider__pagination__round}></div>
            </div>
            <div className={styles.map__marker}>
              <div className={styles.map__marker__img__wrapper}>
                <Image className={styles.map__marker__img} src={picture}/>
              </div>
              <svg className={styles.map__marker__sound} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3.97V12.02C12.48 11.29 13.5 9.77 13.5 8C13.5 6.23 12.48 4.71 11 3.97ZM0 5V11H4L9 16V0L4 5H0ZM7 4.83V11.17L4.83 9H2V7H4.83L7 4.83Z" fill="white"/>
              </svg>

              <ul className={styles.map__marker__contentList}>
                <li className={styles.map__marker__contentList__item}>
                  <p>Salle : <span>A625</span></p>
                </li>
                <li className={styles.map__marker__contentList__item}>
                  <p>Places : <span>12 libres / 20</span></p>
                </li>
              </ul>
              <button className={styles.map__marker__btn}>
                <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99967 0.666992V3.33366H15.7863L0.333008 18.787L2.21301 20.667L17.6663 5.21366V14.0003H20.333V0.666992H6.99967Z" fill="white"/>
                </svg>
              </button>
              <svg className={styles.map__marker__arrowBottom} viewBox="0 0 36 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 17L1.48619e-06 6.67477e-07L36 3.8147e-06L18 17Z" fill="black"/>
              </svg>
            </div>
            <div className={styles.map__marker}>
              <div className={styles.map__marker__img__wrapper}>
                <Image className={styles.map__marker__img} src={picture}/>
              </div>
              <svg className={styles.map__marker__sound} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3.97V12.02C12.48 11.29 13.5 9.77 13.5 8C13.5 6.23 12.48 4.71 11 3.97ZM0 5V11H4L9 16V0L4 5H0ZM7 4.83V11.17L4.83 9H2V7H4.83L7 4.83Z" fill="white"/>
              </svg>

              <ul className={styles.map__marker__contentList}>
                <li className={styles.map__marker__contentList__item}>
                  <p>Salle : <span>A625</span></p>
                </li>
                <li className={styles.map__marker__contentList__item}>
                  <p>Places : <span>12 libres / 20</span></p>
                </li>
              </ul>
              <button className={styles.map__marker__btn}>
                <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99967 0.666992V3.33366H15.7863L0.333008 18.787L2.21301 20.667L17.6663 5.21366V14.0003H20.333V0.666992H6.99967Z" fill="white"/>
                </svg>
              </button>
              <svg className={styles.map__marker__arrowBottom} viewBox="0 0 36 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 17L1.48619e-06 6.67477e-07L36 3.8147e-06L18 17Z" fill="black"/>
              </svg>
            </div>
            <div className={styles.map__marker}>
              <div className={styles.map__marker__img__wrapper}>
                <Image className={styles.map__marker__img} src={picture}/>
              </div>
              <svg className={styles.map__marker__sound} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3.97V12.02C12.48 11.29 13.5 9.77 13.5 8C13.5 6.23 12.48 4.71 11 3.97ZM0 5V11H4L9 16V0L4 5H0ZM7 4.83V11.17L4.83 9H2V7H4.83L7 4.83Z" fill="white"/>
              </svg>

              <ul className={styles.map__marker__contentList}>
                <li className={styles.map__marker__contentList__item}>
                  <p>Salle : <span>A625</span></p>
                </li>
                <li className={styles.map__marker__contentList__item}>
                  <p>Places : <span>12 libres / 20</span></p>
                </li>
              </ul>
              <button className={styles.map__marker__btn}>
                <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99967 0.666992V3.33366H15.7863L0.333008 18.787L2.21301 20.667L17.6663 5.21366V14.0003H20.333V0.666992H6.99967Z" fill="white"/>
                </svg>
              </button>
              <svg className={styles.map__marker__arrowBottom} viewBox="0 0 36 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 17L1.48619e-06 6.67477e-07L36 3.8147e-06L18 17Z" fill="black"/>
              </svg>
            </div>
            <div className={styles.map__marker}>
              <div className={styles.map__marker__img__wrapper}>
                <Image className={styles.map__marker__img} src={picture}/>
              </div>
              <svg className={styles.map__marker__sound} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3.97V12.02C12.48 11.29 13.5 9.77 13.5 8C13.5 6.23 12.48 4.71 11 3.97ZM0 5V11H4L9 16V0L4 5H0ZM7 4.83V11.17L4.83 9H2V7H4.83L7 4.83Z" fill="white"/>
              </svg>

              <ul className={styles.map__marker__contentList}>
                <li className={styles.map__marker__contentList__item}>
                  <p>Salle : <span>A625</span></p>
                </li>
                <li className={styles.map__marker__contentList__item}>
                  <p>Places : <span>12 libres / 20</span></p>
                </li>
              </ul>
              <button className={styles.map__marker__btn}>
                <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99967 0.666992V3.33366H15.7863L0.333008 18.787L2.21301 20.667L17.6663 5.21366V14.0003H20.333V0.666992H6.99967Z" fill="white"/>
                </svg>
              </button>
              <svg className={styles.map__marker__arrowBottom} viewBox="0 0 36 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 17L1.48619e-06 6.67477e-07L36 3.8147e-06L18 17Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
