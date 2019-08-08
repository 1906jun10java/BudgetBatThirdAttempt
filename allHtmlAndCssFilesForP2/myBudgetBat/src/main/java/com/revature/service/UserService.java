package com.revature.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.User;
import com.revature.dao.UserDAO;

@Service
public class UserService {

	public static ArrayList<String> UsersIndex = new ArrayList<>();

	private UserDAO userDao;

	@Autowired
	public UserService(UserDAO userDao) {
		this.userDao = userDao;
	}

	public UserService() {
	}

	public List<User> getAllUsers() {
		return this.userDao.getAllUsers();

	}

	public User getUserByEmail(String email) {
		return this.userDao.getUserByEmail(email);

	}
	
	public User getUserById(int id) {
		return this.userDao.getUserById(id);
	}

	public void createUser(User user) {
		userDao.createUser(user);
	}
	
	public void updateUser(User user) {
		userDao.updateUser(user);
	}

}
