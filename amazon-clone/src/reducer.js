import { useEffect } from "react";

const getLocalCartData = () => {
    let newcartData = localStorage.getItem('Basket');

    if(newcartData!==[] || newcartData==undefined){
        return JSON.parse(newcartData);
    }
    else{
        return [];
    }
}

export const initialState = {
    basket: getLocalCartData(),
    user:null
};

// Selector
export const getBasketTotal = (basket) => 
basket?.reduce((amount,item) => item.price + amount , 0);

const reducer = (state, action) => {

    //console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if(index>=0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(
                    `Cant't remove product (id: ${action.id}) as its not in basket`
                )
            }

            console.log("Reducer: ",newBasket.length);
            return{
                ...state,
                basket: newBasket,
            };
        
        case 'SET_USER':
                return{
                    ...state,
                    user:action.user
                };
        case 'CART_EMPTY':
                return{
                    basket:[]
                };
        default:
            return state;

    }
};

export default reducer;