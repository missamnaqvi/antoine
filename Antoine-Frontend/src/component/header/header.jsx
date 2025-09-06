import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcountry, getMegaMenu, getMenu } from '../../store/action/country'
import EndHeader from './endHeader'
import MidHeader from './midHeader'
import TopHeader from './topHeader'

import style from '../../assets/css/header/header.module.css'
import i18next from 'i18next'

export default function Header() {
    const { menu, country } = useSelector(state => state.countries)
    const { megamenu } = useSelector(state => state.productListingSlice)
    const language = [
        {
            code: "en",
            name: "English"
        },
        {
            code: "lab",
            name: "Lebanon",
            dir: "rtl"
        }
    ]

    const handleClick = (e) => {
        i18next.changeLanguage(e.target.value)
    }


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getcountry())
        dispatch(getMenu())
        dispatch(getMegaMenu())
    }, []);
    return (
        <header className={style.header}>
            <TopHeader country={country} language={language} onChange={(e) => { handleClick(e) }} />
            <MidHeader country={country} menu={menu} megamenu={megamenu} />
            <EndHeader menu={menu} megamenu={megamenu} />
        </header>
    )
}
