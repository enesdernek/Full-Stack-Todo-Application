package com.todoapplication.todoapp.repositories;



import org.springframework.data.jpa.repository.JpaRepository;


import com.todoapplication.todoapp.entities.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	User getByUserNameAndPassword(String userName,String password);
	
}
