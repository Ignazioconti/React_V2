import { useMemo } from "react";

export function FilteredList() {
  const dataList = [
    { name: "Caravaggio", id: 1, age: 17 },
    { name: "Leonardo", id: 2, age: 33 },
    { name: "Giotto", id: 3, age: 18 },
  ];

  const memoList = useMemo(
    () => dataList.filter((data) => data.age > 18),
    [dataList]
  );
  return (
    <div>
      <ul>
        {memoList.map((data, index) => (
          <li key={index}>
            ID: {data.id}, NAME: {data.name}, AGE: {data.age}!
          </li>
        ))}
      </ul>
    </div>
  );
}
