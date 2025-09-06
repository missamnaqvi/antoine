const URL = `${process.env.REACT_APP_API_BASEURL}`;

const countryApi = {
    getCountries: `${process.env.REACT_APP_API_BASEURL}/country`,
    getMenu: `${URL}/menu`,
    topFooter: `${URL}/footer`,
    aboutus: `${URL}/aboutus`,
    service: `${URL}/service`,
    deals: `${URL}/deals`,
    books: `${URL}/books`,
    bookbylang: `${URL}/booksByLangauge`,
    music: `${URL}/music`,
    toys: `${URL}/toys`,
    categories: `${URL}/categories`,
    productsListing: `${URL}/productsListing`,
    megamenu: `${URL}/megamenu`,
    cart: `${URL}/cart`,
    whishlist: `${URL}/whishlist`

};

// const countryRoutes = {
//   country: `/country`,
// };

export const path = {
    root: "/",
    ...countryApi,
};
