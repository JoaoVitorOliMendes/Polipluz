package com.polipluz.main.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.polipluz.main.models.autoescola;
import com.polipluz.main.repository.autoescolaRepository;
import com.polipluz.main.repository.userRepository;

@RestController
public class autoescolaController {

	@Autowired
	private autoescolaRepository aRepository;
	
	@RequestMapping("/autoescola")
	public Iterable<autoescola> getAutoescolas() {
		return aRepository.findAll();
	}
	
	@RequestMapping("/autoescola/{id}")
	public autoescola getAutoescolaById(@PathVariable long id) {
		return aRepository.findById(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/autoescola")
	public void addAutoescola(@RequestBody autoescola a) {
		aRepository.save(a);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/autoescola")
	public void updateAutoescola(@RequestBody autoescola a) {
		aRepository.save(a);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/autoescola/{id}")
	public void deleteAutoescola(@PathVariable Long id) {
		autoescola a = new autoescola(id);
		aRepository.delete(a);
	}
}
