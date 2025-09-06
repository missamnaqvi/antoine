import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import style from '../../assets/css/header/header.module.css'
import CartBox from '../main/CartBox';
import Hamburger from './hamburger';
export default function MidHeader({ country, menu, megamenu }) {
    const [isActive, setIsActive] = useState(false);
    let [iscart, setIscart] = useState(false);
    let { t } = useTranslation()
    return (
        <div className={style.midHeader}>
            <div className={style.container}>
                <div className={style.midContent}>
                    <div className={style.hamburger}>
                        <svg onClick={() => { setIsActive(!isActive) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" ><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg>
                        {isActive ? <Hamburger menu={menu} country={country} megamenu={megamenu} setIsActive={setIsActive} /> : ''}
                    </div>
                    <div className={style.location}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20">
                            <g id="Location" transform="translate(-2)">
                                <path id="Path_6016" data-name="Path 6016" d="M10.5,0A8.427,8.427,0,0,1,19,8.333a9.381,9.381,0,0,1-1.3,4.553,17.663,17.663,0,0,1-2.759,3.625,25.678,25.678,0,0,1-3.971,3.349.864.864,0,0,1-.943,0,25.678,25.678,0,0,1-3.971-3.349A17.663,17.663,0,0,1,3.3,12.886,9.381,9.381,0,0,1,2,8.333,8.427,8.427,0,0,1,10.5,0Zm0,18.142c1.612-1.173,6.8-5.3,6.8-9.809a6.742,6.742,0,0,0-6.8-6.667A6.742,6.742,0,0,0,3.7,8.333C3.7,12.844,8.888,16.969,10.5,18.142Z" />
                                <path id="Ellipse_34" data-name="Ellipse 34" d="M2.4-1A3.371,3.371,0,0,1,5.8,2.333,3.371,3.371,0,0,1,2.4,5.667,3.371,3.371,0,0,1-1,2.333,3.371,3.371,0,0,1,2.4-1Zm0,5A1.685,1.685,0,0,0,4.1,2.333,1.685,1.685,0,0,0,2.4.667,1.685,1.685,0,0,0,.7,2.333,1.685,1.685,0,0,0,2.4,4Z" transform="translate(8.1 6)" />
                            </g>
                        </svg>
                    </div>
                    <div className={style.logoWrapper}>
                        <Link to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" className={style.svgLogo} viewBox="0 0 85 70">
                                <g id="AA-logo" transform="translate(-214.748 -334.386)">
                                    <path id="Path_5374" data-name="Path 5374" d="M289.7,379.315l-17.048-44.929H262.365L245.06,379.315h10.152l2.883-8.057c5.236-6.59,10.725,2.871,18.4,0l2.8,8.057Zm-28.29-17.369,5.939-16.486h.13l5.748,16.486Z" transform="translate(-12.586)" />
                                    <rect id="Rectangle_1826" data-name="Rectangle 1826" width="9.81" height="9.738" transform="translate(282.477 369.577)" />
                                    <g id="Group_4885" data-name="Group 4885" transform="translate(269.241 384.874)">
                                        <path id="Path_5375" data-name="Path 5375" d="M307.935,421.751v3.48h1.709v-3.48Z" transform="translate(-307.935 -421.751)" />
                                    </g>
                                    <path id="Path_5376" data-name="Path 5376" d="M224.086,422.712h-1.724l-7.614,18.656h2s2.146-5.328,2.32-5.756h8.213c.169.431,2.289,5.756,2.289,5.756h2Zm-4.37,11.217c.332-.829,3.008-7.524,3.525-8.825.505,1.307,3.077,8,3.394,8.825Z" transform="translate(0 -37.282)" />
                                    <g id="Group_4886" data-name="Group 4886" transform="translate(233.225 390.146)">
                                        <path id="Path_5377" data-name="Path 5377" d="M248.052,433.335v-2.16h-1.708v13.639h1.708v-7.347c0-3.058,1.7-5.033,4.341-5.033,3,0,3.348,2.2,3.348,3.852v8.528h1.708v-8.35c0-1.381,0-5.591-5.032-5.591A5.16,5.16,0,0,0,248.052,433.335Z" transform="translate(-246.344 -430.873)" />
                                    </g>
                                    <g id="Group_4887" data-name="Group 4887" transform="translate(245.78 386.436)">
                                        <path id="Path_5378" data-name="Path 5378" d="M270.238,424.454v4.011h-2.423v1.558h2.423v8.644c-.005.085-.007.158-.007.239a3.148,3.148,0,0,0,.839,2.4,4.366,4.366,0,0,0,3.356.8l.346-.027v-1.556l-.378.014c-.988.028-1.672-.021-2.034-.37a2.047,2.047,0,0,1-.413-1.5v-8.644H274.8v-1.558h-2.853v-4.011Z" transform="translate(-267.815 -424.454)" />
                                    </g>
                                    <path id="Path_5379" data-name="Path 5379" d="M288.186,430.873c-3.762,0-6.382,2.928-6.382,7.116s2.62,7.124,6.382,7.124,6.376-2.934,6.376-7.124S291.937,430.873,288.186,430.873Zm0,12.672c-3.214,0-4.676-2.878-4.676-5.556s1.462-5.555,4.676-5.555,4.669,2.88,4.669,5.555S291.394,443.545,288.186,443.545Z" transform="translate(-27.843 -40.727)" />
                                    <g id="Group_4888" data-name="Group 4888" transform="translate(269.241 390.448)">
                                        <path id="Path_5380" data-name="Path 5380" d="M307.935,431.4v13.638h1.709V431.4Z" transform="translate(-307.935 -431.395)" />
                                    </g>
                                    <g id="Group_4889" data-name="Group 4889" transform="translate(274.058 390.146)">
                                        <path id="Path_5381" data-name="Path 5381" d="M317.88,433.335v-2.16h-1.709v13.639h1.709v-7.347c0-3.058,1.7-5.033,4.338-5.033,3,0,3.351,2.2,3.351,3.852v8.528h1.708v-8.35c0-1.381,0-5.591-5.031-5.591A5.161,5.161,0,0,0,317.88,433.335Z" transform="translate(-316.171 -430.873)" />
                                    </g>
                                    <g id="Group_4890" data-name="Group 4890" transform="translate(287.454 390.146)">
                                        <path id="Path_5382" data-name="Path 5382" d="M349.58,432.569a5.869,5.869,0,0,0-4.348-1.7,5.653,5.653,0,0,0-4.11,1.64,7.894,7.894,0,0,0-2.041,5.707,7.147,7.147,0,0,0,1.887,5.232,5.873,5.873,0,0,0,4.265,1.661,5.646,5.646,0,0,0,6.024-4.982l.07-.425h-1.717l-.053.3a4.14,4.14,0,0,1-4.323,3.542,4.007,4.007,0,0,1-2.959-1.167,5.731,5.731,0,0,1-1.449-3.9h10.521l.016-.349c.006-.165.012-.337.012-.5A7.169,7.169,0,0,0,349.58,432.569Zm-8.706,4.356c.33-2.291,1.84-4.491,4.358-4.491,2.694,0,4.166,2.2,4.355,4.491Z" transform="translate(-339.079 -430.873)" />
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </div>
                    {/* <div className={style.search}> */}
                    <div className={style.searchBar}>
                        <select>
                            <option>{t('All')}</option>
                        </select>
                        <input type='search' placeholder='Search products by title, author, category, brand etc…' />
                        <button >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                <g id="search" transform="translate(-2 -2)">
                                    <path id="Ellipse_33" data-name="Ellipse 33" d="M8.9-1A9.9,9.9,0,1,1-1,8.9,9.911,9.911,0,0,1,8.9-1Zm0,17.6A7.7,7.7,0,1,0,1.2,8.9,7.709,7.709,0,0,0,8.9,16.6Z" transform="translate(3 3)" fill="#fff" />
                                    <path id="Line_1" data-name="Line 1" d="M4.885,5.985a1.1,1.1,0,0,1-.778-.322L-.678.878A1.1,1.1,0,0,1,.878-.678L5.663,4.107a1.1,1.1,0,0,1-.778,1.878Z" transform="translate(18.015 18.015)" fill="#fff" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    {/* </div> */}
                    <div className={style.wishlistBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12">
                            <path id="ic_wish-list" d="M4.779,1.992A3.775,3.775,0,0,1,7.456,3.121l.036.037.034-.035a3.738,3.738,0,0,1,5.356,0,3.863,3.863,0,0,1,1.109,2.828,4.6,4.6,0,0,1-1.354,3.066l0,0-4.724,4.8a.584.584,0,0,1-.835,0l-4.724-4.8,0,0A4.6,4.6,0,0,1,.993,5.949,3.863,3.863,0,0,1,2.1,3.12,3.775,3.775,0,0,1,4.779,1.992Zm2.713,2.62a.586.586,0,0,1-.42-.178l-.455-.468a2.57,2.57,0,0,0-3.679,0A2.665,2.665,0,0,0,2.174,5.92,3.357,3.357,0,0,0,3.188,8.172l4.3,4.372,4.3-4.372A3.357,3.357,0,0,0,12.81,5.92a2.665,2.665,0,0,0-.764-1.951,2.57,2.57,0,0,0-3.681,0l-.453.466A.586.586,0,0,1,7.492,4.612Z" transform="translate(-0.992 -1.992)" />
                        </svg>
                    </div>
                    <div className={style.cart} >
                        {/* <Link to='/cart'> */}
                        <svg onClick={() => { setIscart(!iscart) }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <g id="shopping-cart" transform="translate(0 -0.001)">
                                <path id="Union_4" data-name="Union 4" d="M24,29.217A2.669,2.669,0,1,1,26.666,32,2.728,2.728,0,0,1,24,29.217Zm-14.667,0A2.728,2.728,0,0,1,12,26.436,2.785,2.785,0,0,1,12,32,2.729,2.729,0,0,1,9.334,29.217Zm-.4-8.924L6.708,8.678a.5.5,0,0,1-.022-.115L5.576,2.783H1.335A1.363,1.363,0,0,1,0,1.391,1.359,1.359,0,0,1,1.335,0H6.667a1.343,1.343,0,0,1,1.3,1.115L9.095,6.957H30.666a1.309,1.309,0,0,1,1.029.5,1.435,1.435,0,0,1,.281,1.146L29.844,20.281c-.006.006-.006.006-.006.012a4.043,4.043,0,0,1-3.917,3.359H12.855A4.038,4.038,0,0,1,8.935,20.293Zm2.615-.545a1.345,1.345,0,0,0,1.333,1.121H25.921a1.344,1.344,0,0,0,1.3-1.115L29.052,9.738H9.628Z" transform="translate(0 0.001)" />
                            </g>
                        </svg>
                        {/* </Link> */}
                        <div className={style.cartItem}>1</div>
                        {iscart ? <CartBox /> : ''}
                    </div>
                </div>
            </div>
        </div >
    )
}
