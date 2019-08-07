package com.revature.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.beans.Budget_Actual;
import com.revature.dao.Budget_ActualDAO;

public class Budget_ActualService {

	public static ArrayList<String> UsersIndex = new ArrayList<>();

	private Budget_ActualDAO baDao;

	@Autowired
	public Budget_ActualService(Budget_ActualDAO baDao) {
		this.baDao = baDao;
	}

	public Budget_ActualService() {
	}
	
	public Budget_Actual getBudget_ActualById(int id) {
		return this.baDao.getBudget_ActualById(id);
	}

	public List<Budget_Actual> getAllBudget_Actual() {
		return this.baDao.getAllBudget_Actual();

	}

	public void createBudget_Actual(Budget_Actual ba) {
		baDao.createBudget_Actual(ba);
	}

}
