import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faThList } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { todoActions } from '../Controllers/actions/todoActions'

const ListItem = (props) => {
  const { id, completed, task, note, date } = props.task
  const { todos, pinned, isPinned, pinTodo, unpinTodo, startEdit, handleCompleted,handleRemove } = props
  const [isMenuShow,setIsMenuShow] = useState(false)


  const handleOpen = () =>{
    setIsMenuShow(!isMenuShow)
  }

  return (
    <div className="list__item">
        <FontAwesomeIcon icon={faThumbtack} className="list__item-pin"/>
        <div className="list__item-body">
            <div className="list__completed-btn" >
              {completed 
                ? <FontAwesomeIcon className="list__item-completed" icon={faCheckDouble} />
                : <FontAwesomeIcon className="list__item-pending" icon={faTimes} />
              }
            </div>
            <div className="list__item-text">
              <p className="list__item-task">{task}</p>
              <p className="list__item-testimonials">{note}</p>
            </div>
        </div>
        <div className="list__item-date">{date}</div>
        <FontAwesomeIcon icon={faThList} className="list__item-dropdown" onClick = {()=>{handleOpen()}}/>
        {isMenuShow && <div className="list__item-dropdown-menu">
            {!isPinned
              ? <div className="list__item-dropdown-menu-item" 
                  onClick={(e)=>{
                  pinTodo(id, todos, pinned)
                  setIsMenuShow(false)
                  }}>
                  <FontAwesomeIcon icon={faThumbtack} />
                <span>Pin to top</span>
                </div>
              : <div className="list__item-dropdown-menu-item" 
                  onClick={(e)=>{
                  unpinTodo(pinned,todos)
                  setIsMenuShow(false)
                  }}>
                  <FontAwesomeIcon icon={faThumbtack} />
                  <span>Unpin</span>
                </div>}
            <div className="list__item-dropdown-menu-item" 
              onClick={(e)=>{
                handleCompleted(id, todos)
                setIsMenuShow(false)
              }}>
              {completed 
                ? <FontAwesomeIcon icon={faTimes} />
                : <FontAwesomeIcon icon={faCheckDouble} />
              }
              <span>
                {completed 
                ? "Uncompleted"
                : "Completed"
                }
              </span>
            </div>
            <div className="list__item-dropdown-menu-item" onClick = {()=>{startEdit(props.task)}}>
              <FontAwesomeIcon icon={faPencilAlt} />
              <span>Edit</span>
            </div>
            <div className="list__item-dropdown-menu-item" onClick={()=>{handleRemove(id,todos)}}>
              <FontAwesomeIcon icon={faTrash} />
              <span>Delete</span>
            </div>
        </div>}
    </div>
  );
}

const mapStateToProps = state =>({
  ...state.todo
})

export default connect(mapStateToProps, todoActions)(ListItem);