import { useEffect, useState } from 'react';
import style from '../../assets/css/header/cartBox.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from '../../store/action/country';
import { DeleteProductCart } from '../../functions/addToCart';
import { useTranslation } from 'react-i18next';

export default function CartBox() {
    let { t } = useTranslation()
    let [qty, setQty] = useState(1);
    const { cart } = useSelector(state => state.countries)
    let len = cart.length
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartData())
    }, [cart]);
    return (
        <div className={style.container}>
            <div className={style.cartBoxContainer}>
                <div className={style.cartHead}>
                    <div className={style.productAmount}>
                        <span className={style.itemInCart}><b>{len}</b>{t('Items in Cart')}</span>
                        <div className={style.itemSubtotal}>
                            <span>{t('Cart Subtotal:')}</span>
                            <span className={style.subtotal}>{t('LBP')} 1,000,000</span>
                        </div>
                    </div>
                    <Link to='/checkout'>
                        <button className={style.checkoutBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 15 20">
                                <path id="Path_1818" data-name="Path 1818" d="M78.583,7.5h-1.25V5.833a5.833,5.833,0,0,0-11.667,0V7.5h-1.25A.416.416,0,0,0,64,7.917V18.333A1.668,1.668,0,0,0,65.667,20H77.333A1.668,1.668,0,0,0,79,18.333V7.917A.416.416,0,0,0,78.583,7.5Zm-5.836,8.7a.417.417,0,0,1-.414.463H70.667a.417.417,0,0,1-.414-.463l.263-2.364a1.648,1.648,0,0,1-.682-1.34,1.667,1.667,0,0,1,3.333,0,1.648,1.648,0,0,1-.682,1.34Zm2.086-8.7H68.167V5.833a3.333,3.333,0,0,1,6.667,0Z" transform="translate(-64)" fill="#fff" />
                            </svg>{t('Proceed to Checkout')}
                        </button>
                    </Link>
                </div>
                <div className={style.cartBody}>
                    {cart.map((product, index) => {
                        return (
                            <div className={style.cartItem} key={index}>
                                <img src={product.img} alt='card item' />
                                <div className={style.cartItemDetail}>
                                    <span className={style.productName}>{t(product.title)}</span>
                                    <span className={style.productAuth}>{t(product.auth)}</span>
                                    <span className={style.productGlobal}>{t('View Details')}</span>
                                    <span className={style.productNational}>{t('LBP')} {product.price}</span>
                                    <div className={style.quantity}>
                                        <button>
                                            <span onClick={() => { setQty(--qty) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="1.75" viewBox="0 0 14 1.75">
                                                    <g id="ic-minus-menu" transform="translate(-4 -10.125)">
                                                        <path id="Line_17" data-name="Line 17" d="M12.125.75H-.125A.875.875,0,0,1-1-.125.875.875,0,0,1-.125-1h12.25A.875.875,0,0,1,13-.125.875.875,0,0,1,12.125.75Z" transform="translate(5 11.125)" fill="#333f48" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span className={style.qty}>{qty}</span>
                                            <span onClick={() => { setQty(++qty) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                    <g id="ic-plus" transform="translate(-4 -4)">
                                                        <path id="Line_16" data-name="Line 16" d="M-.125,13A.875.875,0,0,1-1,12.125V-.125A.875.875,0,0,1-.125-1,.875.875,0,0,1,.75-.125v12.25A.875.875,0,0,1-.125,13Z" transform="translate(11.125 5)" fill="#333f48" />
                                                        <path id="Line_17" data-name="Line 17" d="M12.125.75H-.125A.875.875,0,0,1-1-.125.875.875,0,0,1-.125-1h12.25A.875.875,0,0,1,13-.125.875.875,0,0,1,12.125.75Z" transform="translate(5 11.125)" fill="#333f48" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </button>
                                        <span className={style.updateBtn}>
                                            <svg className={style.editBtn} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                <g id="pencil" transform="translate(-1.25 -1.25)">
                                                    <path id="Line_46" data-name="Line 46" d="M2.564,3.087a.522.522,0,0,1-.37-.153L-.6.143A.523.523,0,0,1-.6-.6a.523.523,0,0,1,.74,0L2.934,2.194a.523.523,0,0,1-.37.893Z" transform="translate(13.163 2)" fill="#72797e" />
                                                    <path id="Path_6018" data-name="Path 6018" d="M1.773,17.157a.523.523,0,0,1-.5-.661l1.047-3.837a.523.523,0,0,1,.135-.232L10.473,4.4a.523.523,0,0,1,.74,0L14,7.194a.523.523,0,0,1,0,.74L5.98,15.957a.523.523,0,0,1-.232.135L1.911,17.139A.523.523,0,0,1,1.773,17.157Zm1.515-4.089-.769,2.82,2.82-.769,7.555-7.555L10.843,5.513Z" transform="translate(0 -0.907)" fill="#72797e" />
                                                </g>
                                            </svg>
                                            <svg onClick={() => { DeleteProductCart(product.id, index) }} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                                <g id="trash-2" transform="translate(-29 4.998)">
                                                    <path id="Union_10" data-name="Union 10" d="M3.407,15a1.95,1.95,0,0,1-1.972-1.92V3.84H.541a.543.543,0,0,1-.381-.154A.507.507,0,0,1,0,3.314a.532.532,0,0,1,.539-.521H3.588V1.92A1.952,1.952,0,0,1,5.563,0H8.437a1.949,1.949,0,0,1,1.972,1.92v.873h3.053A.533.533,0,0,1,14,3.314V3.32a.53.53,0,0,1-.539.52h-.9v9.24A1.95,1.95,0,0,1,10.588,15Zm-.892-1.92a.884.884,0,0,0,.892.875h7.181a.888.888,0,0,0,.9-.875V3.84H9.872a.583.583,0,0,1-.06,0H4.186c-.021,0-.039,0-.06,0H2.514ZM9.333,2.793V1.92a.885.885,0,0,0-.9-.871H5.563a.889.889,0,0,0-.9.871v.873ZM7.9,10.988V6.8a.538.538,0,0,1,1.075,0v4.184a.538.538,0,0,1-1.075,0Zm-2.872,0V6.8A.539.539,0,0,1,6.1,6.8v4.184a.539.539,0,0,1-1.077,0Z" transform="translate(29 -4.998)" fill="#72797e" />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <Link to='/cart' className={style.viewDetail}>
                    {t('View and Edit Cart')}
                </Link>
            </div>
        </div>
    )
}
