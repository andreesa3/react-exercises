import { useMemo } from "react";

const FilteredList = ({ list }) => {
  const filteredList = useMemo(() => {
    return list.filter(item => item.age >= 18);
  }, [list])

  return (
    <>
      <ul>
        {
          filteredList.map((obj) => (
            <li key={obj.id}>{obj.name}, {obj.age} years old</li>
          ))
        }
      </ul>
    </>
  );
}

export default FilteredList;
