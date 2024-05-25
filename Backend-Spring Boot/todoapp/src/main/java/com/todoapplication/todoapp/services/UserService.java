package com.todoapplication.todoapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todoapplication.todoapp.entities.User;
import com.todoapplication.todoapp.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository=userRepository;
	}
	
	public void addUser(User user) {
		this.userRepository.save(user);
	}
	
	public User getById(int id) { 
		return this.userRepository.findById(id).get();
	}
	
	public void updateUserById(int id,User user) {
		if(user.getId()==id) {
			this.userRepository.save(user);
		}
	}
	
	public User getByUserNameAndPassword(String userName,String password) {
		return this.userRepository.getByUserNameAndPassword(userName, password);
	}


}
