package com.shubhamdev.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shubhamdev.todo.entity.Todo;

public interface TodoRepo extends JpaRepository<Todo, Integer>{


}
