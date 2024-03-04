import styled from "styled-components";

export const LoginPage = styled.div`
display: flex;
flex-direction: row;
`
export const ImageContainer = styled.div`
height: fit-content;
width: fit-content;
overflow: hidden;

`
export const LoginContainer = styled.div`
margin-left: 156px;
margin-top: 240px;

`
export const LoginCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 40px;
`

export const Card = styled.div`
  width: 390px;
  height: fit-content;
  margin-top: 20%;
  margin-bottom: 15%;
  border-radius: 8px;
  box-shadow: -2px 1px 15px 1px  rgba(0, 0, 0, 0.1);
  padding: 2.5em;
  box-sizing: border-box;
`

export const Frame = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const FrameText = styled.text`
font-family: "Inter", sans-serif;
font-size: x-large;
letter-spacing: 0.035cm;
font-weight: 400;
`
export const FrameSubhead = styled.span`
font-style: italic;
font-weight: 500;
font-size: 12px;
letter-spacing: 0.035cm;
`

export const CardText = styled.text`
  font-size: 22.5px;
  font-weight: 700;
  margin: 0 0 50px;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
`

export const InputDetails = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
padding: 0 0 8px;
`
export const RemLos = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
row-gap: 40px;
padding: 30px 0 20px;

`
export const Remdiv = styled.div`
display: flex;
flex-direction: row;
gap: 7px;
align-items: center;
justify-content: center;
`

export const Forgot = styled.text`
font-family: "Inter", sans-serif;
color: blue;
font-weight: 400;
`

export const Buttondiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5px;

`
export const Googlebutton = styled.button` 
  font-family: "Inter", sans-serif;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;
  gap: 0.5em;
  font-weight: 600;
  padding:  9px 19px 9px 19px;
  font-size: 14px;
  letter-spacing: 0.3px;
`;
export const Google = styled.div`
  width: 2em;
  height: 2em;
`;

export const Span = styled.span`
  color: red;
  display: flex;
  text-size-adjust: var(20px);
`;

export const Remember = styled.text`
 font-family: "Inter", sans-serif;
 font-weight: 500;
 margin-top: 1.5px;
`
export const Form = styled.form`

`
export const Password = styled.div`
margin-top: 20px;
`
export const Email = styled.div`

`