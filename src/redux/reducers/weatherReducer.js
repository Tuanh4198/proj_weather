const weatherInfor = (state = {weatherinfor: {}}, action) => {
    if (action.type === "FETCH_WEATHER") {
        state = {...state, weatherinfor: action.payload}
    }
    return state;
}

export default weatherInfor;