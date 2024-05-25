package com.todoapplication.todoapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todoapplication.todoapp.entities.User;
import com.todoapplication.todoapp.services.UserService;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping(path = "/adduser")
	public void addUser(@RequestBody User user) {
		this.userService.addUser(user);
	}

	@GetMapping(path="/getuserbyid")
	public User getById(@RequestParam int id) {
		return this.userService.getById(id);
	}

	@PutMapping("/updateuserbyid")
	public void updateUserById(@RequestParam int id, @RequestBody User user) {
		this.userService.updateUserById(id, user);
	}
	
	@GetMapping("/getbyusernameandpassword")
	public User getByUserNameAndPassword(@RequestParam String userName,@RequestParam String password) {
		return this.userService.getByUserNameAndPassword(userName, password);
	}
	
	

}
