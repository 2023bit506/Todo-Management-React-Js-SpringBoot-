import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoService from "../services/todo.service";
import Swal from "sweetalert2";

const UpdateTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("Pending");

  // Fetch todo by ID on component mount
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await TodoService.getTodoById(id);
        setTitle(response.data.title);
        setDesc(response.data.description);
        setStatus(response.data.status);
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch todo data",
        });
      }
    };

    fetchTodo();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedTodo = { title, description: desc, status };

    try {
      await TodoService.updateTodo(id, updatedTodo);
      Swal.fire({
        icon: "success",
        title: "Todo updated successfully!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/"); // redirect to Home after update
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Update failed",
        text: "Please try again",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-warning text-dark text-center">
              <h4 className="mb-0">Update Todo</h4>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleUpdate}>
                {/* Title */}
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

                {/* Description */}
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

                {/* Status */}
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
                  <button type="submit" className="btn btn-warning btn-lg">
                    ✏️ Update Todo
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-muted text-center">
              Keep your tasks up to date 🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodo;
