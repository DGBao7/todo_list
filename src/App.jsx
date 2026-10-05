import { useState } from "react";
import "./App.css"
import { _submit } from "./gangs/todo_list.jsx"

function Title()
{
  return (
    <div className="title">
      Todo List
    </div>
  )
}

function Form(
  {
    text , _set_text ,
    todo_list , _set_todo_list
  }
)
{
  return (
    <form className="form" onSubmit={(e) =>
      _submit(
        e ,
        text , _set_text ,
        todo_list , _set_todo_list
      )
    }>
      <input 
        type="text"
        value={text}
        onChange={(e) => _set_text(e.target.value)} 
      />
      <button className="form_button">
        Them
      </button>
    </form>
  )
}

function PrintList(
  {
    todo_list
  }
)
{
  return (
    <div className="todo_list">
      {todo_list.map(
        (todo , key) =>
          <div className="todo" key={key}>
            {todo}
            <Trash />
          </div>
      )}
    </div>
  )
}

function Trash()
{
  return (
    <div className="trash">
      🗑️
    </div>
  )  
}

function Playground(
  {
    text , _set_text ,
    todo_list , _set_todo_list
  }
)
{
  return (
    <div className="playground">
      <Title />
      <Form 
        text={text}
        _set_text={_set_text}
        todo_list={todo_list}
        _set_todo_list={_set_todo_list}
      />
      <PrintList 
        todo_list={todo_list}
      />
    </div>
  )
}

function App()
{
  const [text , _set_text] = useState("")
  const [todo_list , _set_todo_list] = useState([])

  return (
    <div>
      <Playground 
        text={text}
        _set_text={_set_text}
        todo_list={todo_list}
        _set_todo_list={_set_todo_list}
      />
    </div>
  )
}

export default App