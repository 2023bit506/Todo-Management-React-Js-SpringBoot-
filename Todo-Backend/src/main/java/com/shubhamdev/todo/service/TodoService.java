package com.shubhamdev.todo.service;

import java.util.List;
import com.shubhamdev.todo.entity.Todo;

public interface TodoService {
    
    List<Todo> getAllTodos();
    
    Todo getTodoById(Integer id);
    
    Todo addTodo(Todo todo);
    
    void deleteTodo(Integer id);
    
    Todo updateTodo(Todo todo, Integer id);
}
