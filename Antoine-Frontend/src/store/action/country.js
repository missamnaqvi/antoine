import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAboutus, fetchBookByLanguage, fetchBooks, fetchCartData, fetchCategories, fetchCountry, fetchDeals, fetchFooter, fetchMegamenu, fetchMenu, fetchMusic, fetchProductsListing, fetchService, fetchToys, fetchWhishlistData } from "../../api/countryApi";

/**
 * Get All country
 */
export const getcountry = createAsyncThunk("country/getcountry", async () => {
    const { data } = await fetchCountry();
    return data;
});

export const getMenu = createAsyncThunk("menu/getmenu", async () => {
    const { data } = await fetchMenu();
    return data;
});

export const getFooter = createAsyncThunk('footer/getFooter',
    async () => {
        const { data } = await fetchFooter()
        return data
    }
)

export const getAboutus = createAsyncThunk('about/getAboutus',
    async () => {
        const { data } = await fetchAboutus()
        return data
    }
)

export const getService = createAsyncThunk('services/getService',
    async () => {
        const { data } = await fetchService()
        return data
    }
)
export const getDeals = createAsyncThunk('deals/getDeals',
    async () => {
        const { data } = await fetchDeals()
        return data
    }
)
export const getBooks = createAsyncThunk('book/getBooks',
    async () => {
        const { data } = await fetchBooks()
        return data
    }
)
export const getBookByLanguage = createAsyncThunk('book/getbookbylanguage',
    async () => {
        const { data } = await fetchBookByLanguage()
        return data
    }
)
export const getMusic = createAsyncThunk('music/getMusic',
    async () => {
        const { data } = await fetchMusic()
        return data
    }
)
export const getToys = createAsyncThunk('toys/getToys',
    async () => {
        const { data } = await fetchToys()
        return data
    }
)
//fetchCategories
export const getCategories = createAsyncThunk('Categories/getCategories',
    async () => {
        const { data } = await fetchCategories()
        return data
    }
)
export const getProductsListing = createAsyncThunk('ProductsListing/getProductsListing',
    async () => {
        const { data } = await fetchProductsListing()
        return data
    }
)

export const getMegaMenu = createAsyncThunk('mega/getmagamenu',
    async () => {
        const { data } = await fetchMegamenu()
        return data
    }
)
export const getCartData = createAsyncThunk('cart/getCart',
    async () => {
        const { data } = await fetchCartData()
        return data
    }
)
export const getWishlist = createAsyncThunk('whishlist/getWhishlist',
    async () => {
        const { data } = await fetchWhishlistData()
        return data
    }
)