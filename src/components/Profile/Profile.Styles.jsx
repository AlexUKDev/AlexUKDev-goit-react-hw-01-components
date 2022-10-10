import styled from 'styled-components';

export const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;

  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    scale: 1.005;
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const AvatarImg = styled.img`
  border: 1px solid gray;
  border-radius: 50%;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 0px 5px;
`;

export const NameTitle = styled.ul`
  margin: 30px 0px 0px 0px;
  padding: 0;

  font-family: sans-serif;
  font-size: 23px;
  font-weight: 700;
`;

export const TagTitle = styled.ul`
  margin: 10px 0px 0px 0px;
  padding: 0;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.3);
`;
export const LocationTitle = styled.ul`
  margin: 10px 0px 30px 0px;
  padding: 0;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.3);
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px;

  width: calc(100% / 3);
  background-color: rgba(0, 0, 0, 0.04);
  /* border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); */

  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 0px 5px;
  }
  &:last-child {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 5px 0px;
  }
`;

export const LabelSpan = styled.span`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.3);
`;

export const QuantitySpan = styled.span`
  margin-top: 6px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
`;
