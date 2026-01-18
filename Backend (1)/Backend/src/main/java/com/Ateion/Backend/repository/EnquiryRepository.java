package com.Ateion.Backend.repository; // Spring Data JPA repository layer

import com.Ateion.Backend.entity.Enquiry;         // Enquiry JPA entity
import org.springframework.data.jpa.repository.JpaRepository; // Base repo interface

import java.util.Optional; // Return type for single entity queries

// Provides CRUD operations + custom queries for Enquiry entity
public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {

    // Finds existing enquiry by official email (duplicate detection)
    Optional<Enquiry> findByOfficialEmail(String email);

    // Finds existing enquiry by phone number (duplicate detection)
    Optional<Enquiry> findByPhoneNumber(String phone);
}