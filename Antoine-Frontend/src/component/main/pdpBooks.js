import ProgressBar from '@ramonak/react-progress-bar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import pdpcss from '../../assets/css/main/productDetailPage.module.css'
import { getBooks, getMusic } from '../../store/action/country';
import TraindingMusic from './traindingMusic';
import TrendingBook from './trendingBook';
export default function PdpBooks() {
    const { books, music } = useSelector(state => state.countries)
    const dispatch = useDispatch()
    let {t}=useTranslation()
    const [product, setproducts] = useState([]);
    const [isDesc, setIsDesc] = useState(false);
    // addInfo State for Additonal information toggle
    const [addInfo, setAddInfo] = useState(false);
    const [isReview, setIsReview] = useState(false);
    let [qty, setQty] = useState(1);
    const [isActive, setIsActive] = useState(1);
    const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
    let { id } = useParams();
    const discountPrice = product.price / 2
    async function getData() {
        const { data } = await axios.get(`${process.env.REACT_APP_API_BASEURL}/productsListing/${id}`);
        setproducts(data)
    }
    useEffect(() => {
        getData()
        dispatch(getBooks())
        dispatch(getMusic())
    }, []);
    return (
        <div className={pdpcss.pdpCard}>
            <div className={pdpcss.pdpCardView}>
                <div className={pdpcss.pdpCardImg}>
                    <div className={pdpcss.mainImage}>
                        <img src={`${product.img}`} alt='Trending book first' />
                    </div>
                    <div className={pdpcss.thumbcontainer}>
                        {product.thumb && product.thumb.map((thumbn, index) => {
                            return (
                                <img key={index} src={`${thumbn}`} style={{ height: '70px', width: '70px' }} alt='thumbnail'></img>
                            )
                        })}
                    </div>
                </div>
                <div className={pdpcss.pdpCardContent}>
                    <span className={pdpcss.pdpTitle}>{t(product.title)}</span>
                    <span className={pdpcss.pdpAuthor}>{t(product.author)}</span>
                    <span className={pdpcss.pdpRating}>
                        <Rating size={15} fillColor='orange' emptyColor='gray' />
                    </span>
                    <div className={pdpcss.priceContainer}>
                        <span className={pdpcss.pdpPrice}>{t('LBP')} {t(product.price)}</span>
                        <span className={pdpcss.discountPrice}>{t(discountPrice)}</span>
                        <span className={pdpcss.discount}>{t('Save')}50%</span>
                    </div>
                    <div className={pdpcss.quantity}>
                        <span className={pdpcss.qtyTitle}>{t('Quantity')}</span>
                        <span className={pdpcss.qtyContainer}>
                            <button className={pdpcss.plus} onClick={() => { setQty(--qty) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="1.75" viewBox="0 0 14 1.75">
                                    <g id="ic-minus-menu" transform="translate(-4 -10.125)">
                                        <path id="Line_17" data-name="Line 17" d="M12.125.75H-.125A.875.875,0,0,1-1-.125.875.875,0,0,1-.125-1h12.25A.875.875,0,0,1,13-.125.875.875,0,0,1,12.125.75Z" transform="translate(5 11.125)" fill="#333f48" />
                                    </g>
                                </svg>
                            </button>
                            <span className={pdpcss.qty}>{qty}</span>
                            <button className={pdpcss.minus} onClick={() => { setQty(++qty) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                    <g id="ic-plus" transform="translate(-4 -4)">
                                        <path id="Line_16" data-name="Line 16" d="M-.125,13A.875.875,0,0,1-1,12.125V-.125A.875.875,0,0,1-.125-1,.875.875,0,0,1,.75-.125v12.25A.875.875,0,0,1-.125,13Z" transform="translate(11.125 5)" fill="#333f48" />
                                        <path id="Line_17" data-name="Line 17" d="M12.125.75H-.125A.875.875,0,0,1-1-.125.875.875,0,0,1-.125-1h12.25A.875.875,0,0,1,13-.125.875.875,0,0,1,12.125.75Z" transform="translate(5 11.125)" fill="#333f48" />
                                    </g>
                                </svg>
                            </button>
                        </span>
                    </div>
                    <div className={pdpcss.cartBtnContainer}>
                        <button className={pdpcss.cartBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <g id="shopping-cart" transform="translate(0 -0.001)">
                                    <path id="Union_4" data-name="Union 4" d="M24,29.217A2.669,2.669,0,1,1,26.666,32,2.728,2.728,0,0,1,24,29.217Zm-14.667,0A2.728,2.728,0,0,1,12,26.436,2.785,2.785,0,0,1,12,32,2.729,2.729,0,0,1,9.334,29.217Zm-.4-8.924L6.708,8.678a.5.5,0,0,1-.022-.115L5.576,2.783H1.335A1.363,1.363,0,0,1,0,1.391,1.359,1.359,0,0,1,1.335,0H6.667a1.343,1.343,0,0,1,1.3,1.115L9.095,6.957H30.666a1.309,1.309,0,0,1,1.029.5,1.435,1.435,0,0,1,.281,1.146L29.844,20.281c-.006.006-.006.006-.006.012a4.043,4.043,0,0,1-3.917,3.359H12.855A4.038,4.038,0,0,1,8.935,20.293Zm2.615-.545a1.345,1.345,0,0,0,1.333,1.121H25.921a1.344,1.344,0,0,0,1.3-1.115L29.052,9.738H9.628Z" transform="translate(0 0.001)" fill='#fff' />
                                </g>
                            </svg>
                            {t('ADD TO CART')}
                        </button>
                        <button className={pdpcss.cartBtnSignIn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
                                <g id="user" transform="translate(-3.002 -1.998)">
                                    <path id="Union_3" data-name="Union 3" d="M16,19V17a3,3,0,0,0-3-3H5a3.006,3.006,0,0,0-3,3v2a1,1,0,0,1-2,0V17a5,5,0,0,1,5-5h8a5,5,0,0,1,5,5v2a1,1,0,0,1-2,0ZM4,5a5,5,0,1,1,5,5A5.006,5.006,0,0,1,4,5ZM6,5A3,3,0,1,0,9,2,3,3,0,0,0,6,5Z" transform="translate(3.002 1.998)" fill="#333F48" />
                                </g>
                            </svg>
                            {t('Sign-In To Purchase Instantly')}
                        </button>
                    </div>
                    <div className={pdpcss.shareContainer}>
                        <button className={pdpcss.storeLocation}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16">
                                <g id="map-pin" transform="translate(-2)">
                                    <path id="Path_5928" data-name="Path 5928" d="M9,0a6.847,6.847,0,0,1,7,6.667,7.344,7.344,0,0,1-1.07,3.642,14.178,14.178,0,0,1-2.272,2.9,21.031,21.031,0,0,1-3.27,2.68.729.729,0,0,1-.777,0,21.031,21.031,0,0,1-3.27-2.68,14.178,14.178,0,0,1-2.272-2.9A7.344,7.344,0,0,1,2,6.667,6.847,6.847,0,0,1,9,0ZM9,14.514c1.328-.938,5.6-4.238,5.6-7.847A5.478,5.478,0,0,0,9,1.333,5.478,5.478,0,0,0,3.4,6.667C3.4,10.276,7.672,13.575,9,14.514Z" transform="translate(0)" fill="#333f48" />
                                    <path id="Ellipse_34" data-name="Ellipse 34" d="M1.8-1A2.739,2.739,0,0,1,4.6,1.667,2.739,2.739,0,0,1,1.8,4.333,2.739,2.739,0,0,1-1,1.667,2.739,2.739,0,0,1,1.8-1Zm0,4A1.369,1.369,0,0,0,3.2,1.667,1.369,1.369,0,0,0,1.8.333,1.369,1.369,0,0,0,.4,1.667,1.369,1.369,0,0,0,1.8,3Z" transform="translate(7.2 5)" />
                                </g>
                            </svg>{t('Check in Store Availability')}</button>
                        <button className={pdpcss.addWishlist}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16">
                                <path id="heart" d="M5.944,1.992A4.89,4.89,0,0,1,9.444,3.5l.048.05L9.537,3.5a4.823,4.823,0,0,1,7,0,5.205,5.205,0,0,1,1.45,3.77,6.2,6.2,0,0,1-1.77,4.087l-.005.005-6.177,6.4a.754.754,0,0,1-1.092,0l-6.177-6.4-.005-.005A6.2,6.2,0,0,1,.994,7.267,5.206,5.206,0,0,1,2.444,3.5,4.89,4.89,0,0,1,5.944,1.992ZM9.492,5.485a.759.759,0,0,1-.55-.238l-.595-.624a3.316,3.316,0,0,0-4.811,0,3.592,3.592,0,0,0-1,2.6,4.516,4.516,0,0,0,1.326,3l5.629,5.829,5.629-5.829a4.516,4.516,0,0,0,1.326-3,3.591,3.591,0,0,0-1-2.6,3.316,3.316,0,0,0-4.814,0l-.592.621A.759.759,0,0,1,9.492,5.485Z" transform="translate(-0.992 -1.992)" />
                            </svg>{t('Add to Wishlist')}</button>
                        <button className={pdpcss.share}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16">
                                <g id="share-2" transform="translate(-2 -1)">
                                    <path id="Ellipse_33" data-name="Ellipse 33" d="M2-1A2.959,2.959,0,0,1,5,1.909,2.959,2.959,0,0,1,2,4.818,2.959,2.959,0,0,1-1,1.909,2.959,2.959,0,0,1,2-1ZM2,3.364A1.479,1.479,0,0,0,3.5,1.909,1.479,1.479,0,0,0,2,.455,1.479,1.479,0,0,0,.5,1.909,1.479,1.479,0,0,0,2,3.364Z" transform="translate(12 2)" fill="#333f48" />
                                    <path id="Ellipse_34" data-name="Ellipse 34" d="M2-1A2.959,2.959,0,0,1,5,1.909,2.959,2.959,0,0,1,2,4.818,2.959,2.959,0,0,1-1,1.909,2.959,2.959,0,0,1,2-1ZM2,3.364A1.479,1.479,0,0,0,3.5,1.909,1.479,1.479,0,0,0,2,.455,1.479,1.479,0,0,0,.5,1.909,1.479,1.479,0,0,0,2,3.364Z" transform="translate(3 7.091)" fill="#333f48" />
                                    <path id="Ellipse_35" data-name="Ellipse 35" d="M2-1A2.959,2.959,0,0,1,5,1.909,2.959,2.959,0,0,1,2,4.818,2.959,2.959,0,0,1-1,1.909,2.959,2.959,0,0,1,2-1ZM2,3.364A1.479,1.479,0,0,0,3.5,1.909,1.479,1.479,0,0,0,2,.455,1.479,1.479,0,0,0,.5,1.909,1.479,1.479,0,0,0,2,3.364Z" transform="translate(12 12.182)" fill="#333f48" />
                                    <path id="Line_1" data-name="Line 1" d="M4.872,3.349a.764.764,0,0,1-.377-.1L-.628.356A.715.715,0,0,1-.9-.639.763.763,0,0,1,.128-.9L5.25,1.993a.715.715,0,0,1,.27.995A.755.755,0,0,1,4.872,3.349Z" transform="translate(7.193 10.371)" fill="#333f48" />
                                    <path id="Line_2" data-name="Line 2" d="M-.249,3.349A.755.755,0,0,1-.9,2.988a.715.715,0,0,1,.27-.995L4.487-.9a.763.763,0,0,1,1.026.262.715.715,0,0,1-.27.995L.128,3.25A.765.765,0,0,1-.249,3.349Z" transform="translate(7.193 5.28)" />
                                </g>
                            </svg>{t('Share')}</button>
                    </div>
                    <p className={pdpcss.International}>{t('For International: 1-2 days')}</p>
                    <p>{t('For Lebanon: 6-8 days')}</p>
                </div>
            </div>
            {!isMobile ?
                <>
                    <div className={pdpcss.productInfo}>
                        <div className={pdpcss.infoBtn}>
                            <span onClick={() => { setIsActive(1) }} className={`${pdpcss.ProductDesc} ${isActive === 1 ? pdpcss.borderCss : ''}`}>{t('Product Description')}</span>
                            <span onClick={() => { setIsActive(2) }} className={`${pdpcss.moreInfo} ${isActive === 2 ? pdpcss.borderCss : ''}`}>{t('Additional Information')}</span>
                            <span onClick={() => { setIsActive(3) }} className={`${pdpcss.review} ${isActive === 3 ? pdpcss.borderCss : ''}`}>{t('Reviews(19)')}</span>
                        </div>

                    </div>
                    <div className={pdpcss.reviewContent}>
                        {isActive === 1 ?
                            <div className={pdpcss.ProductDescContent}>
                                {t('NEW YORK TIMES BESTSELLER If you’re looking for a book to take on holiday this summer, The Seven Husbands of Evelyn Hugo has got all the glitz and glamour to make it a perfect beach read. -Bustle From the New York Times bestselling author of Daisy Jones & the Six-an entrancing and wildly addictive journey of a reclusive Hollywood starlet (PopSugar) as she reflects on her relentless rise to the top and the risks she took, the loves she lost, and the long-held secrets the public could never imagine.')}
                                <ul>
                                    <li>{t('Taylor Jenkins Reid is the queen of queens when it comes to beach reads, and this breathtaking treat proves once again the throne is hers alone. -Taylor')}</li>
                                    <li>{t('“If you’re looking for a book to take on holiday this summer, The Seven Husbands of Evelyn Hugo has got all the glitz and glamour to make it a perfect read.” -Bustle')}</li>
                                </ul>
                            </div>
                            : ""}
                        {isActive === 2 ?
                            <div className={pdpcss.moreInfoContent}>
                                {t(' Additional Information')}
                            </div> : ''}
                        {isActive === 3 ?
                            <>
                                <div className={pdpcss.reviewContents}>
                                    <div className={pdpcss.review1}>
                                        <span className={pdpcss.avgReview}>5.0</span>
                                        <span><Rating className={pdpcss.rating} size={15} fillColor='orange' emptyColor='gray' /></span>
                                        <span className={pdpcss.reviews}>19 {t('reviews')}</span>
                                    </div>
                                    <div className={pdpcss.review2}>
                                        <ul>
                                            <li className={pdpcss.reviewStars}>
                                                <span>5 {t('stars')}</span>
                                                <ProgressBar completed={85} className={pdpcss.Wrapper}
                                                    height={10}
                                                    borderRadius='0px'
                                                    isLabelVisible={false}
                                                    bgColor='#BCBD00' />
                                                <span>12</span>
                                            </li>
                                            <li className={pdpcss.reviewStars}>
                                                <span>4 stars</span>
                                                <ProgressBar completed={50} className={pdpcss.Wrapper}
                                                    height={10}
                                                    borderRadius='0px'
                                                    isLabelVisible={false}
                                                    bgColor='#BCBD00' />
                                                <span>3</span>
                                            </li>
                                            <li className={pdpcss.reviewStars}>
                                                <span>3 stars</span>
                                                <ProgressBar completed={25} className={pdpcss.Wrapper}
                                                    height={10}
                                                    borderRadius='0px'
                                                    isLabelVisible={false}
                                                    bgColor='#BCBD00' />
                                                <span>3</span>
                                            </li>
                                            <li className={pdpcss.reviewStars}>
                                                <span>2 stars</span>
                                                <ProgressBar completed={15} className={pdpcss.Wrapper}
                                                    height={10}
                                                    borderRadius='0px'
                                                    isLabelVisible={false}
                                                    bgColor='#BCBD00' />
                                                <span>1</span>
                                            </li>
                                            <li className={pdpcss.reviewStars}>
                                                <span>1 stars</span>
                                                <ProgressBar completed={0} className={pdpcss.Wrapper}
                                                    height={10}
                                                    borderRadius='0px'
                                                    isLabelVisible={false}
                                                    bgColor='#BCBD00' />
                                                <span>0</span>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className={pdpcss.feedback}>
                                        <div className={pdpcss.feedbackContent}>
                                            <span className={pdpcss.boughtedProduct}>{t('Already bought this product?')}</span>
                                            <button className={pdpcss.feedbackBtn}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20.001 16">
                                                    <path id="money-check-edit" d="M4.828,12.032H3.5a.5.5,0,0,1-.5-.5V10.2A1,1,0,0,1,3.293,9.5l7.233-7.233,2.241,2.241L5.535,11.739A1,1,0,0,1,4.828,12.032ZM13.473,3.8,11.232,1.555,12.538.25A.753.753,0,0,1,13.6.25l1.184,1.184a.75.75,0,0,1,0,1.056ZM16,11.532a.5.5,0,0,1-.5.5H6.657l1.5-1.5H15.5a.5.5,0,0,1,.5.5ZM1,4.031H7.344l-1.5,1.5H1.5v9h17v-9H13.155l.319-.319.706-.706.475-.475H19a1,1,0,0,1,1,1v10a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1v-10A1,1,0,0,1,1,4.031Zm14.5,5.5H9.157l1.5-1.5H15.5a.5.5,0,0,1,.5.5v.5A.5.5,0,0,1,15.5,9.532Z" transform="translate(0 -0.032)" fill="#fff" />
                                                </svg>{t('Write a Review')}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={pdpcss.customerReview}>

                                    <span className={pdpcss.reviewTitle}>{t('Customer Reviews')}</span>
                                    <span className={pdpcss.commentTitle}>{t('I am truly mind blown!! This book deserves every bit of hype it gets.')}</span>
                                    <div className={pdpcss.comments}>
                                        <span className={pdpcss.ratingTitle}>{t('Rating')}</span>
                                        <span>
                                            <Rating className={pdpcss.ratingComments} size={15} fillColor='orange' emptyColor='gray' /></span>
                                        <span>{t('I bought this book after seeing it blow up all over the bookish community. To say it was brilliant would be a gross understatement. Evelyn Hugo had my complete attention from start to finish. She isn’t a black and white character and that’s what makes her memorable. I really enjoyed the experience of reading it. A solid 5 star read which has made it not only to my top favourites of the year but has become a favorite for life. I will undoubtedly read this book again cause Evelyn Hugo leaves you wanting more.')}</span>
                                    </div>
                                </div>
                            </>
                            : ''}
                    </div>
                </>
                :
                <div className={pdpcss.productInfo}>
                    <div className={pdpcss.infoBtn}>
                        <div className={pdpcss.pdpDesc}>
                            <span>{t('Product Description')}</span>
                            <button className={pdpcss.DescBtn} onClick={() => { setIsDesc(!isDesc) }}>
                                {!isDesc ?
                                    <svg onClick={() => { console.log('clicked plus') }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                        <g id="ic-plus" transform="translate(-4 -4)">
                                            <path id="Line_16" data-name="Line 16" d="M-.125,13A.875.875,0,0,1-1,12.125V-.125A.875.875,0,0,1-.125-1,.875.875,0,0,1,.75-.125v12.25A.875.875,0,0,1-.125,13Z" transform="translate(11.125 5)" fill="#333f48" />
                                            <path id="Line_17" data-name="Line 17" d="M12.125.75H-.125A.875.875,0,0,1-1-.125.875.875,0,0,1-.125-1h12.25A.875.875,0,0,1,13-.125.875.875,0,0,1,12.125.75Z" transform="translate(5 11.125)" fill="#333f48" />
                                        </g>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 1.75">
                                        <g id="ic-minus-menu" transform="translate(-4 -10.125)">
                                            <path id="Line_17" data-name="Line 17" d="M12.125.75H-.125A.875.875,0,0,1-1-.125.875.875,0,0,1-.125-1h12.25A.875.875,0,0,1,13-.125.875.875,0,0,1,12.125.75Z" transform="translate(5 11.125)" fill="#333f48" />
                                        </g>
                                    </svg>}
                            </button>
                        </div>
                        {isDesc ?
                            <div className={pdpcss.ProductDescContent}>
                                {t('NEW YORK TIMES BESTSELLER If you’re looking for a book to take on holiday this summer, The Seven Husbands of Evelyn Hugo has got all the glitz and glamour to make it a perfect beach read. -Bustle From the New York Times bestselling author of Daisy Jones & the Six-an entrancing and wildly addictive journey of a reclusive Hollywood starlet (PopSugar) as she reflects on her relentless rise to the top and the risks she took, the loves she lost, and the long-held secrets the public could never imagine.')}
                                <ul>
                                    <li>{t('Taylor Jenkins Reid is the queen of queens when it comes to beach reads, and this breathtaking treat proves once again the throne is hers alone. -Taylor')}</li>
                                    <li>{t('“If you’re looking for a book to take on holiday this summer, The Seven Husbands of Evelyn Hugo has got all the glitz and glamour to make it a perfect read.” -Bustle')}</li>
                                </ul>
                            </div> : ''
                        }
                        <div className={pdpcss.additionalInfo}>
                            <span>{t('Additional Information')}</span>
                            <span className={pdpcss.DescBtn} onClick={() => { setAddInfo(!addInfo) }}>
                                {!addInfo ?
                                    <svg onClick={() => { console.log('clicked plus') }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                        <g id="ic-plus" transform="translate(-4 -4)">
                                            <path id="Line_16" data-name="Line 16" d="M-.125,13A.875.875,0,0,1-1,12.125V-.125A.875.875,0,0,1-.125-1,.875.875,0,0,1,.75-.125v12.25A.875.875,0,0,1-.125,13Z" transform="translate(11.125 5)" fill="#333f48" />
                                            <path id="Line_17" data-name="Line 17" d="M12.125.75H-.125A.875.875,0,0,1-1-.125.875.875,0,0,1-.125-1h12.25A.875.875,0,0,1,13-.125.875.875,0,0,1,12.125.75Z" transform="translate(5 11.125)" fill="#333f48" />
                                        </g>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 1.75">
                                        <g id="ic-minus-menu" transform="translate(-4 -10.125)">
                                            <path id="Line_17" data-name="Line 17" d="M12.125.75H-.125A.875.875,0,0,1-1-.125.875.875,0,0,1-.125-1h12.25A.875.875,0,0,1,13-.125.875.875,0,0,1,12.125.75Z" transform="translate(5 11.125)" fill="#333f48" />
                                        </g>
                                    </svg>}
                            </span>
                        </div>
                        {addInfo ?
                            <div className={pdpcss.moreInfoContent}>
                                {t(' Additional Information')}
                            </div> : ''}
                        <div className={pdpcss.reviewBtn}>
                            <span>{t('Reviews')}(19)</span>
                            <span className={pdpcss.DescBtn} onClick={() => { setIsReview(!isReview) }}>
                                {!isReview ?
                                    <svg onClick={() => { console.log('clicked plus') }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                        <g id="ic-plus" transform="translate(-4 -4)">
                                            <path id="Line_16" data-name="Line 16" d="M-.125,13A.875.875,0,0,1-1,12.125V-.125A.875.875,0,0,1-.125-1,.875.875,0,0,1,.75-.125v12.25A.875.875,0,0,1-.125,13Z" transform="translate(11.125 5)" fill="#333f48" />
                                            <path id="Line_17" data-name="Line 17" d="M12.125.75H-.125A.875.875,0,0,1-1-.125.875.875,0,0,1-.125-1h12.25A.875.875,0,0,1,13-.125.875.875,0,0,1,12.125.75Z" transform="translate(5 11.125)" fill="#333f48" />
                                        </g>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 1.75">
                                        <g id="ic-minus-menu" transform="translate(-4 -10.125)">
                                            <path id="Line_17" data-name="Line 17" d="M12.125.75H-.125A.875.875,0,0,1-1-.125.875.875,0,0,1-.125-1h12.25A.875.875,0,0,1,13-.125.875.875,0,0,1,12.125.75Z" transform="translate(5 11.125)" fill="#333f48" />
                                        </g>
                                    </svg>}
                            </span>
                        </div>
                        {isReview ?
                            <>
                                <div className={pdpcss.reviewContents}>
                                    <div className={pdpcss.reviewMain}>
                                        <div className={pdpcss.review1}>
                                            <span className={pdpcss.avgReview}>5.0</span>
                                            <span><Rating className={pdpcss.rating} size={15} fillColor='orange' emptyColor='gray' /></span>
                                            <span className={pdpcss.reviews}>19 {t('reviews')}</span>
                                        </div>
                                        <div className={pdpcss.review2}>
                                            <ul>
                                                <li>
                                                    <span>5 stars</span>
                                                    <ProgressBar completed={85} className={pdpcss.Wrapper}
                                                        height={10}
                                                        borderRadius='0px'
                                                        isLabelVisible={false}
                                                        bgColor='#BCBD00' />
                                                    <span>12</span>
                                                </li>
                                                <li>
                                                    <span>4 stars</span>
                                                    <ProgressBar completed={50} className={pdpcss.Wrapper}
                                                        height={10}
                                                        borderRadius='0px'
                                                        isLabelVisible={false}
                                                        bgColor='#BCBD00' />
                                                    <span>3</span>
                                                </li>
                                                <li>
                                                    <span>3 stars</span>
                                                    <ProgressBar completed={25} className={pdpcss.Wrapper}
                                                        height={10}
                                                        borderRadius='0px'
                                                        isLabelVisible={false}
                                                        bgColor='#BCBD00' />
                                                    <span>3</span>
                                                </li>
                                                <li>
                                                    <span>2 stars</span>
                                                    <ProgressBar completed={15} className={pdpcss.Wrapper}
                                                        height={10}
                                                        borderRadius='0px'
                                                        isLabelVisible={false}
                                                        bgColor='#BCBD00' />
                                                    <span>1</span>
                                                </li>
                                                <li>
                                                    <span>1 stars</span>
                                                    <ProgressBar completed={0} className={pdpcss.Wrapper}
                                                        height={10}
                                                        borderRadius='0px'
                                                        isLabelVisible={false}
                                                        bgColor='#BCBD00' />
                                                    <span>0</span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className={pdpcss.feedback}>
                                        <div className={pdpcss.feedbackContent}>
                                            <span>Already bought this product?</span>
                                            <button className={pdpcss.feedbackBtn}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20.001 16">
                                                    <path id="money-check-edit" d="M4.828,12.032H3.5a.5.5,0,0,1-.5-.5V10.2A1,1,0,0,1,3.293,9.5l7.233-7.233,2.241,2.241L5.535,11.739A1,1,0,0,1,4.828,12.032ZM13.473,3.8,11.232,1.555,12.538.25A.753.753,0,0,1,13.6.25l1.184,1.184a.75.75,0,0,1,0,1.056ZM16,11.532a.5.5,0,0,1-.5.5H6.657l1.5-1.5H15.5a.5.5,0,0,1,.5.5ZM1,4.031H7.344l-1.5,1.5H1.5v9h17v-9H13.155l.319-.319.706-.706.475-.475H19a1,1,0,0,1,1,1v10a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1v-10A1,1,0,0,1,1,4.031Zm14.5,5.5H9.157l1.5-1.5H15.5a.5.5,0,0,1,.5.5v.5A.5.5,0,0,1,15.5,9.532Z" transform="translate(0 -0.032)" fill="#fff" />
                                                </svg>Write a Review</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className={pdpcss.customerReview}>
                                    <span className={pdpcss.reviewTitle}>Customer Reviews</span>
                                    <span className={pdpcss.commentTitle}>I am truly mind blown!! This book deserves every bit of hype it gets.</span>
                                    <div className={pdpcss.comments}>
                                        <span>Rating</span>
                                        <span>
                                            <Rating className={pdpcss.ratingComments} size={15} fillColor='orange' emptyColor='gray' /></span>
                                        <span>I bought this book after seeing it blow up all over the bookish community. To say it was brilliant would be a gross understatement. Evelyn Hugo had my complete attention from start to finish. She isn’t a black and white character and that’s what makes her memorable. I really enjoyed the experience of reading it. A solid 5 star read which has made it not only to my top favourites of the year but has become a favorite for life. I will undoubtedly read this book again cause Evelyn Hugo leaves you wanting more.</span>

                                    </div>
                                </div> */}
                            </>
                            : ''}
                    </div>
                </div>}
            <TrendingBook books={books} />
            <TraindingMusic music={music} />
        </div>
    )
}
