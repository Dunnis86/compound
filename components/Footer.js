import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.section`
    box-shadow: 0 50vh 0 50vh #000;
    background-color: rgb(0,0,0);
    border: 0;
    margin: 0;
    padding-top: 4rem;
    padding-bottom: 3rem;
    width: 100%;
    @media(max-width: 800px){
        padding-top: 2rem;
        padding-bottom: 2rem;
        text-align: center;    
    }
`;

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: left;
    padding: 2rem 20rem;
    @media(max-width: 800px){
        padding: 2rem;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;

const NavItem = styled.ul`
    line-height: 2.5;
`;

const NavListItem = styled.li`
    list-style: none;
    a {
        padding: 2rem;
        color: white;        
    }
    a:hover {
        color: grey;
        font-weight: solid;
    }
`;

const P = styled.p`
    font-size: 1.2rem;
    color: white;
    margin-bottom: 20px;
`;


const Footer = (props) => (
    <Wrapper>
        <Div>
            <P>
                Compound 2021
            </P>
            <NavItem>
                <NavListItem><Link href="/about"><a>About</a></Link></NavListItem>
                <NavListItem><Link href="/investor"><a>Investor</a></Link></NavListItem>
                <NavListItem><Link href="/contact"><a>Contact</a></Link></NavListItem>
            </NavItem>
            
        </Div>
    </Wrapper>
);

export default Footer;