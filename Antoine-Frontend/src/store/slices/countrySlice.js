import { createSlice } from "@reduxjs/toolkit";
import { getAboutus, getBookByLanguage, getBooks, getCartData, getcountry, getDeals, getFooter, getMenu, getMusic, getService, getToys } from "../action/country";
const initialState = {
    country: [],
    menu: [],
    footer: [],
    aboutus: [],
    service: [],
    deals: [],
    books: [],
    bookbylang: [],
    music: [],
    toys: [],
    cart: [],
    error: null,
    loading: false,
};

export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            /** * Get All country data  */
            .addCase(getcountry.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getcountry.fulfilled, (state, action) => {
                state.loading = false;
                state.country = action.payload;
            })
            .addCase(getcountry.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // get Navigation  Menu
            .addCase(getMenu.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMenu.fulfilled, (state, action) => {
                state.loading = false;
                state.menu = action.payload;
            })
            .addCase(getMenu.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // get Footer 
            .addCase(getFooter.pending, (state) => {
                state.loading = true
            })
            .addCase(getFooter.fulfilled, (state, action) => {
                state.loading = false
                state.footer = action.payload
            })
            .addCase(getFooter.rejected, (state) => {
                state.loading = false
            })
            // get aboutus
            .addCase(getAboutus.pending, (state) => {
                state.loading = true
            })
            .addCase(getAboutus.fulfilled, (state, action) => {
                state.loading = false
                state.aboutus = action.payload
            })
            .addCase(getAboutus.rejected, (state) => {
                state.loading = false
            })
            // get services  
            .addCase(getService.pending, (state) => {
                state.loading = true
            })
            .addCase(getService.fulfilled, (state, action) => {
                state.loading = false
                state.service = action.payload
            })
            .addCase(getService.rejected, (state) => {
                state.loading = false
            })
            // get deals   
            .addCase(getDeals.pending, (state) => {
                state.loading = true
            })
            .addCase(getDeals.fulfilled, (state, action) => {
                state.loading = false
                state.deals = action.payload
            })
            .addCase(getDeals.rejected, (state) => {
                state.loading = false
            })
            // get Books 
            .addCase(getBooks.pending, (state) => {
                state.loading = true
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.loading = false
                state.books = action.payload
            })
            .addCase(getBooks.rejected, (state) => {
                state.loading = false
            })
            // get book by language 
            .addCase(getBookByLanguage.pending, (state) => {
                state.loading = true
            })
            .addCase(getBookByLanguage.fulfilled, (state, action) => {
                state.loading = false
                state.bookbylang = action.payload
            })
            .addCase(getBookByLanguage.rejected, (state) => {
                state.loading = false
            })
            //get music getMusic
            .addCase(getMusic.pending, (state) => {
                state.loading = true
            })
            .addCase(getMusic.fulfilled, (state, action) => {
                state.loading = false
                state.music = action.payload
            })
            .addCase(getMusic.rejected, (state) => {
                state.loading = false
            })
            //get toys from json server getToys is a function imported from action and toys is state variable of slice
            .addCase(getToys.pending, (state) => {
                state.loading = true
            })
            .addCase(getToys.fulfilled, (state, action) => {
                state.loading = false
                state.toys = action.payload
            })
            .addCase(getToys.rejected, (state) => {
                state.loading = false
            })
            .addCase(getCartData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCartData.fulfilled, (state, action) => {
                state.loading = false
                state.cart = action.payload
            })
            .addCase(getCartData.rejected, (state) => {
                state.loading = false
            })

    },
});
export default countrySlice.reducer;
