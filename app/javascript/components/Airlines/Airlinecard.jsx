import React from 'react'

import {Wrapper, Container, Image, Box, Title} from './styles/Airlines.styled'

function Airlinecard({airline}) {

const { name} = airline
    return (
        <Wrapper>
            <Container direction="row">
                <Box>
                   
                </Box>
               
                <Box>
                    <Title>{name}</Title>
                </Box>
            </Container>
        </Wrapper>
    )
}

export default Airlinecard
