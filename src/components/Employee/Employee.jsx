import React, { useState, useEffect } from "react";
import { fetchEmployees } from "../../features/todo/employeeSlice";
import { useSelector, useDispatch } from "react-redux";
const Employee = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees || []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      dispatch(fetchEmployees());
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="text-center  justify-items-center ">
      <h1 className="mb-3">Employee List</h1>
      <ul className="text-justify ">
        {employees.map((employee) => (
          <li
            className="mt-4 w-96  flex justify-center items-center bg-zinc-800 px-4 py-2 rounded"
            key={employee.id}
          >
            NAME :{employee.first_name} {employee.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employee;
