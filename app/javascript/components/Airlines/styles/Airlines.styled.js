import styled from 'styled-components';

export const Wrapper = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
border-radius: 20px;
padding: 1rem;
margin:1rem;
flex:1;
`
export const Container =styled.div`
display:flex;
flex-direction:${({direction})=>direction};
padding: 0.5rem;

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
justify-content:center;
align-items: center;
`
export const Header =styled.div`
display: flex;
align-items: center;
    justify-content: center;
`

export const  Image =styled.div`
`

export const Title =styled.p`
color: blueviolet;
margin-bottom: 0.4rem;
font-size: 12px;
font-weight: 400;

a {
 text-decoration: none;
}
`
export  const Subtilte = styled(Title)`
font-size: 10px;
margin: 0.2rem 0rem;
font-weight: 400;
`
