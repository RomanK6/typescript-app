import { Dispatch } from "redux";
import {  IBurgerAction } from "../types/burger-types";

const BURGER_IS_ACTIVE = 'ts-react-app/burger/BURGER_IS_ACTIVE'

const initialState = {
    menuIsOpen: false
}

const burgerReducer = (state = initialState, action: IBurgerAction) => {
    switch(action.type) {
        case BURGER_IS_ACTIVE:
            return {
                ...state,
                menuIsOpen: action.menuIsOpen
            }
        default: return {...state};
    }
}

export const getMenuIsOpen = (menuIsOpen: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: BURGER_IS_ACTIVE, menuIsOpen: !menuIsOpen })
    }
}

export default burgerReducer;