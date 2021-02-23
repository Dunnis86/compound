import Link from 'next/link'
import styled, { keyframes } from 'styled-components'


const Wrapper = styled.section`
    padding: 0;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-gap: 1rem;
    justify-content: left;  
    @media(max-width: 800px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;

const Div = styled.div`
    z-index: 5;
    @media(max-width: 800px){
        border-bottom-color: rgb(0,0,0);
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }
`;

const H1 = styled.h2`   
    font-weight: normal;
    font-size: 52px;
    letter-spacing: -.03em;
    color: black;
    justify-content: left;
    margin: 0.5rem 0 0.5rem 0;
    @media(max-width: 800px){
        font-size: 32px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 0;
    }       
`;

const P = styled.p`
    font-size: 18;
    margin: 0 1rem 1rem 0;
    @media(max-width: 800px){
        margin: 40px;} 
`;

const Img = styled.div`
    height: 400px;
    @media(max-width: 1100px){
        height: 200px;
        padding-left: 0;
    }
    @media(max-width: 800px){
        height: 200px;
        padding-left: 0;
    }
    img {
        max-height:100%;
        @media(max-width: 800px){
            width: 100%;
            padding: 0;
            border-bottom-color: rgb(0,0,0);
            border-bottom-style: solid;
            border-bottom-width: 1px;
        }
    } 
`;

const MidSection = (props) => (
    <Wrapper>
            <Container>
                <Img> 
                    <img src={'archive.jpg'} alt='picture of an archive'/>
                </Img>
                <Div>
                    <H1>Looking Forward</H1>
                    <P>
                        The increasing shortages of essential medicines and a movement towards re-prioritizing by
                        Pharmaceutical players portfolio for growth has
                        inspired us to find a new and modern solution
                        for pharma supply and distribution.
                    </P>
                </Div>
            </Container>
    </Wrapper>
);

export default MidSection;