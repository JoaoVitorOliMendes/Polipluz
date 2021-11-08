package com.polipluz.main.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.polipluz.main.models.user;
import com.polipluz.main.repository.userRepository;
import com.polipluz.main.userDetails.userDetails;

@Service
public class userDetailsService implements UserDetailsService {

	@Autowired
	private userRepository uRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		user u = uRepository.findByEmail(username);
		
		if (u == null) {
			throw new UsernameNotFoundException(username);
		}
		
		return new userDetails(u);
	}

}
