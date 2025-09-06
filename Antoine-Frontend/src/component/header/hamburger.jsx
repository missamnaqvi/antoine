import { useState } from 'react';
// import ReactFlagsSelect from 'react-flags-select';
import style from '../../assets/css/header/header.module.css'
import MegamenuMobile from '../main/megamenuMobile';
import rightArrow from '../../assets/images/icons8-left-arrow-48.png'
import { useTranslation } from 'react-i18next';


export default function Hamburger({ menu, country, megamenu, setIsActive }) {
    let {t}=useTranslation()
    const [isActive, setisActive] = useState(false);
    const [isMegamenu, setMegamenu] = useState(false);
    // const [select, setSelect] = useState("LB");
    // const onSelect = (code) => setSelect(code);
    // console.log('menu from hamburger', menu);
    return (
        <div className={style.hamburgerContent}>
            {!isMegamenu ?
                <div>
                    <div className={style.tab}>
                        <img src={rightArrow} className={style.backarrow} onClick={() => { setIsActive(false) }} style={{ height: '16px' }} alt="" />
                        <button onClick={() => { setisActive(!isActive) }} className={isActive ? style.isactive : ''}>Menu
                            {!isActive ? <svg xmlns="http://www.w3.org/2000/svg" width="160" height="8" viewBox="0 0 160 8">
                                <path id="Menu-dropdown" d="M1262,60h-74V58h160v2h-74l-6,6Z" transform="translate(-1188 -58)" fill="#333f48" />
                            </svg> : ''}
                        </button>
                        <button onClick={() => { setisActive(!isActive) }} className={!isActive ? style.isactive : ''}>My Account
                            {isActive ? <svg xmlns="http://www.w3.org/2000/svg" width="160" height="8" viewBox="0 0 160 8">
                                <path id="Menu-dropdown" d="M1262,60h-74V58h160v2h-74l-6,6Z" transform="translate(-1188 -58)" fill="#333f48" />
                            </svg> : ''}
                        </button>
                    </div>
                    {isActive ?
                        <ul>
                            <li>SIGN IN</li>
                            <li>CREATE ACCOUNT</li>
                            <li>My Account</li>
                        </ul>
                        :
                        <>
                            <ul>
                                {menu.map((menuItem, index) => {
                                    return (<>
                                        {index === 0 ?
                                            <><li onClick={() => { setMegamenu(!isMegamenu) }}>{menuItem}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12">
                                                    <path id="ic-rightarrow" d="M8.875,17a.882.882,0,0,0,.619-.251l5.25-5.143a.845.845,0,0,0,0-1.212L9.494,5.251a.888.888,0,0,0-1.237,0,.845.845,0,0,0,0,1.212L12.888,11,8.256,15.537a.845.845,0,0,0,0,1.212A.882.882,0,0,0,8.875,17Z" transform="translate(-8 -5)" fill="#333f48" />
                                                </svg>
                                            </li></>
                                            : <li>{menuItem}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12">
                                                    <path id="ic-rightarrow" d="M8.875,17a.882.882,0,0,0,.619-.251l5.25-5.143a.845.845,0,0,0,0-1.212L9.494,5.251a.888.888,0,0,0-1.237,0,.845.845,0,0,0,0,1.212L12.888,11,8.256,15.537a.845.845,0,0,0,0,1.212A.882.882,0,0,0,8.875,17Z" transform="translate(-8 -5)" fill="#333f48" />
                                                </svg>
                                            </li>
                                        }</>)
                                })}
                            </ul>
                            <select className={style.country} name="country" id="country">
                                {country.map((item, index) =>
                                    <option key={index} >
                                        {item.name}
                                    </option>
                                )}
                            </select>
                            <select className={style.country} name="country" id="country">
                                {country.map((item, index) => {
                                    return (
                                        <option value="volvo" key={index}>{item.lang}</option>
                                    )
                                })}
                            </select>
                            <select className={style.country} name="country" id="country">
                                {
                                    country.map((item, index) => {
                                        return (
                                            <option value={item.currency} key={index}>{item.currency}</option>
                                        )
                                    })
                                }
                            </select>
                            <select className={style.country}>
                                <option>STORE LOCATOR</option>
                            </select>
                        </>
                    }
                </div> :
                <MegamenuMobile megamenu={megamenu} setMegamenu={setMegamenu} isMegamenu={isMegamenu} />}
        </div >
    )
}
