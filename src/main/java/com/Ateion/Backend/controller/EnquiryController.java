package com.Ateion.Backend.controller; // Base package for all controllers

import com.Ateion.Backend.dto.EnquiryRequest;     // DTO for incoming JSON validation + mapping
import com.Ateion.Backend.entity.Enquiry;         // JPA Entity for database persistence
import com.Ateion.Backend.service.EnquiryService; // Business logic layer for enquiry operations
import org.springframework.beans.factory.annotation.Autowired; // Spring DI for service injection
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;    // Flexible HTTP response wrapper
import org.springframework.web.bind.annotation.*; // REST annotations

import java.util.HashMap;
import java.util.Map; // Error response structure

/**
 * REST Controller handling institutional enquiry submissions
 * Endpoint: POST /api/enquiries
 * Serves frontend at http://localhost:3000 (Next.js app)
 */
@RestController      // Marks as REST API controller (JSON responses)
@RequestMapping("/api/enquiries") // Base URL path for all endpoints
@CrossOrigin(origins = "http://localhost:3000") // CORS for Next.js dev server
public class EnquiryController {

    // Spring automatically injects EnquiryService bean
    @Autowired
    private EnquiryService service; // Service layer handling DB operations + validation

    /**
     * Single POST endpoint receiving enquiry form data from frontend
     * Maps EnquiryRequest DTO → Enquiry entity → saves to database
     * 
     * @RequestBody automatically deserializes JSON to EnquiryRequest
     * Expected frontend payload matches EnquirePage formData state:
     * {
     *   institutionName, institutionType, contactPerson, designation,
     *   email, phone, studentStrength, enquiryType, cityState, 
     *   message, referral
     * }
     */
    @PostMapping // Handles POST /api/enquiries
    public ResponseEntity<?> submit(@RequestBody EnquiryRequest request) {
        try {
            // 1. Validate + convert DTO → Entity via service layer
            // 2. Persist to database (JPA/Hibernate)
            // 3. Return saved entity (201 Created would be more RESTful)
            Enquiry saved = service.saveFromRequest(request);
            return ResponseEntity.ok(saved); // 200 OK + saved enquiry JSON
            
        } catch (IllegalArgumentException e) {
            // Validation errors (missing required fields, invalid email, etc.)
            // Matches frontend error handling: alert(data.error || "Failed...")
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage()); // Single error message string
            return ResponseEntity.badRequest().body(error); // 400 + JSON { "error": "msg" }
        }
    }
}
