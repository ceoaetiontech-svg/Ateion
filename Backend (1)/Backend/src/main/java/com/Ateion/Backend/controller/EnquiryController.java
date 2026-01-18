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
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
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
    @PostMapping
    public ResponseEntity<?> submit(@RequestBody EnquiryRequest request) {
        try {
            Enquiry saved = service.saveFromRequest(request);
            return ResponseEntity.ok(saved);

        } catch (IllegalArgumentException e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(error);

        } catch (Exception e) {   // 🔥 THIS WAS MISSING
            e.printStackTrace();  // IMPORTANT for debugging

            Map<String, String> error = new HashMap<>();
            error.put("error", "Internal server error while saving enquiry");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

}