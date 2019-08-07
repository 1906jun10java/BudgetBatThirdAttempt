package com.revature.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.beans.Budget_Actual;
import com.revature.beans.Budget_Goal;
import com.revature.dao.Budget_GoalDAO;

public class Budget_GoalService {

	public static ArrayList<String> UsersIndex = new ArrayList<>();

	private Budget_GoalDAO bgDao;

	@Autowired
	public Budget_GoalService(Budget_GoalDAO bgDao) {
		this.bgDao = bgDao;
	}

	public Budget_GoalService() {
	}

	public Budget_Goal getBudget_GoalById(int id) {
		return this.bgDao.getBudget_GoalById(id);
	}
	
	public List<Budget_Goal> getAllBudget_Goal() {
		return this.bgDao.getAllBudget_Goal();

	}

	public void createBudget_Goal(Budget_Goal bg) {
		bgDao.createBudget_Goal(bg);
	}

}