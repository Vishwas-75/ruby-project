import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Container, Box, Title, Subtilte } from './styles/Airlines.styled'

function Airlinecard({ airline }) {

    const { name, image_url, slug, avg_score } = airline
    return (
        <Wrapper>
            <Container direction="column">

                <Box aItems='center' jContent='center'>
                    <img src={image_url} height='100px' width='100px' />
                </Box>
                <Box>
                    <Subtilte>{avg_score}</Subtilte>
                </Box>
                <Box>
                    <Title ><Link to={`/airlines/${slug}`}>{name}</Link></Title>
                </Box>

            </Container>
        </Wrapper>
    )
}

export default Airlinecard
