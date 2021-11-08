package com.polipluz.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.polipluz.main.models.user;

public interface userRepository extends JpaRepository<user, Long> {

	user findById(long ID);
	user findByEmail(String email);
	
}
