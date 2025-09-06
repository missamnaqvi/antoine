import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import style from '../../assets/css/main/main.module.css'
export default function Bookbylang({ bookbylang }) {
    let {t}=useTranslation()
    return (
        <div>
            <p className={style.bookTitle}>{t('Books by Language')}</p>
            <div className={style.container}>
                <div className={style.bookContainer}>
                    {bookbylang.map((book, index) => {
                        return (
                            <div className={style.langCard} key={index} style={{ "background": book.color }}>
                                <div className={style.language}>
                                    <p>{t(book.langauge)}</p>
                                    <Link to={book.langauge} className={style.langauge}>{t('View Collection')}</Link>
                                </div>
                                <div className={style.bookImg}>
                                    <img src={book.img1} alt='book by language' />
                                    <img src={book.img2} alt='book by language' />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
