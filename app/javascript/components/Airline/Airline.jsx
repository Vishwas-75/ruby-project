import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { Rowcontainer, Colcontainer, Container, Box, Title, Button, Card } from '../common/styles/Common.styled'
import { ImageContainer, Header } from './styles/Airline.styled'
import { Subtilte } from '../Airlines/styles/Airlines.styled'
import Input from '../common/component/Input'

function Airline(props) {
    const [airline, setAirline] = useState({})
    const [reviews, setReviews] = useState([])
    const [review, setReview] = useState({ title: '', description: '', score: '' })
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const slug = props.match.params.slug
        const url = `/api/v1/airlines/${slug}`

        axios.get(url).
            then((res) => {
                const result = res.data.data.attributes
                const resultReview = res.data.included || []
                const extractedReview = resultReview.map((review) => review.attributes)
                setAirline({ ...result })
                setReviews([...extractedReview])
            }
            ).
            catch((res) => console.log(res.err))

    }, [])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setReview({ ...review, name: value })

    }
    return (
        <React.Fragment>
            <Colcontainer>
                <Header >
                    <ImageContainer>
                        <img src={airline.image_url} width='100px' height='100px' />
                    </ImageContainer>
                </Header>
                <Rowcontainer style={{ marginTop: '3.5rem' }} jContent='space-around'>
                    <Box><Title size={'15px'}>{airline.name}</Title></Box>
                    <div style={{ flexGrow: 0.6 }} />
                    <Box><Button onClick={() => setOpen(true)}> Add Review </Button></Box>

                </Rowcontainer>
                <Rowcontainer aItems='center' jContent='center'>
                    <Colcontainer style={{ width: '70%' }}>
                        {
                            reviews?.map((review) => <Card mB='10px'>
                                <Container direction='column'>
                                    <Title>{review.title}</Title>
                                    <Subtilte>{review.description}</Subtilte>
                                    <Subtilte>{review.score}</Subtilte>
                                </Container>
                            </Card>)
                        }
                    </Colcontainer>
                </Rowcontainer>

            </Colcontainer>
            <Modal show={open} onHide={() => setOpen(false)}>
                <Input
                    name='title'
                    label='Title'
                    onChange={handleChange}
                    value={review.title}
                    type='text'
                />
                <Input
                    name='description'
                    label='Description'
                    onChange={handleChange}
                    value={review.description}
                    type='text'
                />
            </Modal>
        </React.Fragment>
    )
}

export default Airline
