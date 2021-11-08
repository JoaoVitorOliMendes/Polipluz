package com.polipluz.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.polipluz.main.models.autoescola;

public interface autoescolaRepository extends JpaRepository<autoescola, Long> {

	autoescola findById(long ID);
	
}
