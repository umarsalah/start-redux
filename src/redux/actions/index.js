const login = () => {
    return {
        type:'LOGGED',
    }
}
const increment = () => {
    return{
        type:'INCREMENT'
    }
}
const decrement = () => {
    return{
        type:'DECREMENT'
    }
}
const incrementByAmount = (amount) => {
    return{
        type:'INCREMENT_BY_AMOUNT',
        payload: amount,
    }
}
const reset =()=>{
    return{
        type:'RESET'
    }
}
export {login,increment,decrement,incrementByAmount,reset}