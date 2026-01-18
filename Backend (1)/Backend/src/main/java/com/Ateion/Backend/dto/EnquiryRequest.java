package com.Ateion.Backend.dto; // DTO package for API request/response objects

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data; // Lombok: auto-generates getters/setters/toString/equals/hashCode

@Data // Single annotation replaces 50+ lines of boilerplate
public class EnquiryRequest { // Maps directly to frontend EnquirePage formData

    // Institution details (required for B2B enquiries)
    private String institutionName;  // School/college name
    private String institutionType;  // CBSE/ICSE/State board, college, coaching
    private String contactPerson;    // Principal/teacher name
    private String designation;      // HOD/Principal/Coordinator

    // 👇 Exact frontend form field names (email, phone)
    @JsonAlias({"email", "officialEmail"})
    private String email;// contact@school.com
    @JsonAlias({"phone", "phoneNumber"})
    private String phone;            // +91-XXXXXXXXXX

    // Additional context fields
    private String cityState;        // "Pune, Maharashtra"
    private String studentStrength;  // "500-1000 students"
    private String enquiryType;      // "NCO Exam"/"AI Workshops"/"Both"
    private String message;          // Free-text requirements
    private String referral;         // How they found us
}