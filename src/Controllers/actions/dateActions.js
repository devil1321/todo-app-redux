import { SET_DATE, SET_DAY, SET_WEEK, SET_MONTH,SET_MONTH_NR, SET_YEAR } from '../actions/types'

export const setDate = (year,month,day) => dispatch => {
    
    var date = new Date(year,month,day);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    var today = mm + '/' + dd + '/' + yyyy;

    const newData = {
        date:today,
        dayName:days[date.getDay()],
        monthName:months[date.getMonth()+1],
        day:date.getDate(),
        month:date.getMonth() + 1,
        year:date.getFullYear(),
        dayNR:date.getDay(),
        monthNR:date.getMonth()
    }

    dispatch({
        type:SET_DATE,
        payload:newData
    })
}

export const dateActions = {
    setDate
}

