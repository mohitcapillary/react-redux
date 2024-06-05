export const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

export const decrement = () => {
    return {
        type: 'DECREMENT', 
    }
}

export const incrementByX = (incrementBy) => {
    return {
        type: 'INCREMENT_BY_X',
        incrementBy: incrementBy,
    }
}