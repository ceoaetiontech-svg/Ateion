package com.Ateion.Backend; // Same package as main application

import org.junit.jupiter.api.Test;           // JUnit 5 test annotation
import org.springframework.boot.test.context.SpringBootTest; // Full app context test

@SpringBootTest // Boots complete Spring application context (DB, controllers, services)
class BackendApplicationTests {

    @Test
    void contextLoads() {
        // PASS = Spring Boot starts successfully (no @Configuration errors)
        // FAIL = Wiring issues, missing beans, DB connection failure
    }
}
