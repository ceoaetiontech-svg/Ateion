package com.Ateion.Backend.service;

import com.Ateion.Backend.dto.EnquiryRequest;
import com.Ateion.Backend.entity.Enquiry;
import com.Ateion.Backend.repository.EnquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class EnquiryService {

    @Autowired
    private EnquiryRepository repository;

    private static final Pattern EMAIL_PATTERN = Pattern.compile(
            "^[A-Za-z0-9+_.-]+@([A-Za-z0-9.-]+\\.[A-Za-z]{2,})$"
    );
    private static final Pattern PHONE_PATTERN = Pattern.compile(
            "^[6-9]\\d{9}$"
    );

    public Enquiry saveFromRequest(EnquiryRequest request) {
        // Institution name validation
        if (request.getInstitutionName() == null || request.getInstitutionName().trim().isEmpty()) {
            throw new IllegalArgumentException("Institution name is required");
        }

        // Institution type validation
        if (request.getInstitutionType() == null || request.getInstitutionType().trim().isEmpty() || 
            request.getInstitutionType().equals("Select type")) {
            throw new IllegalArgumentException("Please select a valid institution type");
        }

        // Contact person validation
        if (request.getContactPerson() == null || request.getContactPerson().trim().isEmpty()) {
            throw new IllegalArgumentException("Contact person name is required");
        }

        // Designation validation
        if (request.getDesignation() == null || request.getDesignation().trim().isEmpty()) {
            throw new IllegalArgumentException("Designation is required");
        }

        // Email validation
        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("Email is required");
        }
        if (!EMAIL_PATTERN.matcher(request.getEmail().trim()).matches()) {
            throw new IllegalArgumentException("Invalid email format");
        }

        // Phone validation
        if (request.getPhone() == null || request.getPhone().trim().isEmpty()) {
            throw new IllegalArgumentException("Phone number is required");
        }
        String phone = request.getPhone().trim();
        if (!PHONE_PATTERN.matcher(phone).matches()) {
            throw new IllegalArgumentException("Phone must be 10 digits starting with 6-9");
        }

        // City/State validation
        if (request.getCityState() == null || request.getCityState().trim().isEmpty()) {
            throw new IllegalArgumentException("City/State is required");
        }

        // Student strength validation
        if (request.getStudentStrength() == null || request.getStudentStrength().trim().isEmpty() ||
            request.getStudentStrength().equals("Select range")) {
            throw new IllegalArgumentException("Please select a valid student strength range");
        }

        // Enquiry type validation
        if (request.getEnquiryType() == null || request.getEnquiryType().trim().isEmpty() ||
            request.getEnquiryType().equals("Select enquiry type")) {
            throw new IllegalArgumentException("Please select a valid enquiry type");
        }

        // Referral validation
        if (request.getReferral() == null || request.getReferral().trim().isEmpty() ||
            request.getReferral().equals("Select option")) {
            throw new IllegalArgumentException("Please select how you found us");
        }

        Enquiry enquiry = new Enquiry();
        enquiry.setInstitutionName(request.getInstitutionName().trim());
        enquiry.setInstitutionType(request.getInstitutionType().trim());
        enquiry.setContactPerson(request.getContactPerson().trim());
        enquiry.setDesignation(request.getDesignation().trim());

        // Mapping frontend → backend
        enquiry.setOfficialEmail(request.getEmail().trim());
        enquiry.setPhoneNumber(phone);

        enquiry.setCityState(request.getCityState().trim());
        enquiry.setStudentStrength(request.getStudentStrength().trim());
        enquiry.setEnquiryType(request.getEnquiryType().trim());
        enquiry.setReferral(request.getReferral().trim());
        enquiry.setMessage(request.getMessage() != null ? request.getMessage().trim() : "");

        return repository.save(enquiry);
    }
}