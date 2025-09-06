import { useState } from 'react';
import style from '../../assets/css/footer/footer.module.css'

export default function MobileFooter({ menu, aboutus, service }) {
    const [category, setCategory] = useState(false);
    const [about, setAbout] = useState(false);
    const [customer, setCustomer] = useState(false);

    return (
        <div className={style.middleFooterMobile}>
            <ul className={style.categories}>
                <div className={style.text} onClick={() => setCategory(!category)}>
                    Categories <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                        <path id="arrow-dropdown-wt" d="M.75,10a.767.767,0,0,0,.53-.209l4.5-4.286a.69.69,0,0,0,0-1.01L1.28.209A.777.777,0,0,0,.22.209a.691.691,0,0,0,0,1.01L4.189,5,.22,8.781a.69.69,0,0,0,0,1.01A.767.767,0,0,0,.75,10Z" transform="translate(10) rotate(90)" fill="#000" />
                    </svg>

                </div>
                {category ?
                    menu && menu?.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                    : ''
                }
            </ul>
            <ul className={style.categories}>
                <div className={style.text} onClick={() => setAbout(!about)}>
                    About Us
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                        <path id="arrow-dropdown-wt" d="M.75,10a.767.767,0,0,0,.53-.209l4.5-4.286a.69.69,0,0,0,0-1.01L1.28.209A.777.777,0,0,0,.22.209a.691.691,0,0,0,0,1.01L4.189,5,.22,8.781a.69.69,0,0,0,0,1.01A.767.767,0,0,0,.75,10Z" transform="translate(10) rotate(90)" fill="#000" />
                    </svg>
                </div>
                {about ?
                    aboutus && aboutus?.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                    : ''
                }
            </ul>
            <ul className={style.categories}>
                <div className={style.text} onClick={() => setCustomer(!customer)}>
                    Customer Service
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                        <path id="arrow-dropdown-wt" d="M.75,10a.767.767,0,0,0,.53-.209l4.5-4.286a.69.69,0,0,0,0-1.01L1.28.209A.777.777,0,0,0,.22.209a.691.691,0,0,0,0,1.01L4.189,5,.22,8.781a.69.69,0,0,0,0,1.01A.767.767,0,0,0,.75,10Z" transform="translate(10) rotate(90)" fill="#000" />
                    </svg>
                </div>
                {customer ?
                    service && service?.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                    : ''}
            </ul>
            <div>
                <div className={style.text}>
                    <p>Sign up for savings, news, and updates</p>
                </div>
                <div className={style.email}>
                    <input type='email' placeholder='Email address' />
                    <button >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24">
                            <path id="ic_arrow_right" d="M9.75,29a1.763,1.763,0,0,0,1.237-.5l10.5-10.286a1.69,1.69,0,0,0,0-2.424L10.987,5.5a1.776,1.776,0,0,0-2.475,0,1.69,1.69,0,0,0,0,2.424L17.775,17,8.513,26.074a1.69,1.69,0,0,0,0,2.424A1.763,1.763,0,0,0,9.75,29Z" transform="translate(-8 -5)" fill="#fff" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
