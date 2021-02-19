import Link from 'next/link'
import styled, { keyframes } from 'styled-components'


const Wrapper = styled.section`
    padding: 200px 200px 200px;
    border-bottom-color: rgb(0,0,0);
    border-bottom-style: solid;
    border-bottom-width: 1px;
`;

const Div = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    justify-content: left;  
    p {
        font-size: 18px;
    }
`;

const H1 = styled.h1`
    font-family: "Tiempos Headline";   
    font-weight: bold;
    font-size: 52px;
    letter-spacing: -.03em;
    color: black;
    justify-content: left;
    margin-bottom: 40px;       
`;

const Img = styled.div`
    height: 400px;
    img {
        height: 100%;
        padding-left: 100px;
    }

`;

const MidSection = (props) => (
    <Wrapper>
            <Div>
                <div>
                    <H1>Looking Forward</H1>
                    <p>
                        The increasing shortages of essential medicines and a movement towards re-prioritizing by
                        Pharmaceutical players portfolio for growth has
                        inspired us to find a new and modern solution
                        for pharma supply and distribution.
                    </p>
                </div>
                <Img> 
                    <img src={'archive.jpg'}/>
                </Img>
            </Div>
    </Wrapper>
);

export default MidSection;