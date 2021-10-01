import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'

import React,{ useState } from 'react'
import { connect } from 'react-redux'
import { todoActions } from '../Controllers/actions/todoActions'

const Details = (props) => {
    const { id, completed, task, note, description, date } = props.todo
    const { todos, handleName, handleNote, handleDescription ,handleCompleted, handleRemove, stopEdit} = props
    const [isMenuShow,setIsMenuShow] = useState(false)
    const [formData,setFormData] = useState({
        name:task,
        note:note,
        description:description
    })

    const handleFocus = (e) =>{
        let fields = document.querySelectorAll('.details__field')
        fields.forEach(field=>{
            field.classList.remove('focus')
        })
        e.target.parentElement.classList.add('focus')
    }

    const handleChange = (e) =>{
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSave = (e,id,tasks) => {
        e.preventDefault()
        handleName(id,formData.name,tasks)
        handleNote(id,formData.note,tasks)
        handleDescription(id,formData.description,tasks)
        stopEdit()
    } 
    return (
        <div className="details">
        <form action="" onSubmit={(e)=>{handleSave(e,id,todos)}} className="details__form">
        <button type="submit" className="details__save" >
            <FontAwesomeIcon icon={faSave} />
            Save
        </button>
            <h2>Task Name</h2>
                <div className="details__field" onClick={(e)=>{handleFocus(e)}}>
                    <label htmlFor="">Task Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={(e) => {handleChange(e)}}/>
                </div>
                <div className="details__field" onClick={(e)=>{handleFocus(e)}}>
                    <label htmlFor="">Task Note:</label>
                    <input type="text" name="note" value={formData.note} onChange={(e) => {handleChange(e)}} />
                </div>
                <div className="details__field" onClick={(e)=>{handleFocus(e)}}>
                    <label htmlFor="">Task Description:</label>
                    <textarea name="description" value={formData.description} onChange={(e) => {handleChange(e)}}></textarea>
                </div>
        </form>
        <div className="details__nav">
            <div className="details__btn-back" onClick={()=>{stopEdit()}}>
                <span className="details__backwards">
                    <FontAwesomeIcon icon={faBackward} />
                </span>
              <span>Back</span>
            </div>
            <div className="details__btn-state" onClick={()=>{handleCompleted(id,todos)}}>
            {completed 
              ? <span className="details__uncompleted"><FontAwesomeIcon icon={faTimes} /></span>
              : <span className="details__completed"><FontAwesomeIcon  icon={faCheckDouble} /></span>
            }
              <span>
                  {completed 
                  ? "Uncompleted"
                  : "Completed"
                  }
              </span>
            </div>
            <div className="details__btn-delete" 
            onClick={()=>{
                handleRemove(id,todos)
                stopEdit()
            }}>
                <span className="details__delete">
                    <FontAwesomeIcon icon={faTrash} />
                </span>
              <span>Delete</span>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    ...state.todo
})

export default connect(mapStateToProps, todoActions)(Details)
