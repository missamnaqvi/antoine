import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive';
import style from '../../assets/css/header/cart.module.css'
import { getCartData } from '../../store/action/country';
import Danser from '../../assets/images/Danser.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function Cart() {
    let { t } = useTranslation()
    const { cart } = useSelector(state => state.countries)
    const dispatch = useDispatch()
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [isAddress, setIsAddress] = useState(true);
    const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedState('');
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };
    const countryOptions = [
        { label: 'Select a country', value: '' },
        { label: 'INDIA', value: 'INDIA' },
        { label: 'Canada', value: 'canada' },
    ];
    const stateOptions = {
        Default: [
            { label: 'Select a state', value: '' }
        ],
        INDIA: [
            { label: 'Select a state', value: '' },
            { label: 'Gujarat', value: 'Gujarat' },
            { label: 'Goa', value: 'Goa' },
            { label: 'Punjab', value: 'Punjab' },
        ],
        canada: [
            { label: 'Select a province', value: '' },
            { label: 'Ontario', value: 'on' },
            { label: 'Quebec', value: 'qc' },
            { label: 'British Columbia', value: 'bc' },
        ]
    };
    // console.log('cart data', cart);
    useEffect(() => {
        dispatch(getCartData())
    }, []);
    return (
        <div className={style.container}>
            {/* <div className={style.cartBox}> */}

            <div className={style.cartTitle}>
                <span className={style.title}>{t('Shopping Cart')}</span>
                <span className={style.subTitle}>{t('You have 5 items in cart.')}</span>
            </div>
            <div className={style.cartBody}>
                <div className={style.left}>
                    {!isMobile ?
                        <div className={style.tableContainer}>
                            <table className={style.table}>
                                <thead>
                                    <tr>
                                        <th className={style.prodDesc}>{t('Product Description')}</th>
                                        <th>{t('Price')}</th>
                                        <th>{t('QTY')}</th>
                                        <th className={style.subTotalColumn}>{t('Subtotal')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((cartItem, index) => {
                                        return (
                                            <><tr key={index}>
                                                <td>
                                                    <div className={style.productDetail}>
                                                        <div className={style.productImg}>
                                                            <img className={style.cartImg} src={`${cartItem.img}`} alt='Trending book' />
                                                        </div>
                                                        <div className={style.productDesc}>
                                                            <span className={style.productName}>{t(cartItem.title)}</span>
                                                            <span className={style.productAuth}>{t(cartItem.auth)}</span>
                                                            <span className={style.productGlobal}>{t('For International: 1-2 days')}</span>
                                                            <span className={style.productNational}>{t('For Lebanon: 6-8 days')}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={style.price} >{t('LBP')} {cartItem.price}</td>
                                                <td><div className={style.qtyBtn}><span>-</span><span>{cartItem.qty}</span><span>+</span></div></td>
                                                <td className={style.subTotalPrice}>{t('LBP')} {cartItem.price}</td>
                                            </tr>
                                                <tr className={style.buttons}>
                                                    <td colSpan={5}>
                                                        <span className={style.wishlist}>{t('Move to Wishlist')}</span>
                                                        <svg className={style.editBtn} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                            <g id="pencil" transform="translate(-1.25 -1.25)">
                                                                <path id="Line_46" data-name="Line 46" d="M2.564,3.087a.522.522,0,0,1-.37-.153L-.6.143A.523.523,0,0,1-.6-.6a.523.523,0,0,1,.74,0L2.934,2.194a.523.523,0,0,1-.37.893Z" transform="translate(13.163 2)" fill="#72797e" />
                                                                <path id="Path_6018" data-name="Path 6018" d="M1.773,17.157a.523.523,0,0,1-.5-.661l1.047-3.837a.523.523,0,0,1,.135-.232L10.473,4.4a.523.523,0,0,1,.74,0L14,7.194a.523.523,0,0,1,0,.74L5.98,15.957a.523.523,0,0,1-.232.135L1.911,17.139A.523.523,0,0,1,1.773,17.157Zm1.515-4.089-.769,2.82,2.82-.769,7.555-7.555L10.843,5.513Z" transform="translate(0 -0.907)" fill="#72797e" />
                                                            </g>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                                            <g id="trash-2" transform="translate(-29 4.998)">
                                                                <path id="Union_10" data-name="Union 10" d="M3.407,15a1.95,1.95,0,0,1-1.972-1.92V3.84H.541a.543.543,0,0,1-.381-.154A.507.507,0,0,1,0,3.314a.532.532,0,0,1,.539-.521H3.588V1.92A1.952,1.952,0,0,1,5.563,0H8.437a1.949,1.949,0,0,1,1.972,1.92v.873h3.053A.533.533,0,0,1,14,3.314V3.32a.53.53,0,0,1-.539.52h-.9v9.24A1.95,1.95,0,0,1,10.588,15Zm-.892-1.92a.884.884,0,0,0,.892.875h7.181a.888.888,0,0,0,.9-.875V3.84H9.872a.583.583,0,0,1-.06,0H4.186c-.021,0-.039,0-.06,0H2.514ZM9.333,2.793V1.92a.885.885,0,0,0-.9-.871H5.563a.889.889,0,0,0-.9.871v.873ZM7.9,10.988V6.8a.538.538,0,0,1,1.075,0v4.184a.538.538,0,0,1-1.075,0Zm-2.872,0V6.8A.539.539,0,0,1,6.1,6.8v4.184a.539.539,0,0,1-1.077,0Z" transform="translate(29 -4.998)" fill="#72797e" />
                                                            </g>
                                                        </svg>
                                                    </td>
                                                </tr>
                                            </>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                        :
                        cart.map((cardItem, index) => {
                            return (
                                <>
                                    <div className={style.cardItems} key={index}>
                                        <div className={style.top}>
                                            <div className={style.productImg}>
                                                <img src={Danser} className={style.cartImg} alt='product' />
                                            </div>
                                            <div className={style.productDesc}>
                                                <span className={style.productName}>{t(cardItem.title)}</span>
                                                <span className={style.productAuth}>{t('Campisi, Megan')}</span>
                                                <span className={style.productGlobal}>{t('For International: 1-2 days')}</span>
                                                <span className={style.productNational}>{t('For Lebanon: 6-8 days')}</span>
                                            </div>
                                        </div>
                                        <div className={style.bottom}>
                                            <div className={style.price}>
                                                <span>{t('Price')}</span>
                                                <span>LBP 40000</span>
                                            </div>
                                            <div className={style.qtyContent}>
                                                <span>QTY</span>
                                                <button className={style.qtyBtn}><span>-</span><span className={style.qtyCount}>1</span><span>+</span></button>
                                            </div>
                                            <div className={style.subTotalPrice}><span>{t('Subtotal')}</span><span>LBP 40000</span></div>
                                        </div>
                                        <div className={style.buttons}>
                                            <div colSpan={5}>
                                                <span className={style.wishlist}>{t('Move to Wishlist')}</span>
                                                <svg className={style.editBtn} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                    <g id="pencil" transform="translate(-1.25 -1.25)">
                                                        <path id="Line_46" data-name="Line 46" d="M2.564,3.087a.522.522,0,0,1-.37-.153L-.6.143A.523.523,0,0,1-.6-.6a.523.523,0,0,1,.74,0L2.934,2.194a.523.523,0,0,1-.37.893Z" transform="translate(13.163 2)" fill="#72797e" />
                                                        <path id="Path_6018" data-name="Path 6018" d="M1.773,17.157a.523.523,0,0,1-.5-.661l1.047-3.837a.523.523,0,0,1,.135-.232L10.473,4.4a.523.523,0,0,1,.74,0L14,7.194a.523.523,0,0,1,0,.74L5.98,15.957a.523.523,0,0,1-.232.135L1.911,17.139A.523.523,0,0,1,1.773,17.157Zm1.515-4.089-.769,2.82,2.82-.769,7.555-7.555L10.843,5.513Z" transform="translate(0 -0.907)" fill="#72797e" />
                                                    </g>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                                    <g id="trash-2" transform="translate(-29 4.998)">
                                                        <path id="Union_10" data-name="Union 10" d="M3.407,15a1.95,1.95,0,0,1-1.972-1.92V3.84H.541a.543.543,0,0,1-.381-.154A.507.507,0,0,1,0,3.314a.532.532,0,0,1,.539-.521H3.588V1.92A1.952,1.952,0,0,1,5.563,0H8.437a1.949,1.949,0,0,1,1.972,1.92v.873h3.053A.533.533,0,0,1,14,3.314V3.32a.53.53,0,0,1-.539.52h-.9v9.24A1.95,1.95,0,0,1,10.588,15Zm-.892-1.92a.884.884,0,0,0,.892.875h7.181a.888.888,0,0,0,.9-.875V3.84H9.872a.583.583,0,0,1-.06,0H4.186c-.021,0-.039,0-.06,0H2.514ZM9.333,2.793V1.92a.885.885,0,0,0-.9-.871H5.563a.889.889,0,0,0-.9.871v.873ZM7.9,10.988V6.8a.538.538,0,0,1,1.075,0v4.184a.538.538,0,0,1-1.075,0Zm-2.872,0V6.8A.539.539,0,0,1,6.1,6.8v4.184a.539.539,0,0,1-1.077,0Z" transform="translate(29 -4.998)" fill="#72797e" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className={style.cartFooter}>
                        <div className={style.cartFooterTop}>
                            <select>
                                <option>{t('Gift Options')}</option>
                            </select>
                            <select>
                                <option>{t('Gift Card')}</option>
                            </select>
                        </div>
                        <div className={style.footerBody}>
                            <div className={style.discount}>
                                <input type='text' placeholder={t('Enter discount code')} />
                                <button>{t('Apply Discount')}</button>
                            </div>
                            <div className={style.update}>
                                <span>&lt;{t('Continue Shopping')} </span>
                                <button>{t('Update Cart')}</button>
                            </div>
                        </div>
                        <div className={style.footerEnd}>
                            <span className={style.note}>{t('Note')}:</span>
                            <span className={style.noteDesc}>{t('Upon confirming this order. we will send you an email with an ‘Order You might asked to pay additional duties, taxes, and charges by the upon By placing your order, you that you and agreed to Antoine Terms and Conditions.')}</span>
                        </div>
                    </div>

                </div>
                <div className={style.right}>
                    <div className={style.cartContainer}>
                        <div className={style.summary}>{t('Summary')}</div>
                        <div className={style.chargeAndText}>
                            <span>{t('Estimate Shipping Charges and Tax')}</span>
                            <span onClick={() => { setIsAddress(!isAddress) }}>
                                <svg className={isAddress ? style.svgRotate : ''} xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                                    <path id="arrow-dropdown-wt" d="M.75,10a.767.767,0,0,0,.53-.209l4.5-4.286a.69.69,0,0,0,0-1.01L1.28.209A.777.777,0,0,0,.22.209a.691.691,0,0,0,0,1.01L4.189,5,.22,8.781a.69.69,0,0,0,0,1.01A.767.767,0,0,0,.75,10Z" transform="translate(10) rotate(90)" fill="#000" />
                                </svg>
                            </span>
                        </div>
                        {isAddress ?
                            <div className={style.address}>
                                <div className={style.country}>
                                    <div className={style.countryTitle}>{t('Country')}</div>
                                    <select className={style.select} value={t(selectedCountry)} onChange={handleCountryChange}>
                                        {countryOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {t(option.label)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={style.country}>
                                    <div className={style.countryTitle}>{t('State/Province')}</div>
                                    {(
                                        <select className={style.select} value={selectedState} onChange={handleStateChange}>
                                            {stateOptions[`${selectedCountry ? selectedCountry : 'Default'}`].map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {t(option.label)}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                                <div className={style.zipcode}>
                                    <div className={style.countryTitle}>{t('Zip/Postal Code')}</div>
                                    <input type='text' className={style.zipcodeInput}></input>
                                </div>
                            </div>
                            : ''
                        }
                        <div className={style.bill}>
                            <div>
                                <span>{t('SubTotal')}</span>
                                <span>{t('LBP')} 1,100,000</span>
                            </div>
                            <div>
                                <span>{t('Total Shipping Charges')}</span>
                                <span>{t('LBP')} 20,000</span>
                            </div>
                            <div className={style.tax}>
                                <span>{t('Tax')}</span>
                                <span>{t('LBP')} 20,000</span>
                            </div>

                        </div>
                        <div className={style.orderTotal}>
                            <span>{t('Order Total')}</span>
                            <span>{t('LBP')} 1,140,000</span>
                        </div>
                        <Link className={style.checkoutLink} to='/checkout'>
                            <button className={style.checkoutBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20">
                                    <path id="Path_1818" data-name="Path 1818" d="M78.583,7.5h-1.25V5.833a5.833,5.833,0,0,0-11.667,0V7.5h-1.25A.416.416,0,0,0,64,7.917V18.333A1.668,1.668,0,0,0,65.667,20H77.333A1.668,1.668,0,0,0,79,18.333V7.917A.416.416,0,0,0,78.583,7.5Zm-5.836,8.7a.417.417,0,0,1-.414.463H70.667a.417.417,0,0,1-.414-.463l.263-2.364a1.648,1.648,0,0,1-.682-1.34,1.667,1.667,0,0,1,3.333,0,1.648,1.648,0,0,1-.682,1.34Zm2.086-8.7H68.167V5.833a3.333,3.333,0,0,1,6.667,0Z" transform="translate(-64)" fill="#fff" />
                                </svg>
                                {t('Proceed To Checkout')}</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
