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
import com.revature.beans.User;
import com.revature.service.Budget_ActualService;

@RestController
@RequestMapping(value = "/budget_actual")
public class Budget_ActualController {

	private Budget_ActualService baService;

	@Autowired 
	public void Budget_ActualService(Budget_ActualService baService) {
		this.baService = baService;
	}

	@RequestMapping(value = "/allBudget_Actual", method = RequestMethod.GET)
	public ResponseEntity<List<Budget_Actual>> getAllBudget_Actual() {
		return new ResponseEntity<>(baService.getAllBudget_Actual(), HttpStatus.OK);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Budget_Actual> getBudget_ActualById(@PathVariable Integer id) {
		Budget_Actual ba = baService.getBudget_ActualById(id);
		if (ba == null) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<>(ba, HttpStatus.OK);
		}
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateBudget_Actual(@RequestBody Budget_Actual ba) {
		ResponseEntity<String> resp = null;
		try {
			baService.updateBudget_Actual(ba);
			resp = new ResponseEntity<>("BUDGET_ACTUAL UPDATED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO UPDATE BUDGET_ACTUAL", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
	
	@PutMapping("/delete")
	public ResponseEntity<String> deleteBudget_Actual(@RequestBody Budget_Actual ba) {
		ResponseEntity<String> resp = null;
		try {
			baService.deleteBudget_Actual(ba);
			resp = new ResponseEntity<>("BUDGET_ACTUAL DELETED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO DELETE BUDGET_ACTUAL", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}

	@PostMapping("/create") 
	public ResponseEntity<String> createBudget_Actual(@RequestBody Budget_Actual ba) {
		ResponseEntity<String> resp = null;
		try {
			baService.createBudget_Actual(ba);
			resp = new ResponseEntity<>("BUDGET_ACTUAL CREATED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO CREATE BUDGET_ACTUAL", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}

}