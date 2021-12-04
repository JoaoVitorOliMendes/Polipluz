package com.polipluz.main.filter;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

public class JWTValidation extends BasicAuthenticationFilter {
	
	public static final String HEADER = "Authorization";
	public static final String HEADER_PREFIX = "Bearer ";
	
    private static String secret = "JLA5&/%th^v2s1WwcSc@,cjS,0GgGd";
	
	public JWTValidation(AuthenticationManager authManager) {
		super(authManager);
	}
	
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		String header = request.getHeader(HEADER);
		if (header == null || !header.startsWith(HEADER_PREFIX)) {
			chain.doFilter(request, response);
			return;
		}
		
		String token = header.replace(HEADER_PREFIX, "");
		UsernamePasswordAuthenticationToken authToken = getAuthToken(token);
		
		SecurityContextHolder.getContext().setAuthentication(authToken);
		chain.doFilter(request, response);
	}
	
	private static UsernamePasswordAuthenticationToken getAuthToken(String token) {
		String u = JWT.require(Algorithm.HMAC512(secret))
				.build()
				.verify(token)
				.getSubject();
		
		if(u == null) {
			return null;
		}else {
			return new UsernamePasswordAuthenticationToken(u, null, new ArrayList<>());
		}
		
	}
	
	public static Boolean decodeJWT(String jwt) {
		String token = jwt.replace(HEADER_PREFIX, "");
		UsernamePasswordAuthenticationToken authToken = getAuthToken(token);

		return authToken.isAuthenticated();
	}
	
}
