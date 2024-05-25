import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Label, Input, Grid, GridRow, GridColumn, Checkbox, Segment, Button, } from 'semantic-ui-react'
import { useSelector, useDispatch } from "react-redux"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { getTodoById, updateTodoById } from '../redux/slices/todoDetailSlice'
import "../style/TodoUpdate.css"


function TodoUpdate() {

    const { id } = useParams()

    const todo = useSelector((state) => state.todo.todo)

    const token = useSelector((state) => state.auth.token)

    const [myTodoName, setMyTodoName] = useState("")
    const [myUserName, setMyUserName] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getTodoById({ id, token }))

        if (todo != null && todo != undefined) {
            setMyTodoName(todo.todoName)
            setMyUserName(todo.userName)
        }


    }, [todo])

    const onSubmit = (values) => {


        const todo = {
            id: id,
            todoName: values.myTodoName,
            userName: myUserName,
            done: values.toggle,
        }

        console.log(todo)

        dispatch(updateTodoById({ todo, token }))

        navigate("/todolist")

    }

    const validate = (values) => {
        let errors = {
        }

        if (!values.myTodoName) {
            errors.myTodoName = 'Zorunlu';
        } else if (values.myTodoName.length > 128) {
            errors.myTodoName = '128 karakterden fazla giremezsiniz !';
        }
        return errors;



    }

    return (

        <div>

            <Container>
                <Formik
                    initialValues={{ myTodoName, toggle: false }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        (props) => (
                            <Form >
                                <ErrorMessage
                                    name="myTodoName"
                                    component="div"
                                />
                                <Grid>
                                    <GridRow>
                                        <GridColumn width={16}>

                                            <Label color="blue" size="large">Todo İsmi</Label>

                                            <Field className="name-input" type="text" name="myTodoName" />


                                            <Segment compact >

                                                <Field type="checkbox" name="toggle" />
                                                <Label style={{ marginLeft: "3px" }} color="blue" size="large">Todo Yapıldı</Label>


                                            </Segment>
                                            <Button type="submit" size="large" color="green">Onayla</Button>
                                        </GridColumn>

                                    </GridRow>

                                </Grid>


                            </Form>
                        )
                    }



                </Formik>
            </Container>







        </div >
    )
}

export default TodoUpdate