import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import user from '../DB/user.json';
import data from '../DB/data.json';
import friendsList from '../DB/friends.json';
import TransactionHistory from './Transactions/TransactionHistory';
import transactions from '../DB/transactions.json';
const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        margin: '20px 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
