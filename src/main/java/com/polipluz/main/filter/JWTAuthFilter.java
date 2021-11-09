package com.polipluz.main.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.polipluz.main.models.user;
import com.polipluz.main.userDetails.userDetails;

public class JWTAuthFilter extends UsernamePasswordAuthenticationFilter {

	public static final long JWT_TOKEN_VALIDITY = 24 * 60 *60;
	
    private String secret = "JLA5&/%th^v2s1WwcSc@,cjS,0GgGd";
	
	private AuthenticationManager authManager;
	
	public JWTAuthFilter(AuthenticationManager authManager) {
		super();
		this.authManager = authManager;
	}
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		
		try {
			user u = new ObjectMapper().readValue(request.getInputStream(), user.class);
			
			return authManager.authenticate(new UsernamePasswordAuthenticationToken(
					u.getEmail(),
					u.getSenha(),
					new ArrayList<>()
					));
		} catch (Exception e) {
			throw new RuntimeException("erro:", e);
		}
	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		
		userDetails uDetails = (userDetails) authResult.getPrincipal();
		
		String token = JWT
				.create()
				.withSubject(uDetails.getUsername())
				.withExpiresAt(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
				.sign(Algorithm.HMAC512(secret));
		
		response.getWriter().write(token);
		response.getWriter().flush();
		
	}
}
