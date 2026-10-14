package com.royalaurumcoins.api;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

/**
 * The API contract gate. The document the running application generates is written to
 * target/openapi.json and must equal the committed apps/api/openapi.json. It is read in-process,
 * without the security filters: over HTTP the document is denied like everything else.
 */
@IntegrationTest
class OpenApiDocumentIT {

  private static final Path COMMITTED = Path.of("openapi.json");
  private static final Path GENERATED = Path.of("target", "openapi.json");

  private final WebApplicationContext context;
  private final ObjectMapper json;

  OpenApiDocumentIT(@Autowired WebApplicationContext context, @Autowired ObjectMapper json) {
    this.context = context;
    this.json = json;
  }

  @Test
  @DisplayName("the committed openapi.json equals the document the application generates")
  void committedDocumentIsCurrent() throws Exception {
    MockMvc withoutFilters = MockMvcBuilders.webAppContextSetup(context).build();
    String generated =
        withoutFilters
            .perform(get("/v3/api-docs"))
            .andExpect(status().isOk())
            .andReturn()
            .getResponse()
            .getContentAsString();
    Files.createDirectories(GENERATED.getParent());
    Files.writeString(GENERATED, generated);

    assertThat(COMMITTED)
        .withFailMessage(
            "%s is missing: review %s and commit it as %s", COMMITTED, GENERATED, COMMITTED)
        .exists();
    JsonNode committed = json.readTree(read(COMMITTED));
    assertThat(json.readTree(generated))
        .withFailMessage(
            "%s is out of date: review %s and copy it over %s", COMMITTED, GENERATED, COMMITTED)
        .isEqualTo(committed);
  }

  private static String read(Path file) throws IOException {
    return Files.readString(file);
  }
}
