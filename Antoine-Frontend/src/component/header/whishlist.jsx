import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getWishlist } from "../../store/action/country";
import style from '../../assets/css/header/whishlist.module.css'
// import style from '../../assets/css/main/main.module.css'
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { AddToCart } from '../../functions/addToCart'
import DeleteProduct from "../../functions/removeWishlistItem";
import { useTranslation } from "react-i18next";
export default function Whishlist() {
    const { whishlist } = useSelector(state => (state.productListingSlice))
    const dispatch = useDispatch()
    let { t } = useTranslation()
    useEffect(() => {
        dispatch(getWishlist())
    }, [whishlist]);
    return (
        <div>
            <div className={style.bookContent}>
                {whishlist.map((product, index) => {
                    return (
                        <div key={index} className={style.bookCard}>
                            <div className={style.cardImg}>
                                <Link to={`/Books/${product.id}`}>
                                    <img src={product.img} className={style.productImg} alt='Trending book' />
                                </Link>
                                <span onClick={() => { DeleteProduct(product.id) }} className={style.remove}>X</span>
                            </div>
                            <div className={style.cardContent}>
                                <p className={style.title}>{t(product.title)}</p>
                                <p className={style.author}>{t(product.author)}</p>
                                <p className={style.rating}>
                                    <Rating size={15} fillColor='orange' emptyColor='gray' />
                                </p>
                                <p className={style.price}>{t('LBP')} {product.price}</p>
                                <button onClick={() => { AddToCart(product.title, product.author, product.price, product.img) }} className={style.cartBtn}>
                                    <svg className={style.cartBtnSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <g id="shopping-cart" transform="translate(0 -0.001)">
                                            <path id="Union_4" data-name="Union 4" d="M24,29.217A2.669,2.669,0,1,1,26.666,32,2.728,2.728,0,0,1,24,29.217Zm-14.667,0A2.728,2.728,0,0,1,12,26.436,2.785,2.785,0,0,1,12,32,2.729,2.729,0,0,1,9.334,29.217Zm-.4-8.924L6.708,8.678a.5.5,0,0,1-.022-.115L5.576,2.783H1.335A1.363,1.363,0,0,1,0,1.391,1.359,1.359,0,0,1,1.335,0H6.667a1.343,1.343,0,0,1,1.3,1.115L9.095,6.957H30.666a1.309,1.309,0,0,1,1.029.5,1.435,1.435,0,0,1,.281,1.146L29.844,20.281c-.006.006-.006.006-.006.012a4.043,4.043,0,0,1-3.917,3.359H12.855A4.038,4.038,0,0,1,8.935,20.293Zm2.615-.545a1.345,1.345,0,0,0,1.333,1.121H25.921a1.344,1.344,0,0,0,1.3-1.115L29.052,9.738H9.628Z" transform="translate(0 0.001)" fill='#fff' />
                                        </g>
                                    </svg>
                                    {t('ADD TO CART')}
                                </button>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}
