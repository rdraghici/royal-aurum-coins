package com.royalaurumcoins.api.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.royalaurumcoins.api.config.SecurityConfig;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(StatusController.class)
@Import(SecurityConfig.class)
class StatusControllerTest {

  private final MockMvc mockMvc;
  private final String version;

  StatusControllerTest(@Autowired MockMvc mockMvc, @Value("${app.version}") String version) {
    this.mockMvc = mockMvc;
    this.version = version;
  }

  @Test
  @DisplayName("GET /api/v1/status returns the application name and version without signing in")
  void returnsNameAndVersion() throws Exception {
    mockMvc
        .perform(get("/api/v1/status"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.name").value("royal-aurum-coins-api"))
        .andExpect(jsonPath("$.version").value(version));
  }

  @Test
  @DisplayName("any other path is denied by default")
  void deniesEverythingElse() throws Exception {
    mockMvc.perform(get("/api/v1/coins")).andExpect(status().isForbidden());
  }
}
