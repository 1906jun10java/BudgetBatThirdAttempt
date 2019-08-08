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

import com.revature.beans.Budget_Ideal;
import com.revature.service.Budget_IdealService;

@RestController
@RequestMapping(value = "/budget_ideal")
public class Budget_IdealController {

	private Budget_IdealService biService;

	@Autowired
	public void Budget_IdealService(Budget_IdealService biService) {
		this.biService = biService;
	}

	@RequestMapping(value = "/allBudget_Ideal", method = RequestMethod.GET)
	public ResponseEntity<List<Budget_Ideal>> getAllBudget_Actual() {
		return new ResponseEntity<>(biService.getAllBudget_Ideal(), HttpStatus.OK);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Budget_Ideal> getBudget_ActualById(@PathVariable Integer id) {
		Budget_Ideal bg = biService.getBudget_IdealById(id);
		if (bg == null) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<>(bg, HttpStatus.OK);
		}
	}

	@PostMapping // we could also do RequestMapping with RequestMethod.POST
	public ResponseEntity<String> createBudget_Ideal(@RequestBody Budget_Ideal bi) {
		ResponseEntity<String> resp = null;
		try {
			biService.createBudget_Ideal(bi);
			resp = new ResponseEntity<>("BUDGET_IDEAL CREATED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO CREATE BUDGET_IDEAL", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}

}