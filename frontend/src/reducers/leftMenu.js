import { LeftMenuAction } from '../actions'

const leftMenu = (state = LeftMenuAction.LEFT_MENU_OPEN, action) => {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter
    } else {
        return state
    }
}

export default leftMenu()