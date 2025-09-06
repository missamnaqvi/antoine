import axios from "axios";
import { path } from "../contant";
export const fetchCountry = () => {
    return axios.get(path.getCountries);
};
export const fetchMenu = () => {
    return axios.get(path.getMenu)
}
export const fetchFooter = () => {
    return axios.get(path.topFooter)
}

export const fetchAboutus = () => {
    return axios.get(path.aboutus)
}

export const fetchService = () => {
    return axios.get(path.service)
}
export const fetchDeals = () => {
    return axios.get(path.deals)
}
export const fetchBooks = () => {
    return axios.get(path.books)
}
export const fetchBookByLanguage = () => {
    return axios.get(path.bookbylang)
}
export const fetchMusic = () => {
    return axios.get(path.music)
}
export const fetchToys = () => {
    return axios.get(path.toys)
}
export const fetchCategories = () => {
    return axios.get(path.categories)
}
export const fetchProductsListing = () => {
    return axios.get(path.productsListing)
}
export const fetchMegamenu = () => {
    return axios.get(path.megamenu)
}
export const fetchCartData = () => {
    return axios.get(path.cart)
}
export const fetchWhishlistData = () => {
    return axios.get(path.whishlist)
}