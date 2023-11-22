import styled from "styled-components";

export const Outer = styled.div`
  //border: 1px solid red;
`;
export const Box1 = styled.div`
  //border: 1px solid blue;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  svg {
  //border: 1px solid red;
    height: 30px;
    width: 50px;
  }
  p {
    font-size: 1.2rem;
    opacity: 0.98;
    font-weight: 400;
  }
  @media (max-width: 576px) {
    svg {
  //border: 1px solid red;
    height: 25px;
    // width: 30px;
  }
  p {
    font-size: 1.0rem;
    opacity: 0.98;
    font-weight: 400;
  }
  }
  @media (min-width: 992px) {
    svg {
  // border: 1px solid red;
    height: 40px;
     width: 80px;
  }
  p {
    font-size: 1.0rem;
    opacity: 0.98;
    font-weight: 400;
  }
  #github{
    width:100%;
  }
  #linkdin{
    width:100%;
  }
`;

export const ContactWrapper = styled.div`
 // border:1px solid red;
  padding-top: 5rem;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  span {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 820px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 3rem;
    }
   
  }
`;