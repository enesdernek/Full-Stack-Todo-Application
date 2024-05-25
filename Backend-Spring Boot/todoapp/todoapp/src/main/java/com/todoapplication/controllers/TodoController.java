package com.todoapplication.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todoapplication.core.utilities.results.DataResult;
import com.todoapplication.core.utilities.results.Result;
import com.todoapplication.entities.concretes.Todo;
import com.todoapplication.repository.TodoRepository;

import io.swagger.v3.oas.annotations.parameters.RequestBody;


@RestController
@RequestMapping(path="/api/todo/")
@CrossOrigin


public class TodoController {
	
	private TodoRepository todoRepository;
	
	@Autowired
	public TodoController(TodoRepository todoRepository) {
		this.todoRepository=todoRepository;
	}
	
	@GetMapping(path="{userName}/todos")
	public List<Todo> getAllByUserName(@PathVariable String userName) {
		return this.todoRepository.getAllByUserName(userName);
	}
	
	@DeleteMapping("deletebytodoid")
	public void deleteByTodoId(@RequestParam int id) {
		this.todoRepository.deleteById(id);
	}
	
	
	@PostMapping("addtodo")
	public void addTodo(@RequestBody Todo todo) {
		this.todoRepository.save(todo);
	}


	
	

}
