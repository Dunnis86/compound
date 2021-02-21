import styled, { keyframes } from 'styled-components'
/* background-color: #16208C */


const Wrapper = styled.section`
    background-color: var(--primary-color);
    border-bottom-color: rgb(0,0,0);
    border-bottom-style: solid;
    border-bottom-width: 1px;
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    padding: 200px;
    @media(max-width: 800px){
        padding: 20px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
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
    @media(max-width: 800px){
        font-size: 42px;
        text-align: center;
        margin-bottom: 40px;
`;

const rotate = keyframes`
    0% {
        transform: translateY(80px) rotate(10deg);
    }
    100% {
        transform: translateY(60px) rotate(0deg);
    }
`;

const Imgcontainer = styled.div`
    @media(max-width: 800px){
        display: none;
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
    margin: 20px 20px 40px 0;
    @media(max-width: 800px){
        font-size: 20px;
        margin: 0 20px 40px 20px;
    }
`;

const TopSection = (props) => (
    <Wrapper>
            <Container>
                <H1>A 21<sup>st</sup> Century Pharmaceutical Company</H1>
                <Imgcontainer><Img src='capsule.png'/></Imgcontainer>
                <P>
                    We aim to leverage technology and a lean operational structure to bring quality legacy products to your local market.
                </P>
            </Container>
    </Wrapper>
)

export default TopSection;