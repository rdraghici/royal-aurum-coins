package com.royalaurumcoins.api.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * The OpenAPI document is generated at build time and committed as apps/api/openapi.json. The
 * server is relative so that the document does not depend on where it was generated.
 */
@Configuration
public class OpenApiConfig {

  @Bean
  OpenAPI openApi(@Value("${app.version}") String version) {
    return new OpenAPI()
        .info(new Info().title("Royal Aurum Coins API").version(version))
        .servers(List.of(new Server().url("/")));
  }
}
