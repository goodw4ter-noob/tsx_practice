import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ActionType, red, reducer } from "./reducer";

// const store = configureStore({
//     reducer: {
//         counter: reducer
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type RootDispatch = typeof store.dispatch;

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppDispatch: () => RootDispatch = useDispatch;

type State = {
    counter: {
        value: number;
    }
}

const store = configureStore<State, ActionType>({
    reducer: {
        counter: red
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppDispatch: () => RootDispatch = useDispatch;
export const useAppDispatch: () => Dispatch<ActionType> = useDispatch;
//если хотим работать с thunk
export const useAppDispatchThunk: () => ThunkDispatch<State, undefined, ActionType> & Dispatch<ActionType> = useDispatch;