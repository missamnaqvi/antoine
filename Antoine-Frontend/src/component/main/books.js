import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive';
import { Link, useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import style from '../../assets/css/main/main.module.css'
import productcss from '../../assets/css/main/productListing.module.css'
import { AddToCart } from '../../functions/addToCart';
import AddToWishlist from '../../functions/addToWishlist';
import { getCategories, getProductsListing } from '../../store/action/country';
import { handleSortChange } from '../../store/slices/productSlice';
export default function Books() {
    let { t } = useTranslation()
    const { categories, sorteditem } = useSelector(state => state.productListingSlice)
    const [isActive, setIsActive] = useState(false);
    const [isSort, setIsSort] = useState(false);
    const dispatch = useDispatch()
    let { Books } = useParams();
    const { register, handleSubmit } = useForm()
    const isMobileScreen = useMediaQuery({ query: '(max-width: 767px)' })
    function getData(data) {
        dispatch(handleSortChange(data))
        console.log('radio button data ', data)
    }
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProductsListing())
    }, []);
    return (
        <div className={style.container}>
            <div className={productcss.productContainer}>
                <div className={style.left}>
                    <span className={style.title}>{t('Category')}</span>
                    <ul>
                        {categories.length > 0 && categories[0].cate.map((category, index) => {
                            return (
                                <li key={index}>{t(category.name)}</li>
                            )
                        })}
                    </ul>
                    <div className={style.title}>{t('Language')}</div>
                    {
                        categories.length > 0 && categories[0].languages.map((languageCheck, index) => {
                            return (
                                <label key={index}>
                                    <input type="checkbox" />
                                    {t(languageCheck.language)}
                                </label>
                            )
                        })
                    }
                    <div className={style.title}>{t('Format')}</div>
                    {
                        categories.length > 0 && categories[0].format.map((languageCheck, index) => {
                            return (
                                <label key={index}>
                                    <input type="checkbox" />
                                    {t(languageCheck.format)}
                                </label>
                            )
                        })
                    }
                    <div className={style.title}>{t('Price Range')}</div>
                    <input id="typeinp" type="range" style={{ color: '#333F48' }} min="0" max="5" step="1" />
                    <div className={style.range}>
                        <label>{t('LBP')} 100</label>
                        <label>{t('LBP')} 400,000</label>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={productcss.filterContent}>
                        <p className={style.bookTitle}>{t(Books)}</p>
                        <div className={productcss.filter}>
                            {!isMobileScreen ?
                                <div className={productcss.sortContent}>
                                    <span>{t('Sort By')}</span>
                                    <form onChange={handleSubmit(getData)}>
                                        <select {...register("sorting")} defaultValue={"sort"}>
                                            <option value="sort">{t('sort')}</option>
                                            <option value="a-z">{t('Sort By Name A to Z')}</option>
                                            <option value="z-a">{t('Sort By Name Z to A')}</option>
                                            <option value="low-high">{t('Price Low to High')}</option>
                                            <option value="high-low">{t('Price High to Low')}</option>
                                        </select>
                                    </form>
                                </div> : ''}

                            <div className={productcss.view}>
                                <button onClick={() => setIsActive(!isActive)} className={!isActive ? productcss.isactive : productcss.button} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g id="layout-list" transform="translate(-2.25 -2.25)">
                                            <path id="Rectangle_1973" data-name="Rectangle 1973" d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z" transform="translate(3 14.37)" fill="#333f48" />
                                            <path id="Rectangle_1974" data-name="Rectangle 1974" d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z" transform="translate(3 3)" fill="#333f48" />
                                            <path id="Rectangle_1973-2" data-name="Rectangle 1973" d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z" transform="translate(14.79 14.369)" fill="#333f48" />
                                            <path id="Rectangle_1974-2" data-name="Rectangle 1974" d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z" transform="translate(14.79 3)" fill="#333f48" />
                                        </g>
                                    </svg>{t('Grid')}</button>
                                <button onClick={() => setIsActive(!isActive)} className={isActive ? productcss.isactive : productcss.button}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g id="layout-list" transform="translate(-2.25 -2.25)">
                                            <path id="Rectangle_1973" data-name="Rectangle 1973" d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z" transform="translate(3 14.37)" fill="#72797e" />
                                            <path id="Rectangle_1974" data-name="Rectangle 1974" d="M-.083-.75H6.794a.683.683,0,0,1,.667.7V7.183a.683.683,0,0,1-.667.7H-.083a.683.683,0,0,1-.667-.7V-.052A.683.683,0,0,1-.083-.75ZM6.127.645H.583v5.84H6.127Z" transform="translate(3 3)" fill="#72797e" />
                                            <path id="Line_1" data-name="Line 1" d="M7.776.645H-.083a.683.683,0,0,1-.667-.7.683.683,0,0,1,.667-.7h7.86a.683.683,0,0,1,.667.7A.683.683,0,0,1,7.776.645Z" transform="translate(13.807 4.034)" fill="#72797e" />
                                            <path id="Line_2" data-name="Line 2" d="M7.776.645H-.083a.683.683,0,0,1-.667-.7.683.683,0,0,1,.667-.7h7.86a.683.683,0,0,1,.667.7A.683.683,0,0,1,7.776.645Z" transform="translate(13.807 9.202)" fill="#72797e" />
                                            <path id="Line_3" data-name="Line 3" d="M7.776.645H-.083a.683.683,0,0,1-.667-.7.683.683,0,0,1,.667-.7h7.86a.683.683,0,0,1,.667.7A.683.683,0,0,1,7.776.645Z" transform="translate(13.807 15.403)" fill="#72797e" />
                                            <path id="Line_4" data-name="Line 4" d="M7.776.645H-.083a.683.683,0,0,1-.667-.7.683.683,0,0,1,.667-.7h7.86a.683.683,0,0,1,.667.7A.683.683,0,0,1,7.776.645Z" transform="translate(13.807 20.571)" fill="#72797e" />
                                        </g>
                                    </svg>{t('List')}</button>
                            </div>
                        </div>
                    </div>
                    <div className={!isActive ? productcss.bookContent : productcss.cardListView}>
                        {sorteditem.map((product, index) => {
                            return (
                                <div key={index} className={!isActive ? productcss.bookCard : productcss.bookCardListView}>
                                    <div className={productcss.cardImg}>
                                        <Link to={`/Books/${product.id}`}>
                                            <img src={product.img} alt='Trending book' />
                                        </Link>
                                        <svg onClick={() => { AddToWishlist(product.title, product.author, product.price, product.img) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" className={productcss.whishlistSvg}>
                                            <path id="ic_wish-list" d="M4.779,1.992A3.775,3.775,0,0,1,7.456,3.121l.036.037.034-.035a3.738,3.738,0,0,1,5.356,0,3.863,3.863,0,0,1,1.109,2.828,4.6,4.6,0,0,1-1.354,3.066l0,0-4.724,4.8a.584.584,0,0,1-.835,0l-4.724-4.8,0,0A4.6,4.6,0,0,1,.993,5.949,3.863,3.863,0,0,1,2.1,3.12,3.775,3.775,0,0,1,4.779,1.992Zm2.713,2.62a.586.586,0,0,1-.42-.178l-.455-.468a2.57,2.57,0,0,0-3.679,0A2.665,2.665,0,0,0,2.174,5.92,3.357,3.357,0,0,0,3.188,8.172l4.3,4.372,4.3-4.372A3.357,3.357,0,0,0,12.81,5.92a2.665,2.665,0,0,0-.764-1.951,2.57,2.57,0,0,0-3.681,0l-.453.466A.586.586,0,0,1,7.492,4.612Z" transform="translate(-0.992 -1.992)" fill="#333f48" />
                                        </svg>
                                    </div>
                                    <div className={productcss.cardContent}>
                                        <p className={productcss.title}>{t(product.title)}</p>
                                        <p className={productcss.author}>{t(product.author)} </p>
                                        <p className={productcss.rating}><Rating size={15} fillColor='orange' emptyColor='gray' /></p>
                                        <p className={productcss.price}>{t('LBP')} {t(product.price)}</p>

                                        <button onClick={() => { AddToCart(product.title, product.author, product.price, product.img) }} className={productcss.cartBtn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                <g id="shopping-cart" transform="translate(0 -0.001)">
                                                    <path id="Union_4" data-name="Union 4" d="M24,29.217A2.669,2.669,0,1,1,26.666,32,2.728,2.728,0,0,1,24,29.217Zm-14.667,0A2.728,2.728,0,0,1,12,26.436,2.785,2.785,0,0,1,12,32,2.729,2.729,0,0,1,9.334,29.217Zm-.4-8.924L6.708,8.678a.5.5,0,0,1-.022-.115L5.576,2.783H1.335A1.363,1.363,0,0,1,0,1.391,1.359,1.359,0,0,1,1.335,0H6.667a1.343,1.343,0,0,1,1.3,1.115L9.095,6.957H30.666a1.309,1.309,0,0,1,1.029.5,1.435,1.435,0,0,1,.281,1.146L29.844,20.281c-.006.006-.006.006-.006.012a4.043,4.043,0,0,1-3.917,3.359H12.855A4.038,4.038,0,0,1,8.935,20.293Zm2.615-.545a1.345,1.345,0,0,0,1.333,1.121H25.921a1.344,1.344,0,0,0,1.3-1.115L29.052,9.738H9.628Z" transform="translate(0 0.001)" fill='#fff' />
                                                </g>
                                            </svg>{t('ADD TO CART')}
                                        </button>

                                    </div>
                                </div>)
                        })}
                    </div>
                    {
                        isMobileScreen ? <div className={productcss.mobileSort}>
                            <button className={productcss.mobileFilterBtn}>
                                <svg className={productcss.mobileFilterBtnSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.084 20">
                                    <path id="ic-filter" d="M93.379,115.238a.628.628,0,0,1-.374-.122l-3.58-1.879a.6.6,0,0,1-.249-.483v-7.34l-6.033-9.248a.586.586,0,0,1-.1-.322.615.615,0,0,1,.622-.6H99.508a.63.63,0,0,1,.545.312.587.587,0,0,1-.021.617L94,105.413v9.22a.591.591,0,0,1-.125.363.63.63,0,0,1-.5.242Zm-.622-1.813v-8.187a.586.586,0,0,1,.1-.326l5.522-8.465H84.8l5.524,8.469a.576.576,0,0,1,.1.322v7.214Z" transform="translate(-83.047 -95.238)" fill="#333f48" />
                                </svg>Filter</button>
                            <button className={productcss.mobileSortBtn} onClick={() => { setIsSort(!isSort) }}>
                                <svg className={productcss.mobileFilterBtnSvg} fill="#333f48" version="1.1" id="Capa_1"
                                    viewBox="0 0 490 490" space="preserve">
                                    <g>
                                        <polygon points="85.877,154.014 85.877,428.309 131.706,428.309 131.706,154.014 180.497,221.213 217.584,194.27 108.792,44.46 
		0,194.27 37.087,221.213 	"/>
                                        <polygon points="404.13,335.988 404.13,61.691 358.301,61.691 358.301,335.99 309.503,268.787 272.416,295.73 381.216,445.54 
		490,295.715 452.913,268.802 	"/>
                                    </g>
                                </svg>Sort By</button>
                        </div> : ''
                    }
                    {isSort ?
                        <div className={productcss.mobileSortContent}>
                            <span onClick={() => { setIsSort(!isSort) }}>Sort By</span>
                            <form onChange={handleSubmit(getData)} className={productcss.sortForm}>
                                <label className={productcss.sortBy}>
                                    <input className={productcss.sortByInput} {...register("sorting")} type="radio" defaultValue="sort" />sort</label>
                                <label className={productcss.sortBy}>
                                    <input className={productcss.sortByInput} {...register("sorting")} type="radio" value="a-z" />Name A to Z</label>
                                <label className={productcss.sortBy}>
                                    <input className={productcss.sortByInput} {...register("sorting")} type="radio" value="z-a" />Name Z to A</label>
                                <label className={productcss.sortBy}>
                                    <input className={productcss.sortByInput} {...register("sorting")} type="radio" value="low-high" />Price Low to High</label>
                                <label className={productcss.sortBy}>
                                    <input className={productcss.sortByInput} {...register("sorting")} type="radio" value="high-low" />Price High to Low</label>
                            </form>
                        </div> : ''}
                </div>
            </div>
        </div>
    )
}



