package com.revature.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.beans.Budget_Goal;
import com.revature.beans.Budget_Ideal;
import com.revature.dao.Budget_IdealDAO;

public class Budget_IdealService {

	public static ArrayList<String> UsersIndex = new ArrayList<>();

	private Budget_IdealDAO biDao;

	@Autowired
	public Budget_IdealService(Budget_IdealDAO biDao) {
		this.biDao = biDao;
	}

	public Budget_IdealService() {
	}
	
	public Budget_Ideal getBudget_IdealById(int id) {
		return this.biDao.getBudget_IdealById(id);
	}

	public List<Budget_Ideal> getAllBudget_Ideal() {
		return this.biDao.getAllBudget_Ideal();

	}

	public void createBudget_Ideal(Budget_Ideal bi) {
		biDao.createBudget_Ideal(bi);
	}

}