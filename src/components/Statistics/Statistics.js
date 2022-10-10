import StatisticsList from './StatisticsList';
import { StatSection, StatTitle } from './Staticstics.Styles';
import PropTypes from 'prop-types';

export default function Statistics({ title, data }) {
  return (
    <StatSection className="statistics">
      {title && <StatTitle className="title">{title}</StatTitle>}
      <StatisticsList data={data} />
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
