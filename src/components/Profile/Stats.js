import PropTypes from "prop-types";
import { StatsList,StatsItem,LabelSpan,QuantitySpan } from "./Profile.Stiled";
export default function Stats({followers, views, likes}) {
  return <StatsList className="stats">
    <StatsItem>
      <LabelSpan className="label">Followers</LabelSpan>
      <QuantitySpan className="quantity">{followers}</QuantitySpan>
    </StatsItem>
    <StatsItem>
      <LabelSpan className="label">Views</LabelSpan>
      <QuantitySpan className="quantity">{views}</QuantitySpan>
    </StatsItem>
    <StatsItem>
      <LabelSpan className="label">Likes</LabelSpan>
      <QuantitySpan className="quantity">{likes}</QuantitySpan>
    </StatsItem>
  </StatsList>
}

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};