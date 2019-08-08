package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Budget_Actual;
import com.revature.beans.Budget_Goal;
import com.revature.service.Budget_GoalService;

@RestController
@RequestMapping(value = "/budget_goal")
public class Budget_GoalController {

	private Budget_GoalService bgService;

	@Autowired
	public void Budget_GoalService(Budget_GoalService bgService) {
		this.bgService = bgService;
	}

	@RequestMapping(value = "/allBudget_Goal", method = RequestMethod.GET)
	public ResponseEntity<List<Budget_Goal>> getAllBudget_Actual() {
		return new ResponseEntity<>(bgService.getAllBudget_Goal(), HttpStatus.OK);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Budget_Goal> getBudget_ActualById(@PathVariable Integer id) {
		Budget_Goal bg = bgService.getBudget_GoalById(id);
		if (bg == null) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<>(bg, HttpStatus.OK);
		}
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateBudget_Goal(@RequestBody Budget_Goal bg) {
		ResponseEntity<String> resp = null;
		try {
			bgService.updateBudget_Goal(bg);
			resp = new ResponseEntity<>("BUDGET_GOAL UPDATED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO UPDATE BUDGET_GOAL", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
	
	@PutMapping("/delete")
	public ResponseEntity<String> deleteBudget_Goal(@RequestBody Budget_Goal bg) {
		ResponseEntity<String> resp = null;
		try {
			bgService.deleteBudget_Goal(bg);
			resp = new ResponseEntity<>("BUDGET_GOAL DELETED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO DELETE BUDGET_GOAL", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}

	@PostMapping 
	public ResponseEntity<String> createBudget_Goal(@RequestBody Budget_Goal bg) {
		ResponseEntity<String> resp = null;
		try {
			bgService.createBudget_Goal(bg);
			resp = new ResponseEntity<>("BUDGET_GOAL CREATED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO CREATE BUDGET_GOAL", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}

}