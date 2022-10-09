import { FriendListItem } from './FriendList_Item';
import { FriendListUl } from './FriendList.Stiled';

export default function FriendList({ friends }) {
  return (
    <FriendListUl className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListUl>
  );
}
