package com.Ateion.Backend; // Root package for Spring Boot application

import org.springframework.boot.SpringApplication;     // Boot starter
import org.springframework.boot.autoconfigure.SpringBootApplication; // Auto-configuration

@SpringBootApplication //  Single annotation = complete Spring Boot setup
public class BackendApplication { // Main entry point (runs on port 8080)

    // Standard Spring Boot main method - starts embedded Tomcat + loads context
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args); 
        // Auto-scans @Component/@Service/@RestController in com.Ateion.Backend.**
    }
}
