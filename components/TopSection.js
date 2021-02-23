import styled, { keyframes } from 'styled-components'
/* background-color: #16208C */


const Wrapper = styled.section`
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    border-bottom-color: rgb(0,0,0);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    @media(max-width: 800px) {
        height: 50%;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 5rem;
    align-self: center;
    padding: 15rem;
    @media(max-width: 1200px) {
        grid-template-columns: 1fr;
    }
    @media(max-width: 800px){
        padding: 2rem;
        grid-template-columns: 1fr;
    
    }
`;

const H1 = styled.h1`
    margin-top: 2rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 80px;
    display: block;
    letter-spacing: -.03em;
    line-height: 1em;
    color: white;
    @media(max-width: 800px){
        font-size: 42px;
        text-align: center;
        margin-bottom: 40px;
`;

const rotate = keyframes`
    0% {
        transform: translateY(20px) rotate(10deg);
    }
    100% {
        transform: translateY(0px) rotate(0deg);
    }
`;

const Imgcontainer = styled.div`
    align-self: center;
    vertical-align: center;
    @media(max-width: 1200px) {
        justify-self: center;
    }
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
    font-weight: lighter;
    color: white;
    font-size: 24px;
    margin: 2rem 2rem 4rem 0;
    @media(max-width: 800px){
        font-size: 20px;
        margin: 0 2rem 2rem 2rem;
    }
`;

const TopSection = (props) => (
    <Wrapper>
            <Container>
                <H1>A 21<sup>st</sup> Century Pharmaceutical Company</H1>
                <Imgcontainer><Img src='capsule.png' alt='rotating picture of capsule'/></Imgcontainer>
                <P>
                    Compound aims to leverage technology and a lean operational structure to bring quality legacy products to your local market.
                </P>
            </Container>
    </Wrapper>
)

export default TopSection;