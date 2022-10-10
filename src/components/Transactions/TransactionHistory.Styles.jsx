import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;

  border: 1px solid grey;
  border-collapse: collapse;

  background-color: rgba(0, 0, 0, 0.02);
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    scale: 1.005;
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const THead = styled.thead`
  background-color: rgb(62, 163, 240);
  text-transform: uppercase;
  color: white;
`;

export const THeader = styled.th`
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border: 1px solid grey;
`;

export const TRow = styled.tr`
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:nth-child(2n) {
    background-color: rgb(216, 240, 240);
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 249, 24, 0.5);
  }
`;

export const TD = styled.th`
  /* text-transform: capitalize; */
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  width: 300px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
