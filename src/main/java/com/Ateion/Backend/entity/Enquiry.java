package com.Ateion.Backend.entity; // JPA entities package

import jakarta.persistence.*; // JPA annotations for ORM mapping
import lombok.*;            // Lombok: reduces entity boilerplate

@Entity                    // Maps to database table "enquiry"
@Data                     // Getters/setters/toString/equals/hashCode
@NoArgsConstructor        // JPA default constructor
@AllArgsConstructor       // Full constructor (unused by JPA)
public class Enquiry {

    @Id                        // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment ID
    private Long id;

    // Direct mapping from EnquiryRequest DTO fields
    private String institutionName;
    private String institutionType;
    private String contactPerson;
    private String designation;
    
    //  Renamed for database schema consistency
    private String officialEmail;      // Maps from DTO.email
    private String phoneNumber;        // Maps from DTO.phone
    
    private String cityState;
    private String studentStrength;
    private String enquiryType;

    @Column(length = 1000)             // VARCHAR(1000) for longer messages
    private String message;
}
