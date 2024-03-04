'use client';
import React from "react";
import Image from "next/image";
import {
  LoginPage,
  ImageContainer,
  LoginContainer,
  LoginCard,
  Frame,
  Card,
  FrameText,
  FrameSubhead,
  CardText,
  InputDetails,
  RemLos,
  Forgot,
  Buttondiv,
  Googlebutton,
  Google,
  Remember,
  Remdiv,
  Span,
  Form,
  Password
} from "./Login.style";
import img from "../../public/hero-img Container.png";
import google from "../../public/google.png";
import { Button, Input} from "infoviz-react-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
//import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from 'react-google-login';

const clientId = "1075845537715-0ai1tnmc695bk8p9p0eu7ukcsdpu5g8f.apps.googleusercontent.com";

type Inputs = {
  email: string;
  password: string;
};

const schema: ZodType<Inputs> = z.object({
  email: z.string({required_error: "Userid or Email Or Mobile Number Required"}).nonempty("Userid or Email Or Mobile Number Required"),
  password: z
    .string({required_error: "Password Required"}).nonempty("Password Required")    
});

const onSuccess = () => {
  console.log("LOGIN SUCCESS")
}

const onFailure = () => {
  console.log("LOGIN FAILED")
}

const Login = () => {
  // const { control: email, control: name, control: checkbox } = useForm();

 
  const {
    control: email, control: password, control: checkbox,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  // async function handleGoogleSignIn() {
  //   signIn('google', {callbackUrl:"http://localhost:3000/login"});
  //   signOut({callbackUrl:"http://localhost:3000/login"});
  // }

  const SubmitData = (data: Inputs) => {
    return console.log("IT WORKED" , data);
 }


  return (
    <LoginPage>
      <ImageContainer>
        <Image src={img} width={1100} height={500} alt="img" priority={false}></Image>
      </ImageContainer>
      <LoginContainer>
        <LoginCard>
          <Frame>
              <FrameText>Healthligence</FrameText>
              <FrameSubhead>Bringing Intelligence To Healthcare</FrameSubhead>
          </Frame>
          <Card>
            <CardText>Sign in to Your Account</CardText>
            <Form onSubmit={handleSubmit(SubmitData)}>
            <InputDetails>
            <Input
              placeholder="name@flowbite.com"
              control={email}
              controlName="email"
              labelName="Enter Userid or Email Or Mobile Number"
              helperText={errors.email && <Span> {errors.email.message} </Span>}
            />
            <Password>
            <Input
              placeholder="••••••••••"
              control={password}
              controlName="password"
              labelName="Password"  
              helperText={errors.password && <Span> {errors.password.message} </Span>}
            />
            </Password>
            </InputDetails>
            <RemLos>
              <Remdiv>
              <Input type="checkbox" control={checkbox} controlName="checkbox" defaultChecked color={"blue"}></Input>
              <Remember>Remember Me</Remember>
              </Remdiv>
              <Forgot>Lost Password?</Forgot>
            </RemLos>
            <Buttondiv>
            <Button type="submit" color="blue" fullSized >Login Securely</Button>
            </Buttondiv>
            </Form>
          </Card>
          {/* <Googlebutton >
              <Google>
                <Image src={google} alt="Google icon" />
              </Google>
              Sign in with Google
          </Googlebutton>  */}
          <GoogleLogin 
          clientId={clientId}
          render={renderProps => (
            <Googlebutton onClick={renderProps.onClick}>
              <Google>
                <Image src={google} alt="Google icon" />
              </Google>
              Sign in with Google
          </Googlebutton>
            // <button onClick={renderProps.onClick} >This is my custom Google button</button>
          )}
          buttonText="Sign in with Google" 
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}/>
          {/* <GoogleOAuthProvider clientId="1075845537715-0ai1tnmc695bk8p9p0eu7ukcsdpu5g8f.apps.googleusercontent.com">
          <GoogleLogin
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}/>;
          </GoogleOAuthProvider> */}
        </LoginCard> 
      </LoginContainer>
    </LoginPage>
  );
};
export default Login;