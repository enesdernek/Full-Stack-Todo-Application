import React, { useDebugValue, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addTodoByUserName } from '../redux/slices/todoSlice'
import "../style/TodoUpdate.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Container, Label, Input, Grid, GridRow, GridColumn, Checkbox, Segment, Button, } from 'semantic-ui-react'




function TodoAdd() {

    const { userName } = useParams()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [myTodoName, setMyTodoName] = useState("")

    const token = useSelector((state) => state.auth.token)

    const onSubmit = (values) => {

        const todo = {
            todoName: values.myTodoName,
            userName: userName,
            isDone: false
        }

        dispatch(addTodoByUserName({ todo, token }))

        navigate("/todolist")


    }

    useEffect(() => {

        setMyTodoName("")


    }, [])

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
        <Container>
            <Formik
                initialValues={{ myTodoName }}
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



                                        <Button style={{ marginTop: "5px" }} type="submit" size="large" color="green">Onayla</Button>
                                    </GridColumn>

                                </GridRow>

                            </Grid>


                        </Form>
                    )
                }



            </Formik>
        </Container>
    )
}

export default TodoAdd