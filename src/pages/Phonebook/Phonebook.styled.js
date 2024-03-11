import styled from 'styled-components';

export const StyledMainWrapper = styled.div`
  background-color: rgb(38, 38, 38);
  padding: 40px 80px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* @media (min-width: 768px) {
    background-color: red;
  } */
`;

export const StyledWrapper = styled.div`
  display: flex;
  background-color: rgb(52, 52, 52);
  justify-content: space-between;
  align-items: center;
`;

export const StyledMainTitle = styled.h1`
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 36px;
  margin: 0;
  /* @media (min-width: 768px) {
    color: pink;
  } */
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledTitle = styled.h2`
  color: rgb(255, 255, 255);
  padding-left: 15px;
`;

export const StyledBtns = styled.ul``;

export const StyledLogoutBtn = styled.button`
  background-color: rgb(253, 135, 6);
  border: none;
  height: 25px;
  color: rgb(255, 255, 255);
  border-radius: 20px;
  font-size: 12px;
  font-style: italic;
  width: 76px;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: rgb(253, 135, 6);
    border: 2px solid rgb(253, 135, 6);
  }

  &:active {
    background-color: orangered;
  }
`;
