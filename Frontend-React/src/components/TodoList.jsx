import React, { useEffect } from 'react'
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableFooter,
    TableCell,
    TableBody,
    Button,
    Icon,
    Table,
} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../redux/slices/todoSlice'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import "../style/TodoList.css"
import Todo from './Todo'
import { HeaderContent, Header, Segment } from 'semantic-ui-react'
import { loginSuccess } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';





function TodoList() {

    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todos.todos)

    const user = useSelector((state) => state.auth.user)



    const navigate = useNavigate()

    const addTodo = () => {
        navigate(`/addtodo/` + user.userName)

    }



    useEffect(() => {
        if (user && user.userName) {
            dispatch(getAllTodos(user.userName))
        }
    }, [todos])

    return (
        <div>

            {
                todos &&

                <Segment>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='list alternate' circular />
                        <HeaderContent>Todo listesi</HeaderContent>

                    </Header>



                </Segment>
            }




            <Table >
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell />
                        <TableHeaderCell>Todo İsmi</TableHeaderCell>
                        <TableHeaderCell>Yapıldı mı</TableHeaderCell>
                        <TableHeaderCell>Güncelle</TableHeaderCell>
                        <TableHeaderCell>Sil</TableHeaderCell>


                    </TableRow>
                </TableHeader>

                {
                    todos && todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} />
                    ))
                }



                <TableFooter fullWidth>
                    <TableRow>
                        <TableHeaderCell />
                        <TableHeaderCell colSpan='4'>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'
                                onClick={addTodo}
                            >
                                <Icon name='plus' /> Add Todo
                            </Button>
                            <Button color="red" size='small'>Hepsini Sil</Button>

                        </TableHeaderCell>
                    </TableRow>
                </TableFooter>
            </Table>

        </div>




    )
}

export default TodoList