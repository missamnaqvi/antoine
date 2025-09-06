import style from '../../assets/css/checkout/payment.module.css'
import paypal from '../../assets/images/paypal.png'
import masterCard from '../../assets/images/masterCard.png'
import visa from '../../assets/images/visa.png'
import amex from '../../assets/images/amex.png'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function Payment({ cart }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = ({ otp, holdername, cardNo, month, cardType, year }) => {
        console.log(JSON.stringify({ otp, holdername, cardNo, month, cardType, year }));
    };
    const [isProduct, setIsProduct] = useState(false);
    const [billingForm, setBillingForm] = useState(false);
    const startYear = 2025;
    const endYear = 2050;

    const yearOptions = [];
    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push(<option key={year} value={year}>{year}</option>);
    }

    return (
        <div className={style.container}>
            <div className={style.paymentContent}>
                <div className={style.left}>
                    <div className={style.heading}>Reviews & Payment</div>
                    <div className={style.deliveryMethod}>
                        <div className={style.cod}>
                            <input type='radio' className={style.radioCod} name='delivery' value='Cash On Delivery' />
                            <label className={style.labelCod}>Cash On Delivery</label>
                        </div>
                        <div className={style.cardDelivery}>
                            <input type='radio' className={style.radioCod} onChange={() => { setBillingForm(!billingForm) }} name='delivery' value='Cash On Delivery' />
                            <label className={style.labelCod}>Card On Delivery</label>
                        </div>
                        <div className={style.credit}>
                            <input type='radio' className={style.radioCod} onChange={() => { setBillingForm(!billingForm) }} name='delivery' value='Cash On Delivery' defaultChecked />
                            <label className={style.labelCod}>Credit / Debit Card</label>
                            {!billingForm ?
                                <div className={style.creditContent}>
                                    <input type='checkbox' className={style.checkbox} defaultChecked />
                                    <label>My billing and shipping address are the same</label>
                                    <div className={style.cardDetail}>
                                        <div className={style.customerName}>Veronica Costello</div>
                                        <div className={style.customerAddress}><span>6146 Honey Bluff Parkway Calder,<br /> Michigan 49628-7978</span><br />
                                            <span className={style.phoneNo}>(555) 229-3326</span></div>
                                        <div className={style.cardImg}>
                                            <img src={paypal} className={style.creditCardImg} alt='card images' />
                                            <img src={masterCard} className={style.creditCardImg} alt='card images' />
                                            <img src={visa} className={style.creditCardImg} alt='card images' />
                                            <img src={amex} className={style.creditCardImg} alt='card images' />
                                        </div>
                                        <form className={style.cardDetailForm} onSubmit={handleSubmit(onSubmit)}>
                                            <div className={style.cardFormField}>
                                                <label htmlFor="cardType" className={style.formLabel}>Credit Card Type</label>
                                                <select id="creditCardDropdown" {...register('cardType')} className={style.creditCardDropdown}>
                                                    <option value='' selected disabled>Select a card</option>
                                                    <option value="visa">Visa</option>
                                                    <option value="mastercard">Mastercard</option>
                                                    <option value="americanexpress">American Express</option>
                                                    <option value="discover">Discover</option>
                                                </select>
                                                <label htmlFor="holdername" className={style.formLabel}>Card Holder’s Name</label>
                                                <input type='text' className={style.formInput} placeholder=""{...register('holdername')} />
                                                <label htmlFor="cardNo" className={style.formLabel}>Credit Card Number</label>
                                                <input type='text' className={style.formInput} placeholder=""{...register('cardNo')} />
                                                <label htmlFor="country" className={style.formLabel}>Expiration Date</label>
                                                <div className={style.cardExpiry}>
                                                    <select className={style.selectMonth} {...register('month')} id="monthsDropdown">
                                                        <option value='' selected disabled>Month</option>
                                                        <option value="01">January</option>
                                                        <option value="02">February</option>
                                                        <option value="03">March</option>
                                                        <option value="04">April</option>
                                                        <option value="05">May</option>
                                                        <option value="06">June</option>
                                                        <option value="07">July</option>
                                                        <option value="08">August</option>
                                                        <option value="09">September</option>
                                                        <option value="10">October</option>
                                                        <option value="11">November</option>
                                                        <option value="12">December</option>
                                                    </select>
                                                    <select className={style.selectMonth} {...register('year')}>
                                                        <option value='' selected disabled>year</option>
                                                        {yearOptions}
                                                    </select>
                                                </div>
                                                <label htmlFor="otp" className={style.formLabel}>Card Verification Number</label>
                                                <input type='number' className={style.formInput} placeholder="" {...register('otp')} />
                                            </div>
                                            <div className={style.formFooter}>
                                                <button type='submit' className={style.placeOrderBtn}>Place Order</button>
                                            </div>
                                        </form>
                                    </div>
                                </div> : ''
                            }
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.heading}>Summary</div>
                    <div className={style.orderPrice}>
                        <div className={style.subTotal}><span>Sub Total</span><span>LBP 1,100,000</span></div>
                        <div className={style.subTotal}><span>Total Shipping Charges</span><span>LBP 20,000</span></div>
                        <div className={style.subTotal}><span>Tax</span><span>LBP 20,000</span></div>
                        <div className={style.orderTotal}>
                            <span className={style.orderTitle}>Order Total</span>
                            <span className={style.orderTitle}>LBP 1,140,000</span>
                        </div>
                        <div className={style.cartItemContent}>
                            <div className={style.itemTitle}>
                                <span>5 Items in Cart</span>
                                <span onClick={() => { setIsProduct(!isProduct) }} className={isProduct ? style.svgRotate : ''}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                                        <path id="arrow-dropdown-wt" d="M.75,10a.767.767,0,0,0,.53-.209l4.5-4.286a.69.69,0,0,0,0-1.01L1.28.209A.777.777,0,0,0,.22.209a.691.691,0,0,0,0,1.01L4.189,5,.22,8.781a.69.69,0,0,0,0,1.01A.767.767,0,0,0,.75,10Z" transform="translate(10) rotate(90)" fill="#000" />
                                    </svg>
                                </span>
                            </div>
                            {isProduct ?
                                cart.map((cartItem, index) => {
                                    return (
                                        <div className={style.ItemCart}>
                                            <div className={style.productDesc}>
                                                <img src={`${cartItem.img}`} className={style.cartImg} alt='product ' />
                                                <div className={style.productDetail}>
                                                    <span className={style.productTitle}>{cartItem.title}</span>
                                                    <span className={style.productAuth}>{cartItem.auth}</span>
                                                </div>
                                            </div>
                                            <span className={style.productPrice}>LBP {cartItem.price}</span>
                                        </div>
                                    )
                                }) : ''
                            }
                        </div>
                        <div className={style.ship}>
                            <span>Ship To</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.997" height="14" viewBox="0 0 13.997 14">
                                    <path id="edit" d="M173.467,4.743l-8.837,8.837-3.042.337a1.39,1.39,0,0,1-1.535-1.534l.337-3.042L169.227.5a1.964,1.964,0,0,1,2.783,0l1.454,1.454a1.971,1.971,0,0,1,0,2.786Zm-3.325,1.04-1.955-1.955-6.252,6.256-.246,2.2,2.2-.246ZM172.323,3.1,170.87,1.647a.351.351,0,0,0-.5,0l-1.04,1.04,1.955,1.955,1.04-1.04A.359.359,0,0,0,172.323,3.1Z" transform="translate(-160.045 0.075)" fill="#00838c" />
                                </svg>
                            </span>
                        </div>
                        <div>
                            <span className={style.name}>John Doe</span><br />
                            <span className={style.address}>194 Desert Broom Court, <br />Newark, New Jersey - 07102,<br /> United States<br /> (555) 229-3326</span>
                        </div>
                        <div className={style.shipMethod}>
                            <span>Shipping Method</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.997" height="14" viewBox="0 0 13.997 14">
                                    <path id="edit" d="M173.467,4.743l-8.837,8.837-3.042.337a1.39,1.39,0,0,1-1.535-1.534l.337-3.042L169.227.5a1.964,1.964,0,0,1,2.783,0l1.454,1.454a1.971,1.971,0,0,1,0,2.786Zm-3.325,1.04-1.955-1.955-6.252,6.256-.246,2.2,2.2-.246ZM172.323,3.1,170.87,1.647a.351.351,0,0,0-.5,0l-1.04,1.04,1.955,1.955,1.04-1.04A.359.359,0,0,0,172.323,3.1Z" transform="translate(-160.045 0.075)" fill="#00838c" />
                                </svg>
                            </span>
                        </div>
                        <div className={style.fixedPrice}>Fixed Rate - Fixed $10.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
