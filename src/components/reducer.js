export const reducer = (state, action) => {
   

    if(action.type == 'INCREAMENT'){
        let updatedCart = state.item.map((curElem) => {
            if(curElem.id === action.payload) {
                return {...curElem, quantity:curElem.quantity + 1};

            }
            return curElem;
        });

        return {...state, item: updatedCart};

    } if (action.type == "GET_TOTAL"){
        let {totalItem, totalAmount }  = state.item.reduce(
            (accum, curVal) => {
                let {Price,quantity} = curlVal;
                let updatedTotalAmount = price * quantity;
                accum.totalAmount += updatedTotalAmount;
                accum.totalItem += quantity;
                return accum;
            },
            {
                totalItem: 0,
                totalAmount: 0,
            }
        );

        return{... state, totalItem};
    }

    if(action.type == 'DECREAMENT'){
        let updatedCart = state.item.map((curElem) => {
            if(curElem.id === action.payload ) {
                return {...curElem, quantity: curElem.quantity - 1};
            }
            return curElem;
            
        }).filter((curElem) => {
            return curElem.quantity !== 0;

        });
        return{...state, item: updatedCart, totalAmount, totalItem};
    }
    
    
    return state;


};

// if(action.type == "REMOVE_ITEM"){
//     return{
//         ...state,
//         item: state.item.filter((curElem) => {
//             return curElem.id !== action.payload;
//         }),
//     };
// }
// return state;