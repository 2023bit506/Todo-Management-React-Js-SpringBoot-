package com.shubhamdev.todo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shubhamdev.todo.entity.Todo;
import com.shubhamdev.todo.repository.TodoRepo;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepo todoRepo;

    @Override
    public List<Todo> getAllTodos() {
        return todoRepo.findAll();
    }

    @Override
    public Todo getTodoById(Integer id) {
        return todoRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id " + id));
    }

    @Override
    public Todo addTodo(Todo todo) {
        return todoRepo.save(todo);
    }

    @Override
    public void deleteTodo(Integer id) {
        Todo todo = todoRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id " + id));
        todoRepo.delete(todo);
    }

    @Override
    public Todo updateTodo(Todo t, Integer id) {
        Todo oldTodo = todoRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id " + id));

        oldTodo.setTitle(t.getTitle());
        oldTodo.setDescription(t.getDescription());
        oldTodo.setStatus(t.getStatus());

        return todoRepo.save(oldTodo); // ✅ save and return updated todo
    }
}
