import {
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Staticstics.Styles';
import PropTypes from 'prop-types';

export default function StatisticsList({ data }) {
  return (
    <StatList className="stat-list">
      {data.map(dataObj => (
        <StatItem className="item" key={dataObj.id}>
          <StatLabel className="label">{dataObj.label}</StatLabel>
          <StatPercentage className="percentage">
            {dataObj.percentage}%
          </StatPercentage>
        </StatItem>
      ))}
    </StatList>
  );
}

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
