import App from 'next/app';
import './styles.css';
import styled from 'styled-components';

export const normal = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/a438403c-3803-441d-8e65-0b95ede4d916-t.png';
export const fire = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/247e5a77-d058-43aa-9b18-e63dc0215d0c-t.png';
export const water = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/5463a963-ce9d-4e0d-ae8b-1ee7410b0598-t.png';
export const grass = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/64318bd4-68bc-420e-afa8-78514efca65b-t.png';
export const electric = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/506b5139-9674-475f-a843-a81271883ef5-t.png';
export const fighting = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/0a991b3e-849d-425f-9312-b7ac8fda78cd-t.png';
export const poison = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/c6950852-d1b0-41cd-9bff-bad235cde2ee-t.png';
export const ground = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/c4b65442-e7e2-4428-a27b-1c811c03c207-t.png';
export const flying = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/b99c65bf-8fb8-46dd-b466-49334860634c-t.png';
export const psychic = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/27d5af84-3bbe-4420-a6b9-83fe94923bc6-t.png';
export const bug = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/58650946-c659-4eb6-8409-cbe3fe89d46f-t.png';
export const rock = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/178b3e1a-1367-4969-a1b8-a83b374c8b48-t.png';
export const ghost = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/5ce9d46a-c731-4823-a849-369c0c1aa3c9-t.png';
export const ice = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/f104dba0-746e-4b74-a441-9f5c1fa00cbc-t.png';
export const dragon = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/25c3285c-65d8-48cf-8a35-894cd6c65675-t.png';
export const dark = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/7e8bb017-5475-46ff-bc62-024fd1205c17-t.png';
export const steel = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/77272078-f4d0-46cc-81ae-a77da5ec2c1d-t.png';
export const fairy = 'https://d2duuy9yo5pldo.cloudfront.net/niantic/517f7eb5-9188-484f-8fb2-11415d3692c2-t.png';

export const Container = styled.div`
  background-color: #494949;
  border-radius: 5px;
  margin-left: 5%;
  margin-right: 5%;
  align-items: center;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 15.67%;
  border-radius: 5px;
  background-color: #2a74ba;
  display: inline-grid;
  margin: 0.5%;
  cursor: pointer;
  align-items: center;

  :hover {
  box-shadow: 0 12px 24px 0 rgba(0,0,0,1);
  transform: translateY(-5%);
}
  @media (max-width: 1000px){
    width: 24%;
  }

  @media (max-width: 800px){
    width: 49%;
  }
`;
export const CardDescription = styled.div`
  background-color: rgba(0,0,0,0.3);
  border-radius: 0px 0px 5px 5px;
  text-align-last: center;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardType = styled.img`
  border: 2px solid #2a74ba;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 0% 5% 0% 5%;
  background-color: #eee;
  background-image: url(${(props) => {
    if (props.type.name === 'normal') {
      props.type.url = normal;
    } else if (props.type.name === 'fire') {
      props.type.url = fire;
    } else if (props.type.name === 'water') {
      props.type.url = water;
    } else if (props.type.name === 'grass') {
      props.type.url = grass;
    } else if (props.type.name === 'electric') {
      props.type.url = electric;
    } else if (props.type.name === 'fighting') {
      props.type.url = fighting;
    } else if (props.type.name === 'poison') {
      props.type.url = poison;
    } else if (props.type.name === 'ground') {
      props.type.url = ground;
    } else if (props.type.name === 'flying') {
      props.type.url = flying;
    } else if (props.type.name === 'psychic') {
      props.type.url = psychic;
    } else if (props.type.name === 'bug') {
      props.type.url = bug;
    } else if (props.type.name === 'rock') {
      props.type.url = rock;
    } else if (props.type.name === 'ghost') {
      props.type.url = ghost;
    } else if (props.type.name === 'ice') {
      props.type.url = ice;
    } else if (props.type.name === 'dragon') {
      props.type.url = dragon;
    } else if (props.type.name === 'dark') {
      props.type.url = dark;
    } else if (props.type.name === 'steel') {
      props.type.url = steel;
    } else {
      props.type.url = fairy;
    }
    return props.type.url;
  }
});`;

export const CardName = styled.h4`
  margin: 0% 0% 3% 0%;
  padding-top: 2%;
  overflow: auto;
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
