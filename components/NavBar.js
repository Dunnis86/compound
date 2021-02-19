import Link from 'next/link'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Navbar = styled.nav`
    z-index: 100;
    background-color: var(--primary-color);
    display: flex; 
    width: 100%;
    justify-content: space-between;
    align-items: fixed;
    ${props => {
        if (props.scrolled) return`
            transition: all 0.2s ease-in;
            position: sticky;
            top: 0;
            left: 0;
            box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 40%);
        `
    }}
`;

const Logo = styled.a`
    padding: 1em;
    a {
        font-family: "Untitled Sans",Helvetica,Arial,sans-serif;
        color: white;
        font-weight: bold;
        font-size: 20px;
    }
`;

const NavItem = styled.ul`
    padding: 1em;
    display: flex;
    
`;

const NavListItem = styled.li`
    list-style: none;
    position: relative;
`;

const A = styled.a`
    padding: 10px;
    font-family: "DIN",Helvetica,Arial,sans-serif;
    color: #fff;
    text-decoration: none;        
    &:after {
        content: "";
        position: absolute;
        top: 1em;
        height: 3px;
        width: 0%;
        left: 5%;
        background-color: rgba(255, 255, 255, 0.8);
        transition: 0.2s ease all .1s;
    }
    &:hover {
        cursor: pointer;
        &:after {
        transition: 0.2s ease all .1s;
        width: 90%;
        }
    }
`;

const NavBar = ({ href, props }) => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1 ) {
        setScrolled(true);
        }
        else {
        setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return(
        <Navbar scrolled={scrolled}>
                <Logo><Link href="/"><a>Compound</a></Link></Logo>
                    <NavItem>
                        <NavListItem><Link href="/"><A>About</A></Link></NavListItem>
                        <NavListItem><Link href="/"><A>Investor</A></Link></NavListItem>
                        <NavListItem><Link href="/contact"><A>Contact</A></Link></NavListItem>
                    </NavItem>
        </Navbar>
    )
}


export default NavBar;