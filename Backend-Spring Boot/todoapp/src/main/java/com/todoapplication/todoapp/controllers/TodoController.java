package com.todoapplication.todoapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todoapplication.todoapp.entities.Todo;
import com.todoapplication.todoapp.services.TodoService;

@RestController
@CrossOrigin
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	public TodoController(TodoService todoService) {
		this.todoService=todoService;
	}
	
	@PostMapping(path="addtodo")
	public void addTodo(@RequestBody Todo todo) {
		this.todoService.addTodo(todo);
	}
	
	@GetMapping("/{userName}/todos")
	public List<Todo> getAllByUserName(@PathVariable String userName){
		return this.todoService.getAllByUserName(userName);
	}
	
	@GetMapping("/gettodobyid")
	public Todo getById(@RequestParam int id) {
		return this.todoService.getById(id);
	}
	
	@DeleteMapping("/deletetodobyid")
	public void deleteTodoById(@RequestParam int id) {
		this.todoService.deleteTodoById(id);
	}
	
	@PutMapping("/updatetodobyid")
	public void updateTodoById(@RequestParam int id,@RequestBody Todo todo) {
		this.todoService.updateTodoById(id, todo);
	}
	
	@PostMapping("{userName}/addtodobyusername")
	public void addTodoByUserName(@PathVariable String userName,@RequestBody Todo todo ) {
		this.todoService.addTodoByUserName(userName, todo);
	}

	

}
