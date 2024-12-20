import React, { useState, useEffect } from "react";
import axios from "axios";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("https://api.restful-api.dev/objects");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

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
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employee;
