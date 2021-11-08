package com.polipluz.main.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mainController {
	
	@RequestMapping("/")
	public String home() {
		return "<h1>Pagina Home</h1>"
				+ "<ul>"
				+ "<li><a href='/user'>Users</a></li>"
				+ "<li><a href='/autoescola'>Autoescola</a></li>"
				+ "</ul>";
	}
}
