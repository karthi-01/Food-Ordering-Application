import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action, current(state));
      return {
        products: [...state.products, { ...action.payload, amount: 1 }],
      };
    },
    clearCart: (state) => {
      return { products: [] };
    },
    incrementProductAmount: (state, action) => {
      // console.log(action, current(state));
      return {
        products: state.products.map((product) =>
          product._id === action.payload._id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    },
    decrementProductAmount: (state, action) => {
      // let tempState = {
      //   products: state.products.map((product) =>
      //     product._id === action.payload._id 
      //       ? { ...product, amount: product.amount - 1 }
      //       : product
      //   ),
      // }; 
      // return {
      //   products: state.products.map((product) =>
      //     product._id === action.payload._id && product.amount>1
      //       ? { ...product, amount: product.amount - 1 }
      //       : product
      //   ),
      // };
      const products = state.products.map((product) =>
        product._id === action.payload._id
          ? { ...product, amount: product.amount - 1 }
          : product
      )

      return {
        products: products.filter((product)=>
          product.amount >0 
        )
      }
    },
  },
});

export const cartProducts = (state) => state.cart.products;

export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;