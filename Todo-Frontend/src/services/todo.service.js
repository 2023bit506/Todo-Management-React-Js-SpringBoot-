// src/service/todo.service.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/todos"; // ✅ match your backend port

class TodoService {
  getAllTodos() {
    return axios.get(API_URL);
  }

  getTodoById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  createTodo(todo) {
    return axios.post(API_URL, todo);
  }

  updateTodo(id, todo) {
    return axios.put(`${API_URL}/${id}`, todo);
  }

  deleteTodo(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new TodoService();
