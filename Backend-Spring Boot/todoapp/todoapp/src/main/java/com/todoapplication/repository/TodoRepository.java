package com.todoapplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todoapplication.entities.concretes.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{

	List<Todo>getAllByUserName(String userName);
}
