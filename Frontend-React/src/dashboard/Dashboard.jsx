import React from 'react'
import { MenuItem, GridColumn, Grid, Menu, Segment, Container } from 'semantic-ui-react'
import Login from '../components/Login'
import TodoList from '../components/TodoList'

/*
<GridColumn width={4}>
                    <Menu fluid vertical tabular>
                        <MenuItem

                        />
                        Todo Page 1
                        <MenuItem

                        />
                        Todo Page 2

                        <MenuItem

                        />
                        Todo Page 3

                        <MenuItem

                        />
                    </Menu>
                </GridColumn>
*/


function Dashboard() {
    return (

        <Container>
            <Grid>


                <GridColumn stretched width={16}>
                    <TodoList />
                </GridColumn>
            </Grid>
        </Container>

    )
}

export default Dashboard