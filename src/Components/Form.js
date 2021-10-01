import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { todoActions } from '../Controllers/actions/todoActions'
const Form = (props) => {
  
  var { date, day, dayNR, dayName, month, monthNR, monthName, year } = props

  const [ task , setTask ] = useState('')
  
  const handleTask = (e) =>{
    setTask(e.target.value)
  }
console.log(props)
  const handleSubmitTask = (e) =>{
    e.preventDefault()
    props.addTodo(task,date)
    setTask('')
  }

  return (
    <form className="form" onSubmit={(e)=>{handleSubmitTask(e)}}>
        <div className="form__field">
            <FontAwesomeIcon icon={faTasks} />
            <input type="text" name="task" placeholder="Add a task..." onChange = {(e)=>{handleTask(e)}} value={task}/>
        </div>
        <button>Add</button>
    </form>
  );
}

const mapStateToProps = (state) =>({
  ...state.date
})


export default connect(mapStateToProps, todoActions )(Form);