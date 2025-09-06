import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import style from '../../assets/css/main/main.module.css'
import { AddToCart } from '../../functions/addToCart'
import AddToWishlist from '../../functions/addToWishlist'

export default function TrendingToys({ toys }) {
    let { t } = useTranslation()
    return (
        <div>
            <p className={style.bookTitle}>{t('Trending Toys')}</p>
            <div className={style.bookContent}>
                {toys.map((book, index) => {
                    return (
                        <div className={style.bookCard} key={index}>
                            <Link className={style.menulink} to={book.path} >
                                <img src={`${book.img}`} alt='Trending book' />
                            </Link>
                            <svg onClick={() => { AddToWishlist(book.title, book.author, book.price, book.img) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" className={style.whishlistSvg}>
                                <path id="ic_wish-list" d="M4.779,1.992A3.775,3.775,0,0,1,7.456,3.121l.036.037.034-.035a3.738,3.738,0,0,1,5.356,0,3.863,3.863,0,0,1,1.109,2.828,4.6,4.6,0,0,1-1.354,3.066l0,0-4.724,4.8a.584.584,0,0,1-.835,0l-4.724-4.8,0,0A4.6,4.6,0,0,1,.993,5.949,3.863,3.863,0,0,1,2.1,3.12,3.775,3.775,0,0,1,4.779,1.992Zm2.713,2.62a.586.586,0,0,1-.42-.178l-.455-.468a2.57,2.57,0,0,0-3.679,0A2.665,2.665,0,0,0,2.174,5.92,3.357,3.357,0,0,0,3.188,8.172l4.3,4.372,4.3-4.372A3.357,3.357,0,0,0,12.81,5.92a2.665,2.665,0,0,0-.764-1.951,2.57,2.57,0,0,0-3.681,0l-.453.466A.586.586,0,0,1,7.492,4.612Z" transform="translate(-0.992 -1.992)" fill="#333f48" />
                            </svg>
                            <p>{t(book.title)}</p>
                            <p className={style.author}>{t(book.author)}</p>
                            <Rating size={15} fillColor='orange' emptyColor='gray' />
                            <p className={style.price}>{t('LBP')} {t(book.price)}</p>
                            <button onClick={() => { AddToCart(book.title, book.author, book.price, book.img) }} className={style.cartBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <g id="shopping-cart" transform="translate(0 -0.001)">
                                        <path id="Union_4" data-name="Union 4" d="M24,29.217A2.669,2.669,0,1,1,26.666,32,2.728,2.728,0,0,1,24,29.217Zm-14.667,0A2.728,2.728,0,0,1,12,26.436,2.785,2.785,0,0,1,12,32,2.729,2.729,0,0,1,9.334,29.217Zm-.4-8.924L6.708,8.678a.5.5,0,0,1-.022-.115L5.576,2.783H1.335A1.363,1.363,0,0,1,0,1.391,1.359,1.359,0,0,1,1.335,0H6.667a1.343,1.343,0,0,1,1.3,1.115L9.095,6.957H30.666a1.309,1.309,0,0,1,1.029.5,1.435,1.435,0,0,1,.281,1.146L29.844,20.281c-.006.006-.006.006-.006.012a4.043,4.043,0,0,1-3.917,3.359H12.855A4.038,4.038,0,0,1,8.935,20.293Zm2.615-.545a1.345,1.345,0,0,0,1.333,1.121H25.921a1.344,1.344,0,0,0,1.3-1.115L29.052,9.738H9.628Z" transform="translate(0 0.001)" fill='#fff' />
                                    </g>
                                </svg>{t('ADD TO CART')}</button>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
