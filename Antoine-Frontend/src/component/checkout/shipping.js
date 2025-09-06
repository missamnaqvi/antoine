import { t } from 'i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import style from '../../assets/css/main/checkout.module.css'
export default function Shipping({ isShipping, setisShipping, check, cart, setCheck, }) {
    const [isTap, setIsTap] = useState(false);
    const [isaddressForm, setIsaddressForm] = useState(false);
    const [savedAddress, setSavedAddress] = useState(true);

    const { register, handleSubmit } = useForm();
    const onSubmit = ({ firstname, lastname, email }) => {
        console.log(JSON.stringify({ firstname, lastname, email }));
    };
    return (
        <div className={style.content}>
            <div className={style.shipAddress}>
                <div className={style.shipAddressTitle}>{t('Shipping Address')}</div>
                <div className={style.addresses}>
                    <div className={`${style.addressCard} ${isTap ? style.borderChange : ''}`} onClick={() => { setIsTap(!isTap) }}>
                        <span>{t('Veronica Costello')}</span>
                        <span className={style.address}>{t('6146 Honey Bluff Parkway Calder, Michigan 49628-7978')}</span>
                        <span className={style.PhoneNumber}>(555) 229-3326</span>
                        <span className={style.ship}>{t('Ship Here')}</span>
                        {!isTap ? <svg className={style.checkedSvg} xmlns="http://www.w3.org/2000/svg" width="12.867" height="10.008" viewBox="0 0 12.867 10.008">
                            <path id="arrow-left" d="M4.766,2,0,6.825l8.12,8.042,1.888-1.89-6.2-6.152L6.672,3.89Z" transform="translate(-2 10.008) rotate(-90)" fill="#fff" fillRule="evenodd" />
                        </svg> : ''
                        }
                    </div>
                    <div className={`${style.addressCard} ${!isTap ? style.borderChange : ''}`} onClick={() => { setIsTap(!isTap) }}>
                        <span>{t('Veronica Costello')}</span>
                        <span className={style.address}>{t('6146 Honey Bluff Parkway Calder, Michigan 49628-7978')}</span>
                        <span className={style.PhoneNumber}>(555) 229-3326</span>
                        <span className={style.ship}>{t('Ship Here')}</span>
                        {isTap ? <svg className={style.checkedSvg} xmlns="http://www.w3.org/2000/svg" width="12.867" height="10.008" viewBox="0 0 12.867 10.008">
                            <path id="arrow-left" d="M4.766,2,0,6.825l8.12,8.042,1.888-1.89-6.2-6.152L6.672,3.89Z" transform="translate(-2 10.008) rotate(-90)" fill="#fff" fillRule="evenodd" />
                        </svg> : ''
                        }
                    </div>
                </div>
                <button className={style.addressBtn} onClick={() => { setIsaddressForm(!isaddressForm) }}>+ {t('New Address')}</button>
                {isaddressForm ?
                    <div className={style.addressBackground}>
                        <div className={style.addressForm}>
                            <form className={style.PopupForm} onSubmit={handleSubmit(onSubmit)}>
                                <div className={style.Title}>{t('Shipping Address')}</div>
                                <div className={style.formField}>
                                    <label htmlFor="firstname">{t('First Name')}</label>
                                    <input type='text' placeholder="Veronica" {...register('firstname')} />
                                    <label htmlFor="lastname">{t('Last Name')}</label>
                                    <input type='text' placeholder="Costello"{...register('lastname')} />
                                    <label htmlFor="company">{t('Company')}</label>
                                    <input type='text' placeholder=""{...register('company')} />
                                    <label htmlFor="street">{t('Street Address')}</label>
                                    <input type='text' placeholder=""{...register('street')} />
                                    <input type='text' placeholder=""{...register('street1')} />
                                    <input type='text' placeholder=""{...register('street2')} />
                                    <input type='text' placeholder=""{...register('street3')} />
                                    <label htmlFor="country">{t('Country')}</label>
                                    <label htmlFor="state">{t('State/Province')}</label>
                                    <label htmlFor="city">{t('City')}</label>
                                    <input type='text' placeholder=""{...register('city')} />
                                    <label htmlFor="country">{t('Zip/Postal Code')}</label>
                                    <input type='number' placeholder=""{...register('zipcode')} />
                                </div>
                                <div className={style.formFooter}>
                                    <div>
                                        <input type="checkbox" id="addressCheckbox" name="addressCheckbox" value="addressCheckbox" />
                                        <label for="vehicle1">{t('Save in address book')}</label>
                                    </div>
                                    <div>
                                        <button className={style.cancelBtn} onClick={() => setIsaddressForm(false)}>{t('Cancel')}</button>
                                        <input type="submit" className={style.shipBtn} value='Ship Here'></input>
                                    </div>
                                </div>
                            </form>
                            <span className={style.closeBtn} onClick={() => setIsaddressForm(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" /></svg>
                            </span>
                        </div>
                    </div> : ''
                }
                <div className={style.shipMethod}>
                    <div className={style.shipAddressTitle}>{t('Shipping Methods')}</div>
                    <div className={style.clickCollect}>
                        <input type="radio" defaultChecked onChange={() => { setSavedAddress(true) }} id="option1" name="radio" />
                        <label for="option1"><span>LBP 20,000</span>{t('Click & Collect')}</label>
                    </div>
                    <div className={style.clickCollect}>
                        <input type="radio" onChange={() => { setSavedAddress(false) }} id="option3" name="radio" />
                        <label for="option3"><span>LBP 40,000</span>{t('Home delivery')}</label>
                    </div>
                </div>
                {
                    savedAddress ? <div className={style.storeContent}>
                        <div className={style.shipAddressTitle}>{t('Shipping Methods')}</div>
                        <select className={style.storeSelect}>
                            <option>{t('Select a store')}</option>
                        </select>
                        <div className={style.storeAddress}>
                            <span className={style.storeName}><b>{t('Store Name')}:</b>{t('Achrafieh – Sassine')}</span>
                            <span className={style.storeAddress1}>{t('Store Address')}</span>
                            <span className={style.street}>{t('Independence Street (Elias Sarkis Avenue، Lebanon)')}</span>
                            <span className={style.mobileNumber}>+961 1 331 811</span>
                            <div className={style.map}>
                                <span>{t('More About Store')} &gt;</span><br />
                                <span>{t('View Store On Google Map')} &gt;</span>
                            </div>
                        </div>
                    </div> : ''
                }

                <div className={style.pickup}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.formField}>
                            <label htmlFor="pickupDate">{t('Pickup A Date')}</label>
                            <input type='date' defaultChecked placeholder="Select a pickup date" {...register('pickupDate')} />
                            <label htmlFor="pickTime">{t('Select A Time')}</label>
                            <input type='text' placeholder="Select a time Slot"{...register('pickTime')} />
                        </div>
                    </form>
                </div>
                <div className={style.nextBtnContent}>
                    <button className={style.nextBtn} onClick={() => { setisShipping(!isShipping); setCheck(!check) }}>{t('Next')}</button>
                </div>
            </div>
            <div className={style.summary}>
                <span className={style.summaryTitle}>{t('Summary')}</span>
                <div className={style.cartItemContent}>
                    <span>{t('5 Items in Cart')}</span>
                    {
                        cart.map((cartItem, index) => {
                            return (
                                <div className={style.ItemCart}>
                                    <div className={style.productDesc}>
                                        <img src={`${cartItem.img}`} alt='product' />

                                        <div className={style.productDetail}>
                                            <span className={style.productTitle}>{cartItem.title}</span>
                                            <span className={style.productAuth}>{cartItem.auth}</span>
                                        </div>
                                    </div>
                                    <span className={style.productPrice}>{t('LBP')} {cartItem.price}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
