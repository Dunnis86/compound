import styled, { keyframes } from 'styled-components'
/* background-color: #16208C */


const Wrapper = styled.section`
    background-color: var(--primary-color);
    border-bottom-color: rgb(0,0,0);
    border-bottom-style: solid;
    border-bottom-width: 1px;
`;

const Overlay = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    padding: 200px;
`;

const H1 = styled.h1`
    margin-top: 20px;
    font-family: "Untitled Sans",Helvetica,Arial,sans-serif;    
    font-weight: bold;
    font-size: 52px;
    display: block;
    letter-spacing: -.03em;
    color: white;
    justify-content: left;       
`;

const rotate = keyframes`
    0% {
        transform: translateY(80px) rotate(10deg);
    }
    100% {
        transform: translateY(60px) rotate(0deg);
    }
`;

const Img = styled.img`
    filter: drop-shadow(8px 8px 8px black) opacity(100%);
    transform: rotate(40deg);
    animation-name: ${rotate};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
`;

const P = styled.p`
    font-family: "Untitled Sans",Helvetica,Arial,sans-serif; 
    font-weight: regular;
    color: white;
    font-size: 24px;
    margin-right: 20px;
`;

const TopSection = (props) => (
    <Wrapper>
            <Overlay>
                <H1>A 21<sup>st</sup> Century Pharmaceutical Company</H1>
                <Img src='capsule.png'/>
                <P>
                    We aim to leverage technology and a lean operational structure to bring quality legacy products to your local market.
                </P>
            </Overlay>
    </Wrapper>
)

export default TopSection;