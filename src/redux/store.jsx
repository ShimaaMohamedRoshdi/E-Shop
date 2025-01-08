
import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from './cartSlice'
import productSlice from './productSlice'
import wishlistReducer from './WishlistSlice';
const store = configureStore({
    reducer: {
        cart: cartSlice,      
        product: productSlice,
        
    
        wishlist: wishlistReducer
    }
});

export default store;
