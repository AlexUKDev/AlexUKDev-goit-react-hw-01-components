import {
  FriendListItemLi,
  StatusSpanOnline,
  StatusSpanOfline,
  AvatarImg,
  FriendListItemName,
} from './FriendList.Stiled';
import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendListItemLi className="item">
      {isOnline ? (
        <StatusSpanOnline></StatusSpanOnline>
      ) : (
        <StatusSpanOfline></StatusSpanOfline>
      )}
      <AvatarImg className="avatar" src={avatar} alt={name} width="48" />
      <FriendListItemName className="name">{name}</FriendListItemName>
    </FriendListItemLi>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
