import React, { useEffect, useState } from "react";

const getPercentage = (marks) => {
  const total = marks.reduce((a, b) => a + b, 0);
  return (total / 500) * 100;
};

const getDivision = (percentage) => {
  if (percentage >= 60) return "First Division";
  if (percentage >= 45) return "Second Division";
  if (percentage >= 33) return "Third Division";
  return "Fail";
};

const StudentForm = ({
  addStudent,
  updateStudent,
  editingIndex,
  setEditingIndex,
  students,
  clearAll,
}) => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    m1: "",
    m2: "",
    m3: "",
    m4: "",
    m5: "",
  });

  useEffect(() => {
    if (editingIndex !== null) {
      setForm(students[editingIndex]);
    }
  }, [editingIndex, students]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const marks = [form.m1, form.m2, form.m3, form.m4, form.m5].map(Number);
    const percentage = getPercentage(marks);
    const division = getDivision(percentage);

    const newStudent = {
      ...form,
      m1: +form.m1,
      m2: +form.m2,
      m3: +form.m3,
      m4: +form.m4,
      m5: +form.m5,
      percentage: +percentage.toFixed(2),
      division,
    };

    if (editingIndex !== null) {
      updateStudent(newStudent);
    } else {
      addStudent(newStudent);
    }

    setForm({ name: "", age: "", m1: "", m2: "", m3: "", m4: "", m5: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="row g-2">
      {[
        "name",
        "age",
        "m1",
        "m2",
        "m3",
        "m4",
        "m5",
      ].map((field) => (
        <div  key={field}  >
          <input
            name={field}
            className="form-control w-100 d-flex"
           style={{marginTop:"5px"}}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.toUpperCase()}
            required
            type={field === "age" || field.startsWith("m") ? "number" : "text"}
          />
        </div>
      ))}

      <div className=" d-grid">
        <button className="btn btn-warning" type="submit">
          {editingIndex !== null ? "Update" : "Submit"}
        </button>
      </div>

      <div className="d-grid">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
