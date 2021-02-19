import styled from 'styled-components'
import Button from '../components/Button'
import InfoSection from '../components/InfoSection'

const H1 = styled.h1`
  font-family: "Tiempos Headline";
  font-weight: bold;
  font-size: 52px;
  letter-spacing: -0.03em;
  color: black;
  justify-content: left;
  margin-bottom: 40px;
`;

const Form = styled.form`
    position: relative;
    top: 60px;
    height: 350px;
    width: 400px;
    padding: 0px;
    z-index: 10;
    justify-self: left;
`;

const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #b4becb;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    &:focus {
        outline: none;
  }
`;

const Label = styled.label`

`;

const TextArea = styled.textarea`
    border: 0;
    border-bottom: 1px solid #b4becb;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    &:focus {
        outline: none;
  }
`;

export default function Contact () {
    return (
        <div>
            <InfoSection>
                <H1>Contact</H1>
                <p>Please use the form to reach out if you have any questions.</p>
                <Form name="contact" method="POST" data-netlify="true">
                    <Input type="hidden" name="form-name" value="contact" />
                    <p>
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" name="name" />
                    </p>
                    <p>
                    <Label for="email">Email</Label>
                    <Input type="text" id="email" name="email" />
                    </p>
                    <p>
                    <Label for="message">Message</Label>
                    <TextArea id="message" name="message"></TextArea>
                    </p>
                    <p>
                    <Button type="submit">Send</Button>
                    </p>
                </Form>
            </InfoSection>        
        </div>
    )
}