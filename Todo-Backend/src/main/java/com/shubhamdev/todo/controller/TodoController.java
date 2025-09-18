package com.shubhamdev.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.shubhamdev.todo.entity.Todo;
import com.shubhamdev.todo.service.TodoService;

@RestController
@RequestMapping("/api/todos") // ✅ common base path
@CrossOrigin("http://localhost:5173")
public class TodoController {
    
    @Autowired
    private TodoService todoService; // ✅ inject interface, not impl

    // Get all todos
    @GetMapping
    public ResponseEntity<?> getAllTodo() {
        return new ResponseEntity<>(todoService.getAllTodos(), HttpStatus.OK);
    }

    // Get todo by id
    @GetMapping("/{id}")
    public ResponseEntity<?> getTodoById(@PathVariable Integer id) {
        return new ResponseEntity<>(todoService.getTodoById(id), HttpStatus.OK);
    }

    // Create new todo
    @PostMapping
    public ResponseEntity<?> addTodo(@RequestBody Todo todo) {
        return new ResponseEntity<>(todoService.addTodo(todo), HttpStatus.CREATED);
    }

    // Update todo
    @PutMapping("/{id}")
    public ResponseEntity<?> updateTodo(@RequestBody Todo todo, @PathVariable Integer id) {
        return new ResponseEntity<>(todoService.updateTodo(todo, id), HttpStatus.OK);
    }

    // Delete todo
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable Integer id) {
        todoService.deleteTodo(id);
        return new ResponseEntity<>("Todo deleted successfully", HttpStatus.OK);
    }
}
