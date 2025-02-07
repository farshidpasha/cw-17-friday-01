import { ItableProps } from "../../types/types";

export default function Table({ data }: ItableProps) {
  console.log("data", data);
  return (
    <table className="w-full">
      <thead>
        <tr className="border">
          <th className="p-4 text-left border">Task Name</th>
          <th className="p-4 text-center border">Priority</th>
          <th className="p-4 text-center border">Status</th>
          <th className="p-4 text-center border">Actions</th>
        </tr>
      </thead>

      <tbody className="table-data">
        {data?.map((dataItem) => (
          <tr key={dataItem.id}>
            <td>{dataItem.taskName}</td>
            <td>{dataItem.priority}</td>
            <td>{dataItem.completed ? "Completed" : "Not Completed"}</td>
            <td>
              <button>Show</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
