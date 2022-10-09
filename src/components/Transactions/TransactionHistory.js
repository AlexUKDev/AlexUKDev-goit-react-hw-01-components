import { Table, THead, THeader, TRow, TD } from './TransactionHistory.Stiled';

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
