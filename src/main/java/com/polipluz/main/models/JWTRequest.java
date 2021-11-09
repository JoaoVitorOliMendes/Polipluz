package com.polipluz.main.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


public @Data @AllArgsConstructor @NoArgsConstructor class JWTRequest {

	private String email;
	private String senha;
	
}
