import { createSelector } from "reselect";


export const getUsersSuperSelector = createSelector( getUsers, (users) => {
    return users.filter(u => true);
} )

