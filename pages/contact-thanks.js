import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'
import InfoSection from '../components/InfoSection'

const H1 = styled.h1`
  font-weight: lighter;
  font-size: 52px;
  letter-spacing: -0.03em;
  color: black;
  justify-content: left;
  margin-bottom: 40px;
  @media(max-width: 765px){
        font-size: 42px;
        margin-bottom: 20px;
    }
`;

const P = styled.p`
    margin-bottom: 2rem;
`;

const Div = styled.div`
    a {
        color: white;
    }
`;

export default function Contact (props, href) {
    return (
        <InfoSection>
            <H1>Contact</H1>
            <P>Thank you! Your form submission has been received.</P>
            <Div><Button type='submit'><Link href="/"><a>Home</a></Link></Button></Div>
        </InfoSection>        
    )
}
