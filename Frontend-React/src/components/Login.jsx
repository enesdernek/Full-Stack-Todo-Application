import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderContent, Header, Container, GridRow, GridColumn, Grid, Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { } from 'semantic-ui-react'
import { loginSuccess, logoutSuccess, executeJwtAuthenticationService, getByUserNameAndPassword } from '../redux/slices/authSlice.js'
import { useNavigate } from 'react-router-dom'




function Login() {

    const user = useSelector((state) => state.auth.user)

    const token = useSelector((state) => state.auth.token)

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const control = () => {

        dispatch(executeJwtAuthenticationService({ userName, password }))


    }

    useEffect(() => {
        if (token) {
            dispatch(getByUserNameAndPassword({ userName, password, token }))

        }
    }, [token])

    useEffect(() => {
        if (user) {
            loginSuccess()
            navigate("/todolist")
        }
    }, [user])





    // useEffect(() => {

    //     token && dispatch(executeBasicAuthenticationService({ token, userName, password }));





    // }, [token])

    // useEffect(() => {
    //     if (user) {
    //         dispatch(loginSuccess())
    //         navigate("/todolist")
    //     }

    // }, [user])







    return (
        <Container textAlign='center'>

            <div>
                <Header as='h2' icon textAlign='center'>
                    <HeaderContent>Kullanıcı Girişi</HeaderContent>
                </Header>

            </div>

            <Grid>
                <GridRow>
                    <GridColumn width={16}>
                        <Input size="massive" fluid
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            action={{
                                color: 'teal',
                                labelPosition: 'left',
                                icon: 'user',
                                content: 'Username',
                            }}
                            actionPosition='left'

                        />
                    </GridColumn>
                </GridRow>

                <GridRow>
                    <GridColumn width={16}>
                        <Input size="massive" fluid type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            action={{
                                color: 'teal',
                                labelPosition: 'left',
                                icon: 'lock',
                                content: 'Password',
                            }}
                            actionPosition='left'

                        />
                    </GridColumn>
                </GridRow>

                <GridRow>
                    <GridColumn>
                        <Button onClick={() => control()} color="teal" fluid >
                            Giriş Yap
                        </Button>

                    </GridColumn>
                </GridRow>
            </Grid>





        </Container>
    )
}

export default Login