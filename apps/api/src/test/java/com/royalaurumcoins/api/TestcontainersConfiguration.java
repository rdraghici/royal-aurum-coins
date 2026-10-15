package com.royalaurumcoins.api;

import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.context.annotation.Bean;
import org.testcontainers.postgresql.PostgreSQLContainer;

/** A real PostgreSQL for the integration tests (*IT). Imported by each of them. */
@TestConfiguration(proxyBeanMethods = false)
public class TestcontainersConfiguration {

  static final String POSTGRES_IMAGE = "postgres:17.9-alpine";

  @Bean
  @ServiceConnection
  PostgreSQLContainer postgres() {
    return new PostgreSQLContainer(POSTGRES_IMAGE);
  }
}
