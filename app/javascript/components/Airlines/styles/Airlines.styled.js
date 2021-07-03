import styled from 'styled-components';



export const Wrapper = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
border-radius: 20px;
padding: 1rem;
margin:1rem 0;
`
export const Container =styled.div`
display:flex;
flex-direction:${({direction})=>direction};

`;

export const Rowcontainer =styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 0.5rem;

`
export const Colcontainer =styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin: 0.5rem;
`


export const Box =styled.div`
display: flex;
`
export const Header =styled.div`
display: flex;
align-items: center;
    justify-content: center;
`



export const  Image =styled.div`


`

export const Title =styled.h4`
color: blueviolet;

`
