package com.polipluz.main.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.context.annotation.Configuration;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
public @Data @AllArgsConstructor @NoArgsConstructor class autoescola implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "nome",nullable = false)
	private String nome;
	@Column(name = "email",nullable = false, unique = true)
	private String email;
	@Column(name = "senha",nullable = false)
	private String senha;
	@Column(name = "cep",nullable = false)
	private String cep;
	@Column(name = "cnpj")
	private String cnpj;
	@Column(name = "horarioFunc")
	private String horarioFunc;
	@Column(name = "latitude",nullable = false)
	private String latitude;
	@Column(name = "longitude",nullable = false)
	private String longitude;
	
	private static final long serialVersionUID = 1L;
	
	public autoescola(Long id) {
		super();
		this.id = id;
	}
}
