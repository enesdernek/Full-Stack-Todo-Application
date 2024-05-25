import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

function PageNotFound() {
    return (
        <div>
            <Container>
                <Segment size="massive" inverted color='red' textAlign="center">
                    Aradığınız sayfa bulunamadı            </Segment>
            </Container>
        </div>
    )
}

export default PageNotFound