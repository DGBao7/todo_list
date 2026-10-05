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

export function _submit(
    e ,
    text , _set_text ,
    todo_list , _set_todo_list
)
{
    e.preventDefault();

    if (_check_length(todo_list))
    {
        _set_todo_list([...todo_list , text])
        _set_text("")
    }
}