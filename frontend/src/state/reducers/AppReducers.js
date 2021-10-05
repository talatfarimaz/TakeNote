const INITIAL_APP_STATE = {
    title: "First Screen",
    leftMenuOpenState: false
};

export default (state = INITIAL_APP_STATE, action) => {
    switch (action.type) {
        case "SET_PAGE_TITLE":
            return {...state, title: action.payload}
        case  "LEFT_MENU_OPEN_STATE":
            return {...state, leftMenuOpenState: action.payload}
        default:
            return state;
    }
}