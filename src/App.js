import './styles/themes/theme.scss'
import React,{useState} from 'react'
import { connect } from 'react-redux'
import DatePicker from "./Components/DatePicker";
import Form from "./Components/Form";
import List from "./Components/List";
import Details from "./Components/Details";

const App = (props) => {
  const { isModify } = props
  return (
      <div className="todo">
        <div className="todo__app">
          {isModify
          ? <Details />
          : <React.Fragment>
             <DatePicker />
             <Form />
             <List />
            </React.Fragment>
          }
        </div>
      </div>
  );
}

const mapStateToProps = state => ({
  ...state.todo
})

export default connect(mapStateToProps,{})(App);
