import { configureStore } from "@reduxjs/toolkit"


let state = {
    value: null,
    list: [
    ]
};

const reducer = (currentState, action ) => {
    switch (action.type) {
        case 'a':
            const listUpdated = [...currentState.list, action.payload]
            return {...currentState, list: listUpdated}
        default:
            return currentState
    }
}

export const store = configureStore(
    {
        preloadedState: state,
        reducer
    }
)