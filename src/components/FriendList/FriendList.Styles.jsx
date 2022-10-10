import styled from 'styled-components';

export const FriendListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: sans-serif;
  list-style: none;
  padding: 0;
`;

export const FriendListItemLi = styled.li`
  display: flex;
  align-items: center;

  width: 300px;

  border-radius: 5px 5px 5px 5px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    scale: 1.005;
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.1);
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StatusSpan = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${prop => {
    if (prop.status) {
      return 'green';
    } else {
      return 'red';
    }
  }};

  margin: 0px 10px;
`;

export const AvatarImg = styled.img`
  display: block;
  width: 70px;
  height: 70px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const FriendListItemName = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin-left: 10px;
`;
