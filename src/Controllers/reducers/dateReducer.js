import { SET_DATE, SET_DAY, SET_WEEK, SET_MONTH, SET_YEAR, SET_DAY_NR, SET_MONTH_NR } from '../actions/types'

var date = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = date.getFullYear();

date.setUTCDate(date.getUTCDate() + 1 - (date.getUTCDay()||7));
// Get first day of year
var yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
// Calculate full weeks to nearest Thursday
var weekNo = Math.ceil(( ( (date - yearStart) / 86400000) + 1)/7);
// Return array of year and week number
    


var today = mm + '/' + dd + '/' + yyyy;




const initData = {
    date:today,
    dayName:days[date.getDay()],
    monthName:months[date.getMonth()+1],
    day:date.getDate(),
    month:date.getMonth() + 1,
    year:date.getFullYear(),
    weekNR:weekNo,
    dayNR:date.getDay(),
    monthNR:date.getMonth()
}

export default  (state = initData,action) => {
    switch(action.type){
        case SET_DATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}