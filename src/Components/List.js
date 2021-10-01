import { useEffect } from 'react'
import ListItem from "./ListItem";
import { connect } from 'react-redux'

const List = (props) => {
  const { todos, pinned } = props

  useEffect(()=>{
    console.log(pinned)
  },[todos,pinned])

  return (
    <div className="list">
        <div className="list__top-task">
        {pinned.map(todo =>{
            return <ListItem key={todo.id} task={todo} />
          })}
        </div>
        {todos.map(todo =>{
            return <ListItem key={todo.id} task={todo} />
          })}
    </div>
  );
}

const mapStateToProps = state => ({
  ...state.todo
})

export default connect(mapStateToProps,{})(List);
