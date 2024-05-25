import React, { useEffect, useState } from 'react'
import {
    TableRow,
    TableCell,
    TableBody,

} from 'semantic-ui-react'

import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodoById } from '../redux/slices/todoSlice'

function Todo({ todo }) {

    const { id, todoName, done, userName } = todo

    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.token)

    const navigate = useNavigate()

    const deleteTodo = (id) => {
        dispatch(deleteTodoById({ id, token }))
    }


    const updateTodo = (id) => {
        navigate("/updatetodo/" + id)
    }




    return (


        <TableBody>
            <TableRow>
                <TableCell collapsing>

                </TableCell>
                <TableCell>{todoName}</TableCell>
                <TableCell>{done ? "Yapıldı" : "Yapılmadı"}</TableCell>
                <TableCell>
                    <span className='update' onClick={() => updateTodo(id)}>Güncelle</span>
                </TableCell>
                <TableCell>
                    <span className='delete' onClick={() => deleteTodo(id)}>Sil</span>
                </TableCell>

            </TableRow>


        </TableBody>




    )
}

export default Todo