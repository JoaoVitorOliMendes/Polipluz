package com.polipluz.main.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.polipluz.main.models.user;
import com.polipluz.main.repository.userRepository;
import com.polipluz.main.services.userService;

@RestController
public class userController {
	
	@Autowired
	private userRepository uRepository;
	
	@Autowired
	private userService uService;
	
	@RequestMapping("/user")
	public Iterable<user> getUsers() {
		return uRepository.findAll();
	}
	
	@RequestMapping("/user/{id}")
	public user getUserById(@PathVariable long id) {
		return uRepository.findById(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/user")
	public void addUser(@RequestBody user u) {
		uService.save(u);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/user")
	public void updateUser(@RequestBody user u) {
		uRepository.save(u);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/user/{id}")
	public void deleteUser(@PathVariable Long id) {
		user u = new user(id);
		uRepository.delete(u);
	}

}
