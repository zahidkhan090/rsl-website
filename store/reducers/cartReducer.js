import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART
} from '../actions/action-types/cart-actions'

const initState = {
    products: [
        {
            id: 1,
            title: "Drop Side Watch",
            price: 350,
            image: "/images/shop-item1.jpg"
        },
        {
            id: 2,
            title: "Drop Side Watch",
            price: 120,
            image: "/images/shop-item2.jpg"
        },
        {
            id: 3,
            title: "Drop Side Watch",
            price: 160,
            image: "/images/shop-item3.jpg"
        },
        {
            id: 4,
            title: "Drop Side Watch",
            price: 130,
            image: "/images/shop-item4.jpg"
        },
        {
            id: 5,
            title: "Drop Side Watch",
            price: 90,
            image: "/images/shop-item5.jpg"
        },
        {
            id: 6,
            title: "Drop Side Watch",
            price: 180,
            image: "/images/shop-item6.jpg"
        },
        {
            id: 7,
            title: "Drop Side Watch",
            price: 330,
            image: "/images/shop-item1.jpg"
        },
        {
            id: 8,
            title: "Drop Side Watch",
            price: 140,
            image: "/images/shop-item2.jpg"
        },
        {
            id: 9,
            title: "Drop Side Watch",
            price: 430,
            image: "/images/shop-item3.jpg"
        },
        {
            id: 10,
            title: "Drop Side Watch",
            price: 650,
            image: "/images/shop-item4.jpg"
        },
        {
            id: 11,
            title: "Drop Side Watch",
            price: 230,
            image: "/images/shop-item5.jpg"
        },
        {
            id: 12,
            title: "Drop Side Watch",
            price: 670,
            image: "/images/shop-item6.jpg"
        }
    ],
    addedItems:[],
    total: 0,
    shipping: 0
}

const cartReducer= (state = initState, action) => {
   
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += 1 
            return {
                ...state,
                total: state.total + addedItem.price 
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.price * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.price * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_SHIPPING){
        return {
            ...state,
            shipping: state.shipping += 6
        }
    }

    if(action.type === 'SUB_SHIPPING'){
        return {
            ...state,
            shipping: state.shipping -= 6
        }
    }

    if(action.type === RESET_CART){
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }
    
    else {
        return state
    }
}

export const initStore = (initialState = initState) => {
    return createStore(
        cartReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}