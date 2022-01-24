import { useQuery } from "react-query";
import axios from "axios";

export function List() {
  const { data, isLoading } = useQuery("users", () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  });
  if (isLoading) {
    return <h2>uploading</h2>;
  }
  return (
    <div>
      {data.data.map((value, index) => (
        <div key={index}>
          name={value.name}
          username={value.username}
        </div>
      ))}
    </div>
  );
}
