import React, { useState } from "react";
import TodoService from "../services/todo.service"; // ✅ service for API calls
import Swal from "sweetalert2";

const Addtodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = { title, description: desc, status };

    try {
      await TodoService.createTodo(newTodo); // ✅ API call
      Swal.fire({
        icon: "success",
        title: "Todo created successfully!",
        showConfirmButton: false,
        timer: 2000,
      });

      // Reset fields after submit
      setTitle("");
      setDesc("");
      setStatus("Pending");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to create Todo",
        text: "Please try again",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="mb-0">Add a New Todo</h4>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                {/* Title Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Todo Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter todo title"
                    required
                  />
                </div>

                {/* Description Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Enter todo description"
                    required
                  ></textarea>
                </div>

                {/* Status Dropdown */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Status</label>
                  <select
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Done">Done</option>
                  </select>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    ➕ Add Todo
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-muted text-center">
              Stay organized 🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtodo;
