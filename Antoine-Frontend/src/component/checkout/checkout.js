import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import style from '../../assets/css/main/checkout.module.css'
import { getCartData } from '../../store/action/country';
import Payment from './payment';
import Shipping from './shipping';
export default function Checkout() {
    const [check, setCheck] = useState(false);

    const [isShipping, setisShipping] = useState(true);
    const { cart } = useSelector(state => state.countries)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartData())
    }, []);
    return (
        <div className={style.checkoutPage}>
            <div className={style.checkoutHeader}>
                <div className={style.line}></div>
                <div className={style.container}>
                    <div className={style.styleheader}>
                        <Link to='/' className={style.logo}>
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
                            <div className={style.logoLine}></div>
                        </Link>
                        <span className={style.securityIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.825" height="23" viewBox="0 0 18.825 23">
                                <g id="secure-payment" transform="translate(-32.499 0)">
                                    <path id="Path_406" data-name="Path 406" d="M134.638,131.536a.808.808,0,0,0-.568-.234.8.8,0,0,0-.568.234l-2.811,2.811-.971-.971a.8.8,0,0,0-1.135,1.136l1.538,1.539a.8.8,0,0,0,.567.233h0a.8.8,0,0,0,.568-.233l3.379-3.379A.8.8,0,0,0,134.638,131.536Z" transform="translate(-89.695 -122.868)" fill="#333f48" />
                                    <path id="Path_407" data-name="Path 407" d="M51.286,4.74a.417.417,0,0,0-.233-.339L42.094.042a.417.417,0,0,0-.365,0L32.77,4.4a.417.417,0,0,0-.233.339,23.068,23.068,0,0,0,.721,7.088,19,19,0,0,0,2.668,6.008,15.717,15.717,0,0,0,5.793,5.117.418.418,0,0,0,.385,0A15.717,15.717,0,0,0,47.9,17.836a19,19,0,0,0,2.668-6.008A23.069,23.069,0,0,0,51.286,4.74ZM41.911,16.168a5.311,5.311,0,1,1,5.311-5.311A5.317,5.317,0,0,1,41.911,16.168Z" fill="#000000" />
                                </g>
                            </svg>
                            {t(' Secure Checkout')}
                        </span>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.checkoutSvg}>
                    <div className={style.review} onClick={() => { setisShipping(!isShipping); setCheck(!check) }}>
                        <div className={style.reviewSvg}>
                            <div className={`${check ? style.checked : ''} ${style.svgLine}`} ></div>
                            <div className={`${style.reviewItem} ${check ? style.checkedBorder : ''} `}>&#10003;</div>
                            <div className={`${check ? style.checked : ''} ${style.svgLine}`} ></div>
                        </div>
                        <div className={`${!check ? style.reviewTitle : style.reviewTitleActive}`}>{t('Shipping')}</div>
                    </div>
                    <div className={style.review} onClick={() => { setisShipping(!isShipping); setCheck(!check) }}>
                        <div className={style.reviewSvg}>
                            <div className={`${!check ? style.checked : ''} ${style.svgLine}`} ></div>
                            <div className={`${style.reviewItem} ${!check ? style.checkedBorder : ''} `}>1</div>
                            <div className={`${!check ? style.checked : ''} ${style.svgLine}`}></div>
                        </div>
                        <div className={`${check ? style.reviewTitle : style.reviewTitleActive}`}>{t('Review & Payments')}</div>
                    </div>
                </div>
                {isShipping ? <Shipping cart={cart} setisShipping={setisShipping} isShipping={isShipping} check={check} setCheck={setCheck} /> : <Payment cart={cart} />}
                {/* <button onClick={() => { setCheck(!check) }}>click</button> */}
            </div>
            <div className={style.bottomFooter}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="70" viewBox="0 0 85 70">
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
                </div>
                <p>{t('Copyright 2013-2021 - Antoine Online - All Rights Reserved')} </p>
                <p>{t('Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.')}</p>
            </div>
        </div>
    )
}
