import {
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Staticstics.Stiled';

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

// <StatItem className="item">
//         <span className="label">{data.label}</span>
//         <span className="percentage">{data.percentage}%</span>
//       </StatItem>
//       <StatItem className="item">
//         <span className="label">{data.label}</span>
//         <span className="percentage">{data.percentage}%</span>
//       </StatItem>
//       <StatItem className="item">
//         <span className="label">{data.label}</span>
//         <span className="percentage">{data.percentage}%</span>
//       </StatItem>
//       <StatItem className="item">
//         <span className="label">{data.label}</span>
//         <span className="percentage">{data.percentage}%</span>
//       </StatItem>
