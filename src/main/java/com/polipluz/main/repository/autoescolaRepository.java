package com.polipluz.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.polipluz.main.models.autoescola;

public interface autoescolaRepository extends JpaRepository<autoescola, Long> {

	autoescola findById(long ID);
	
	@Query(value = "SELECT * FROM autoescola a WHERE a.nome like %?1%",
            nativeQuery = true)
    List<autoescola> findByName(String name);
	
}
