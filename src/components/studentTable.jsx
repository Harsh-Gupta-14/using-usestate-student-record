import React from "react";

const StudentTable = ({ students, setEditingIndex, deleteStudent }) => {
  return (
    <table className="table table-bordered mt-3">
      <thead className="table-light">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Marks1</th>
          <th>Marks2</th>
          <th>Marks3</th>
          <th>Marks4</th>
          <th>Marks5</th>
          <th>Percentage%</th>
          <th>Division</th>
          <th>Edit</th>
           <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="10" className="text-center">
              No Records Found
            </td>
          </tr>
        ) : (
          students.map((stu, idx) => (
            <tr key={idx}>
              <td>{stu.name}</td>
              <td>{stu.age}</td>
              <td>{stu.m1}</td>
              <td>{stu.m2}</td>
              <td>{stu.m3}</td>
              <td>{stu.m4}</td>
              <td>{stu.m5}</td>
              <td>{stu.percentage}%</td>
              <td>{stu.division}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => setEditingIndex(idx)}
                >
                  Edit
                </button>
                </td>
                <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteStudent(idx)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default StudentTable;
