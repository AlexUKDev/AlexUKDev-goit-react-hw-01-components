import StatisticsList from './StatisticsList';
import { StatSection, StatTitle } from './Staticstics.Stiled';

export default function Statistics({ title, data }) {
  return (
    <StatSection className="statistics">
      <StatTitle className="title">{title}</StatTitle>
      <StatisticsList data={data} />
    </StatSection>
  );
}
