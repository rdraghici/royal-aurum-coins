package com.royalaurumcoins.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Everything is denied by default. Only the status endpoint and the health check are public;
 * authentication and the roles arrive with task T-006.
 */
@Configuration
public class SecurityConfig {

  @Bean
  SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http.authorizeHttpRequests(
            requests ->
                requests
                    .requestMatchers(HttpMethod.GET, "/api/v1/status", "/actuator/health")
                    .permitAll()
                    .anyRequest()
                    .denyAll())
        .build();
  }
}
