import styled from 'styled-components';

export const StatSection = styled.section`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
  width: 500px;
  /* border: 1px solid rgba(0, 0, 0, 0.5); */
  border-radius: 3px 3px 0px 0px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    scale: 1.005;
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const StatTitle = styled.h2`
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 25px;

  margin-top: 25px;
  margin-bottom: 25px;
`;

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  font-size: 25px;
  list-style: none;

  font-size: 16px;
  border-radius: 5px 5px 5px 5px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding: 15px 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  /* border-radius: 0px 0px 3px 3px; */
  &:nth-child(1) {
    background-color: #6fc3f2;
  }
  &:nth-child(2) {
    background-color: #9942eb;
  }
  &:nth-child(3) {
    background-color: #d6576a;
  }
  &:nth-child(4) {
    background-color: #57b5c2;
  }
  &:nth-child(5) {
    background-color: #d69332;
  }
`;

export const StatLabel = styled.span`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const StatPercentage = styled.span`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 23px;
`;
