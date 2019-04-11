
import { ADD_TO_CART,ADD_TO_LOOK,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, FINISH_LOOK, FINISH_IT} from './action-types/cart-actions'

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

export const addToLook= (id)=>{
    return{
        type: ADD_TO_LOOK,
        id
    }
}

export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const finishLook=(id)=>{
    return{
        type: FINISH_LOOK,
        id
    }
}

export const finishIt=(id)=>{
    return{
        type: finishIt,
        id
    }
}
