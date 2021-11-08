package com.polipluz.main.services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.polipluz.main.models.user;
import com.polipluz.main.repository.userRepository;

@Service
public class userService {

	userRepository uRepository;
	
	PasswordEncoder pEncoder;
	
	public userService(userRepository userRepository, PasswordEncoder passwordEncoder) {
	    this.uRepository = userRepository;
	    this.pEncoder = passwordEncoder;
	}
	
	public user save(user u) {
	    u.setSenha(this.pEncoder.encode(u.getSenha()));
	    return this.uRepository.save(u);
	}
}
