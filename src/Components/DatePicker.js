import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import React,{ useEffect, useReducer, useState } from 'react'
import { connect } from 'react-redux'
import { dateActions } from '../Controllers/actions/dateActions'


const DatePicker = (props) => {
    var { date, day, dayNR, dayName, month, monthNR, monthName, year } = props

    const initData = {
        day:true,
        month:false,
        year:false
    }

    const SET_DAY = { type:'SET_DAY' }
    const SET_MONTH = { type:'SET_MONTH' }
    const SET_YEAR = { type:'SET_YEAR' }

    const categoryReducer = (state,action) =>{
        switch(action.type){
            case 'SET_DAY':
                Object.keys(state).forEach(key =>{
                    state[`${key}`] = false
                })
                state.day = true
                return {...state}
            case 'SET_WEEK':
                Object.keys(state).forEach(key =>{
                    state[`${key}`] = false
                })
                state.week = true
                return {...state}
            case 'SET_MONTH':
                Object.keys(state).forEach(key =>{
                    state[`${key}`] = false
                })
                state.month = true
                return {...state}
            case 'SET_YEAR':
                Object.keys(state).forEach(key =>{
                    state[`${key}`] = false
                })
                state.year = true
                return {...state}
            default:
                return state
        }
    }
    const [state,dispatch] = useReducer(categoryReducer,initData)
    const [calendarState,setCalendarState] = useState(dayName) 
    
    const handleCalendarState = (state) =>{    
        if(state.day){
            setCalendarState(dayName)
        }
        else if(state.month){
            setCalendarState(monthName)
        }
        else if(state.year){
            setCalendarState(year)
        }
    }

    const handlePrevDay = () =>{
        if(day >= 1){
            props.setDate(year,monthNR,day-1)
        }
    }
    const handleNextDay = () =>{
        if(monthNR == 1 && day < 28){
            props.setDate(year,monthNR,day+1)
        }else if(monthNR !== 1 && month % 2 === 1 && day < 31){
            props.setDate(year,monthNR,day+1)
        }else if(monthNR !== 1 && month % 2 === 0 && day < 31){
            props.setDate(year,monthNR,day+1)
        }
    }

    const handlePrevMonth = () =>{
        if(monthNR >= 1){
            props.setDate(year,monthNR-1,day)
        }
    }
    const handleNextMonth = () =>{
        if(monthNR <= 9){
            props.setDate(year,monthNR+1,day)
        }
    }

    const handlePrevYear = () =>{
        props.setDate(year-1,monthNR,day)
    }
    const handleNextYear = () =>{
        props.setDate(year+1,monthNR,day)
    }

    const handleCalendarActionState = (e,state) =>{
        e.stopPropagation()
        let icon = e.target.getAttribute('data-icon')
    
        if(state.day){
            if(icon === 'chevron-left'){
                handlePrevDay()
            }
            if(icon === 'chevron-right'){
                handleNextDay()
            }
        }
        else if(state.month){
            if(icon === 'chevron-left'){
                handlePrevMonth()
            }
            if(icon === 'chevron-right'){
                handleNextMonth()
            }
        }
        else if(state.year){
            if(icon === 'chevron-left'){
                handlePrevYear()
            }
            if(icon === 'chevron-right'){
                handleNextYear()
            }
        }
    }
    const handleActive = (e) => {
        const navEls = document.querySelectorAll('.datepicker__item')
        navEls.forEach(el =>{
            el.classList.remove('active')
        })
        e.target.classList.add('active')
    }

    useEffect(()=>{
        handleCalendarState(state)
    },[props.setDate,state,date])

  return (
    <div className="datepicker">
        <div className="datepicker__nav">
            <ul className="datepicker__nav-list">
                <li className="datepicker__item active" onClick={(e)=>{
                    dispatch(SET_DAY)
                    handleActive(e)
                }}>Day</li>
                <li className="datepicker__item" onClick={(e)=>{
                    dispatch(SET_MONTH)
                    handleActive(e)
                }}>Month</li>
                <li className="datepicker__item" onClick={(e)=>{
                    dispatch(SET_YEAR)
                    handleActive(e)
                }}>Year</li>
            </ul>
        </div>
        <div className="datepicker__picker">
            <FontAwesomeIcon id="prev" icon={faChevronLeft} onClick = {(e)=>{handleCalendarActionState(e,state)}}/>
            <div className="datepicker__content">
                <h3 className="datepicker__title">{calendarState}</h3>
                <p className="datepicker__date">{monthName.slice(0,3)} {day}, {year}</p>
            </div>
            <FontAwesomeIcon id="next" className="datepicker__next" icon={faChevronRight} onClick = {(e)=>{handleCalendarActionState(e,state)}}/>
        </div>
    </div>
  );
}

const mapStateToProps = (state) =>({
    ...state.date
})

export default connect(mapStateToProps,dateActions)(DatePicker);