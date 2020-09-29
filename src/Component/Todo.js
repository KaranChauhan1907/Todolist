import React from 'react';
import "../layout/Todo.css";
import {List , ListItem,ListItemText,Button} from '@material-ui/core';
import db from '../firebase';
import DeleteIcon from '@material-ui/icons/Delete';
function Todo(props) {
    return (
        <div className = "todo_list">
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="ckp" />
                    <DeleteIcon onClick={event => db.collection("todos").doc(props.todo.id).delete()}>Delete</DeleteIcon>
                </ListItem>
            </List>
        </div>
    )
}

export default Todo;