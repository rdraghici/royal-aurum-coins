package com.royalaurumcoins.api;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.groups.Tuple.tuple;

import java.util.List;
import java.util.Map;
import org.jspecify.annotations.Nullable;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.web.servlet.client.RestTestClient;

/** The application starts against PostgreSQL, runs Flyway and answers over HTTP. */
@IntegrationTest
class StatusEndpointIT {

  private final RestTestClient http;
  private final JdbcTemplate jdbc;
  private final String version;

  StatusEndpointIT(
      @Autowired RestTestClient http,
      @Autowired JdbcTemplate jdbc,
      @Value("${app.version}") String version) {
    this.http = http;
    this.jdbc = jdbc;
    this.version = version;
  }

  @Test
  @DisplayName("GET /api/v1/status is public and returns the application name and version")
  void statusIsPublic() {
    http.get()
        .uri("/api/v1/status")
        .exchange()
        .expectStatus()
        .isOk()
        .expectBody()
        .jsonPath("$.name")
        .isEqualTo("royal-aurum-coins-api")
        .jsonPath("$.version")
        .isEqualTo(version);
  }

  @Test
  @DisplayName("GET /actuator/health is public and reports UP")
  void healthIsPublic() {
    http.get()
        .uri("/actuator/health")
        .exchange()
        .expectStatus()
        .isOk()
        .expectBody()
        .jsonPath("$.status")
        .isEqualTo("UP");
  }

  @Test
  @DisplayName("every other path is denied by default")
  void everythingElseIsDenied() {
    for (String path : List.of("/api/v1/coins", "/v3/api-docs", "/actuator/env", "/")) {
      http.get().uri(path).exchange().expectStatus().isForbidden();
    }
  }

  @Test
  @DisplayName("Flyway applied the baseline migration")
  void flywayAppliedTheBaseline() {
    List<Map<String, @Nullable Object>> history =
        jdbc.queryForList("select version, success from flyway_schema_history order by version");
    assertThat(history).extracting("version", "success").containsExactly(tuple("1", true));
  }
}
