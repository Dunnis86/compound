import React, { useState } from 'react';
import styled from 'styled-components'
import InfoSection from '../components/InfoSection'
import Button from '../components/Button'

const H1 = styled.h1`
  font-weight: lighter;
  font-size: 52px;
  letter-spacing: -0.03em;
  color: black;
  justify-content: left;
  margin-bottom: 2rem;
  @media(max-width: 800px){
        font-size: 42px;
        margin-bottom: 1rem;
    }
`;

const P = styled.p`
    margin-bottom: 2rem;
`;

const Form = styled.form`
    top: 6rem;
    height: 25rem;
    width: 30%;
    padding: 0;
    z-index: 10;
    justify-self: left;
    @media(max-width: 800px) {
        width: 100%;
    }
`;

const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #b4becb;
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    &:focus {
        outline: none;
  }
`;

const TextArea = styled.textarea`
    border: 0;
    border-bottom: 1px solid #b4becb;
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    &:focus {
        outline: none;
  }
`;


export default function SectionContact () {
    const [allValues, setAllValues] = useState({
        name: '',
        email: '',
        message: ''
     });
    const handleInputChange = (event) => {
        setAllValues({...allValues, [event.target.name]: event.target.value})
    };

    const encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...allValues })
      }
      fetch("/", options)
      .then(function (response) {
        window.location.assign('/contact-thanks/');
      })
      .catch(function (error) {
        console.log(error);
      });
    };
    return (
        <InfoSection>
            <H1>Contact</H1>
            <P>Please use the form to reach out if you have any questions.</P>
            <Form name='contact' data-netlify="true" onSubmit={handleSubmit}>
                <label htmlFor="contact-form-name">Name</label>
                <Input type="text" name="name" value={allValues.name} onChange={handleInputChange}/>
                <label htmlFor="contant-form-email">Email address</label>
                <Input type="email" name="email" value={allValues.email} onChange={handleInputChange}/>
                <label htmlFor="contant-form-message">Message</label>
                <TextArea name="message" value={allValues.message} onChange={handleInputChange} />
                <Button type="submit">Send Message</Button>
            </Form>
        </InfoSection>
    );
}

