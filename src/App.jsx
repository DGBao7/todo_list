import { useEffect, useState } from "react";
import "./App.css"

import { _cloning, _edit, _submit } from "./gangs/todo_list.jsx"
import { _delete } from "./gangs/todo_list.jsx";
import { _mark_complete } from "./gangs/todo_list.jsx";
import { _clone_marked } from "./gangs/todo_list.jsx";
import { _count_unmarked } from "./gangs/todo_list.jsx";
import { _create_todo_list } from "./gangs/todo_list.jsx";

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
    todo_list , _set_todo_list ,
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

function Mark(
  {
    key_index , todo , todo_list , _set_todo_list
  }
)
{
  return (
    <div className="mark">
      <button
        type="button" 
        onClick={() =>
          _mark_complete(
            key_index , todo_list , _set_todo_list
          )
      }>
        {todo.state ? "☑" : "☐"}
      </button>
    </div>
  )
}


function DeletePopUp(
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
        <DeletePopUp 
          _delete={_delete_confirm}
          _set_show_popup={_set_show_popup}
          />
        }
    </div>
  )  
}

function EditPopup(
  {
    text , _set_text ,
    _save , _cancel
  }
)
{
  return (
    <div className="edit_popup">
      <div>Chinh sua</div>

      <input 
        type="text" 
        value={text}
        onChange={(e) => _set_text(e.target.value)}
      />

      <button onClick={_save}>
        Luu
      </button>

      <button onClick={_cancel}>
        Cancel
      </button>
    </div>
  )
}

function Edit(
  {
    key_index , todo , todo_list , _set_todo_list
  }
)
{
  const [show_popup , _set_show_popup] = useState(false)
  const [text , _set_text] = useState("")

  function _open()
  {
    _set_text(todo.text)
    _set_show_popup(true)
  }

  function _cancel()
  {
    _set_show_popup(false)
  }

  return (
    <div className="edit">
      <button onClick={_open}>
        🔧
      </button>

      {show_popup &&
        <EditPopup 
          text={text}
          _set_text={_set_text}
          _save={() => _edit(
            key_index , text , todo_list , _set_todo_list , _set_show_popup
          )}
          _cancel={_cancel}
        />
      }
    </div>
  )
}

function Filter(
  {
    todo_list , _set_todo_list ,
    clone , _set_clone
  }
)
{
  const [checked , _set_checked] = useState(false)

  function _click()
  {
    if (checked == false)
    {
      _cloning(
        todo_list , _set_todo_list ,
        clone , _set_clone
      )
    }
    else
    {
      _set_todo_list(clone)
    }

    _set_checked(!checked)
  }

  return (
    <div className="filter">
      {
        checked ?
        <div 
          className="filter_box checked"
          onClick={_click}
        >
        </div>
        :
        <div 
          className="filter_box"
          onClick={_click}
        ></div>
      }

      <div className="filter_text">
        Lam roi ?
      </div>
    </div>
  )
}

function Refine(
  {
    todo_list , _set_todo_list
  }
)
{
  function _delete_marked()
  {
    console.log("123")

    _set_todo_list(_clone_marked(todo_list))
  }

  return (
    <button 
      className="refine" 
      onClick={_delete_marked}
    >
      <div className="refine_text">
        Lam roi thi xoa ?
      </div>
    </button>
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
          <div className="todo">
            <Mark 
              key_index={key}
              todo={todo}
              todo_list={todo_list}
              _set_todo_list={_set_todo_list}  
            />

            <div className="todo_text">
              {todo.text}
            </div>

            <Trash 
              key_index={key}
              todo_list={todo_list}
              _set_todo_list={_set_todo_list}
            />

            <Edit 
              key_index={key} 
              todo={todo}
              todo_list={todo_list}
              _set_todo_list={_set_todo_list}
            />
          </div>
      )}
    </div>
  )
}

function Counter(
  {
    todo_list
  }
)
{
  const [counter , _set_counter] = useState(0)

  useEffect(
    () =>
    {
      function _count()
      {
        _set_counter(_count_unmarked(todo_list))
      }

      _count()
    } ,
    [todo_list]
  )

  return (
    <div className="counter">
      <div className="counter_text">
        Undone {counter}
      </div>
    </div>
  )
}

function Playground(
  {
    text , _set_text ,
    todo_list , _set_todo_list ,
    clone , _set_clone
  }
)
{
  return (
    <div className="playground">
      <Title />

      <div className="form_row">
        <Form 
          text={text}
          _set_text={_set_text}
          todo_list={todo_list}
          _set_todo_list={_set_todo_list}
        />

        <Filter 
          todo_list={todo_list}
          _set_todo_list={_set_todo_list}
          clone={clone}
          _set_clone={_set_clone}
        />

        <Refine 
          todo_list={todo_list}
          _set_todo_list={_set_todo_list}
        />

        <Counter 
          todo_list={todo_list}
        />  
      </div>

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

  const [clone , _set_clone] = useState([])
  const [todo_list , _set_todo_list] = _create_todo_list()

  return (
    <div>
      <Playground 
        text={text}
        _set_text={_set_text}
        todo_list={todo_list}
        _set_todo_list={_set_todo_list}
        clone={clone}
        _set_clone={_set_clone}
      />
    </div>
  )
}

export default App