import { useEffect, useState } from "react";

function _check_length(
    todo_list
)
{
    if (todo_list.length < 7)
    {
        return true;
    }

    return false
}

function _check_blank(
    text
)
{
    if (text.length == 0)
    {
        return false
    }

    for (let i = 0; i < text.length; i ++)
    {
        if (text[i] != " ")
        {
            return true;
        }
    }

    return false
}

export function _create_todo_list()
{
    // const [todo_list , _set_todo_list] = useState(
    //     JSON.parse(
    //         localStorage.getItem("todo_list")
    //     ) || []
    // )

    // useEffect(
    //     () =>
    //     {
    //     localStorage.setItem(
    //         "todo_list" ,
    //         JSON.stringify(todo_list)
    //     )
    //     } ,
    //     [todo_list]
    // )

    const [todo_list , _set_todo_list] = useState([])

    return [todo_list , _set_todo_list]
}

export function _count_unmarked(
    todo_list
)
{
    let count = 0

    for (let i = 0; i < todo_list.length; i ++)
    {
        if (todo_list[i].state == false)
        {
            count += 1
        }
    }

    return count
}

export function _clone_marked(
    todo_list
)
{
    const update = todo_list.filter(
        (todo) => !todo.state
    )

    return update
}

export function _cloning(
    todo_list , _set_todo_list ,
    clone , _set_clone
)
{
    const update = todo_list.filter(
        (todo) => todo.state
    )

    _set_clone(todo_list)
    _set_todo_list(update)
}

export function _mark_complete(
    key , todo_list , _set_todo_list
)
{
    const update = todo_list.map(
        (todo , index) =>
            index == key ? {...todo , state: !todo.state}
            : todo
    )

    _set_todo_list(update)
}

export function _delete(
    key , todo_list , _set_todo_list
)
{
    _set_todo_list(
        todo_list.filter(
            (todo , index) => index != key
        )
    )
}

export function _edit(
    key , text , todo_list , _set_todo_list ,
    _set_show_popup
)
{
    const update = todo_list.map(
        (todo , index) =>
            index == key ?
            {...todo , text:text}
            : todo
    )

    _set_todo_list(update)
    _set_show_popup(false)
}

export function _submit(
    e ,
    text , _set_text ,
    todo_list , _set_todo_list
)
{
    e.preventDefault();

    if (_check_length(todo_list))
    {
        if (_check_blank(text))
        {
            _set_todo_list([...todo_list ,
                {
                    text: text ,
                    state: false
                }
            ])
            _set_text("")
        }
    }
}