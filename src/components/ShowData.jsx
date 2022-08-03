const ShowData = (props) => {
  const data = props.data.entries.filter((entry, index) => {
    if (index < 50) {
      return entry;
    }
  });
  console.log(data);
  return (
    <div>
      <p>{props.data.count}</p>
      <ul>
        {data.map((entry) => {
          return <li>{entry.API}</li>;
        })}
      </ul>
    </div>
  );
};

export default ShowData;
