package com.todoapplication.todoapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todoapplication.todoapp.entities.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{
	
	List<Todo>getAllByUserName(String userName);
	
	
	


}
