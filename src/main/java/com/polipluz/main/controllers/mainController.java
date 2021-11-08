package com.polipluz.main.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mainController {
	
	@RequestMapping("/")
	public String home() {
		return "<script> window.location.replace('http://localhost:4200/') </script>";
	}
}
