import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
});

export const reducer = slice.reducer;
export const actions = slice.actions;

const initState = {
    value: 0,
};

type IncAction = {
    type: 'INCREMENT',
    payload: number,
};

type DecAction = {
    type: 'DECREMENT',
    payload: number,
};

export type ActionType = IncAction | DecAction;

export const red = (state = initState, action: ActionType): typeof initState => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                ...state,
                value: state.value + action.payload,
            }

        case 'DECREMENT':
            return {
                ...state,
                value: state.value - action.payload,
            };

        default: 
            return {
                ...state
            };
    }
}