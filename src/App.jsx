import React, { useState } from "react";
import StudentForm from "./components/studentForm";
import StudentTable from "./components/studentTable";


const App = () => {
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    const updatedList = students.map((stu, idx) =>
      idx === editingIndex ? updatedStudent : stu
    );
    setStudents(updatedList);
    setEditingIndex(null);
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, idx) => idx !== index));
  };

  const clearAll = () => {
    setStudents([]);
    setEditingIndex(null);
  };

  const filteredStudents = students
    .filter((stu) => stu.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === "asc"
        ? a.percentage - b.percentage
        : b.percentage - a.percentage;
    });

  return (
    <div className="container mt-3">
      <h2 className="text-center mb-3">Student Record Project</h2>
      <div className="d-flex">
        
        <div style={{width:"30%",height:"500px",backgroundColor:'rgb(204, 238, 253)'}} >
          <h3>Enter Student Record</h3>
      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
        students={students}
        clearAll={clearAll}
      />
      </div>
      <div style={{marginLeft:"40px"}}>
        
      {/* <div className="d-flex justify-content-between my-3"> */}
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{marginTop:"10px"}}
          className="btn btn-primary ms-2"
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
        >
          Sort by % ({sortOrder === "asc" ? "↑" : "↓"})
        </button>
      {/* </div> */}

      <StudentTable
        students={filteredStudents}
        setEditingIndex={setEditingIndex}
        deleteStudent={deleteStudent}
      />
      </div>
      </div>
    </div>
  );
};

export default App;