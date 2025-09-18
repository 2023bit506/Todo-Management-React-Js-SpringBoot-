import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import TodoService from "../services/todo.service";
import Swal from "sweetalert2";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate(); // ✅ initialize navigate

  // Fetch todos from backend
  const fetchTodos = async () => {
    try {
      const response = await TodoService.getAllTodos();
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Delete a todo
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This todo will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await TodoService.deleteTodo(id);
          Swal.fire("Deleted!", "Your todo has been deleted.", "success");
          fetchTodos(); // refresh list
        } catch (error) {
          console.error(error);
          Swal.fire("Error!", "Failed to delete todo.", "error");
        }
      }
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">📋 Todo List</h2>

      <div className="table-responsive shadow-lg rounded">
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>
                    <span
                      className={`badge ${
                        todo.status === "Done"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {todo.status}
                    </span>
                  </td>
                  <td className="text-center">
                    {/* ✅ Edit Button now navigates to update page */}
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => navigate(`/update/${todo.id}`)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(todo.id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No todos available. Please add some.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    
  );
};

export default Home;
