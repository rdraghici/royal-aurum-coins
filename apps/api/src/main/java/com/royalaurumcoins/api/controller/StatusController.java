package com.royalaurumcoins.api.controller;

import com.royalaurumcoins.api.dto.StatusResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** The one public endpoint: the application's name and version. */
@RestController
@RequestMapping("/api/v1/status")
public class StatusController {

  private final StatusResponse status;

  public StatusController(
      @Value("${spring.application.name}") String name, @Value("${app.version}") String version) {
    this.status = new StatusResponse(name, version);
  }

  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  public StatusResponse status() {
    return status;
  }
}
