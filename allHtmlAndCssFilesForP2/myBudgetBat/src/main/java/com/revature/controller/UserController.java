package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.User;
import com.revature.service.UserService;

@RestController
@RequestMapping(value ="/user")
public class UserController {

	private UserService userService;

	@Autowired
	public void UserService(UserService userService) {
		this.userService = userService;
	}

	@RequestMapping(value ="/allUsers", method = RequestMethod.GET)
	public ResponseEntity<List<User>> getUsers() {
		return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
	}

	@RequestMapping(value ="/{email}", method = RequestMethod.GET)
	public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
		User f = userService.getUserByEmail(email);
		if (f == null) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<>(f, HttpStatus.OK);
		}
	}

	@PostMapping // we could also do RequestMapping with RequestMethod.POST
	public ResponseEntity<String> createUser(@RequestBody User user) {
		ResponseEntity<String> resp = null;
		try {
			userService.createUser(user);
			resp = new ResponseEntity<>("USER CREATED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO CREATE USER", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}

}