export function  fetchWeather(city) {
    return function (dispatch) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?appid=284aad66ba3aee4cbe1ddf1921068ef2&id=${city}`)
        .then( res => {
                return res.json();
        })
        .then(JSONres => {
            dispatch({
                type: "FETCH_WEATHER",
                payload: JSONres
            })
        })
        .catch (err  => {
            console.log(err);
        })
    }
}