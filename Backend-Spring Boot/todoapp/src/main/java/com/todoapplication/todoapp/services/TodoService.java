package com.todoapplication.todoapp.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.todoapplication.todoapp.entities.Todo;
import com.todoapplication.todoapp.repositories.TodoRepository;

@Service
public class TodoService {
	
	private TodoRepository todoRepository;
	
	public TodoService(TodoRepository todoRepository) {
		this.todoRepository=todoRepository;
	}
	
	public void addTodo(Todo todo) {
		this.todoRepository.save(todo);
	}
	
	public List<Todo> getAllByUserName(String userName){
		return this.todoRepository.getAllByUserName(userName);
	}
	
	public Todo getById(int id) {
		return this.todoRepository.findById(id).get();
	}
	
	public void deleteTodoById(int id) {
		this.todoRepository.deleteById(id);
	}
	
	public void updateTodoById(int id,Todo todo) {
		if(todo.getId()==id) {
			this.todoRepository.save(todo);
		}
	}
	
	
	public void addTodoByUserName(String userName,Todo todo) {
		this.todoRepository.save(todo);
	}
	
	

}
