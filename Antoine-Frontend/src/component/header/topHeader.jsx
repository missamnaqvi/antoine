import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import style from '../../assets/css/header/header.module.css'
import flag from '../../assets/images/lebonan.png'
export default function TopHeader({ country, language, onChange }) {
    let {t}=useTranslation()
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.topcontent}>
                    <div className={style.topleft}>
                        <div className={style.triangle}></div>
                        <ul className={style.topleftlist}>
                            <li className={style.list}>
                                <div>
                                    <select className={style.country} name="country" id="country">
                                        {country.map((item, index) =>
                                            <option key={index} style={{ backgroundImage: `url(${flag})` }}>
                                                {t(item.name)}
                                            </option>
                                        )
                                        }
                                    </select>
                                </div>
                            </li>
                            <div className={style.pipe}></div>
                            <li className={style.list}>
                                <div>
                                    <select className={style.country} name="country" id="country" onChange={onChange} value={i18next.language}>
                                        {language.map(({ name, code, index }) => {
                                            return (
                                                <option value={code} key={index}>{t(name)}</option>
                                            )
                                        })
                                        }
                                    </select>
                                </div>
                            </li>
                            <div className={style.pipe}></div>
                            {/* 
                            <li className={style.list}>
                                <div>
                                    <select className={style.country} name="country" id="country">
                                        {
                                            country.map((item, index) => {
                                                return (
                                                    <option value={item.currency} key={index}>{item.currency}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </li> */}
                            <div className={style.pipe}></div>

                            <li className={style.list}>
                                <div className={style.storeLocat}>
                                    {t('STORE LOCATOR')}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={style.topright}>
                        <ul className={style.toprightlist}>
                            <li className={style.accountlist}>
                                <div className={style.account}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.5 20">
                                        <defs><style></style></defs>
                                        <path className="a" d="M12.25,11.875c-1.121,0-1.66.625-3.5.625s-2.375-.625-3.5-.625A5.251,5.251,0,0,0,0,17.125v1A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125v-1A5.251,5.251,0,0,0,12.25,11.875Zm3.375,6.25H1.875v-1A3.381,3.381,0,0,1,5.25,13.75a15.294,15.294,0,0,0,3.5.625,15.147,15.147,0,0,0,3.5-.625,3.381,3.381,0,0,1,3.375,3.375ZM8.75,11.25A5.625,5.625,0,1,0,3.125,5.625,5.626,5.626,0,0,0,8.75,11.25Zm0-9.375A3.75,3.75,0,1,1,5,5.625,3.756,3.756,0,0,1,8.75,1.875Z" fill="#fff" />
                                    </svg>
                                    <select className={style.country} name="country" id="country">
                                        {country.map((item, index) => {
                                            return (<option value={item.currency} key={index}>{t('MY ACCOUNT')}</option>)
                                        })}
                                    </select>
                                </div>
                            </li>
                            <li className={style.wishlistli}>
                                <Link className={style.wishlistlink} to='/whishlist'>
                                    <div className={style.wishlist}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12">
                                            <path id="ic_wish-list" d="M4.779,1.992A3.775,3.775,0,0,1,7.456,3.121l.036.037.034-.035a3.738,3.738,0,0,1,5.356,0,3.863,3.863,0,0,1,1.109,2.828,4.6,4.6,0,0,1-1.354,3.066l0,0-4.724,4.8a.584.584,0,0,1-.835,0l-4.724-4.8,0,0A4.6,4.6,0,0,1,.993,5.949,3.863,3.863,0,0,1,2.1,3.12,3.775,3.775,0,0,1,4.779,1.992Zm2.713,2.62a.586.586,0,0,1-.42-.178l-.455-.468a2.57,2.57,0,0,0-3.679,0A2.665,2.665,0,0,0,2.174,5.92,3.357,3.357,0,0,0,3.188,8.172l4.3,4.372,4.3-4.372A3.357,3.357,0,0,0,12.81,5.92a2.665,2.665,0,0,0-.764-1.951,2.57,2.57,0,0,0-3.681,0l-.453.466A.586.586,0,0,1,7.492,4.612Z" transform="translate(-0.992 -1.992)" fill="#fff" />
                                        </svg>
                                        <div className={style.wishlistTitle}>{t('WISHLIST')}</div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.offer}>
                    <p>50% Off Hundreds of The Biggest Books</p>
                </div>
            </div>
        </div>
    )
}
