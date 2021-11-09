package com.polipluz.main.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.polipluz.main.models.JWTRequest;
import com.polipluz.main.models.JWTResponse;
import com.polipluz.main.models.autoescola;
import com.polipluz.main.services.userDetailsService;
import com.polipluz.main.userDetails.userDetails;

@RestController
public class authenticationController {

	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private userDetailsService uDetailsService;
	
	/*
	 * @RequestMapping(method = RequestMethod.POST, value = "/authenticate") public
	 * JWTResponse authenticate(@RequestBody JWTRequest jwtReq) throws Exception {
	 * 
	 * }
	 */

	
}
