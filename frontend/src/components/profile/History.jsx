const History = ({ history }) => {
  return (
    <div>
      <h3>Conversion History</h3>
      <ul>
        {history.map((item, i) => (
          <li key={i}>
            {item.type} → {item.output}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
