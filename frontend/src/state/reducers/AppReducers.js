import * as actionTypes from "../actionTypes"

const INITIAL_APP_STATE = {
    title: "First Screen",
    leftMenuOpenState: false,
    notesListPreview: true,
};

export default (state = INITIAL_APP_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_PAGE_TITLE:
            return {...state, title: action.payload}
        case  actionTypes.LEFT_MENU_OPEN_STATE:
            return {...state, leftMenuOpenState: action.payload}
        case  actionTypes.NOTES_LIST_PREVIEW:
            return {...state, notesListPreview: action.payload}
        default:
            return state;
    }
}