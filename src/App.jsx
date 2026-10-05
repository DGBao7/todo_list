import { useState } from "react";
import "./App.css"
import { _submit } from "./gangs/todo_list.jsx"
import { _delete } from "./gangs/todo_list.jsx";

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
    todo_list , _set_todo_list
  }
)
{
  return (
    <div className="todo_list">
      {todo_list.map(
        (todo , key) =>
          <div className="todo" key={key}>
            {todo}
            <Trash 
              key_index={key}
              todo_list={todo_list}
              _set_todo_list={_set_todo_list}
            />
          </div>
      )}
    </div>
  )
}

function PopUp(
  {
    _delete , _set_show_popup
  }
)
{
  return (
    <div className="popup">
      <div>Xoa nhe</div>

      <button onClick={_delete}>
        OK
      </button>

      <button onClick={() => _set_show_popup(false)}>
        Cancel
      </button>
    </div>
  )
}

function Trash(
  {
    key_index , todo_list , _set_todo_list
  }
)
{
  function _confirm()
  {
    _set_show_popup(true)
  }

  function _delete_confirm()
  {
    _delete(
      key_index , todo_list , _set_todo_list
    )

    _set_show_popup(false)
  }

  const [show_popup , _set_show_popup] = useState(false)

  return (
    <div className="trash">
      <button onClick={_confirm}>
        🗑️
      </button>

      {show_popup &&
        <PopUp 
          _delete={_delete_confirm}
          _set_show_popup={_set_show_popup}
        />
      }
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
        _set_todo_list={_set_todo_list}
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