import PropTypes from 'prop-types';
import Stats from './Stats';
import {
  ProfileWrap,
  DescriptionWrap,
  AvatarImg,
  NameTitle,
  TagTitle,
  LocationTitle,
} from './Profile.Stiled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileWrap className="profile">
      <DescriptionWrap className="description">
        <AvatarImg
          src={avatar}
          alt="User avatar"
          className="avatar"
          height="100"
        />
        <NameTitle className="name">{username}</NameTitle>
        <TagTitle className="tag">@{tag}</TagTitle>
        <LocationTitle className="location">{location}</LocationTitle>
      </DescriptionWrap>
      <Stats followers={followers} views={views} likes={likes} />
    </ProfileWrap>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
