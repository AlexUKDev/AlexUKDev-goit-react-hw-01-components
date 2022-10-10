import { Table, THead, THeader, TRow, TD } from './TransactionHistory.Styles';
import PropTypes from 'prop-types';
export default function TransactionHistory({ items }) {
  return (
    <Table className="transaction-history">
      <THead>
        <tr>
          <THeader>Type</THeader>
          <THeader>Amount</THeader>
          <THeader>Currency</THeader>
        </tr>
      </THead>

      <tbody>
        {items.map(item => (
          <TRow key={item.id}>
            <TD>{item.type}</TD>
            <TD>{item.amount}</TD>
            <TD>{item.currency}</TD>
          </TRow>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
