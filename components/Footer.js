import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.section`
    background-color: rgb(0,0,0);
    border: 0;
    margin: 0;
    padding-top: 54px;
    padding-bottom: 36px;
    width: 100%;
`;

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: left;
    padding: 20px 200px;
`;

const NavItem = styled.ul`
    line-height: 2.5;
`;

const NavListItem = styled.li`
    list-style: none;
    a {
        padding: 20px;
        font-family: "Untitled Sans",Helvetica,Arial,sans-serif;
        color: white;        
    }
    a:hover {
        color: grey;
        font-weight: solid;
    }
`;

const P = styled.p`
    font-family: "Untitled Sans",Helvetica,Arial,sans-serif;
    font-size: 18px;
    color: white;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50px;
    height: 20px;
    img {
        height: auto;
        margin-left: 10px;
        -webkit-filter: invert(1);
         filter: invert(1);
    }
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
            <Icons>
                <img src={'facebook.png'} alt="Facebook logo"/>
                <img src={'linkedin.png'} alt="LinkedIn logo"/>
                <img src={'twitter.png'} alt="Twitter logo"/>
            </Icons>
        </Div>
    </Wrapper>
);

export default Footer;