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

        // Check email duplicate
        if (repository.findByOfficialEmail(request.getEmail().trim()).isPresent()) {
            throw new IllegalArgumentException("Email already exists");
        }

        // Check phone duplicate
        if (repository.findByPhoneNumber(phone).isPresent()) {
            throw new IllegalArgumentException("Phone number already exists");
        }

        Enquiry enquiry = new Enquiry();
        enquiry.setInstitutionName(request.getInstitutionName());
        enquiry.setInstitutionType(request.getInstitutionType());
        enquiry.setContactPerson(request.getContactPerson());
        enquiry.setDesignation(request.getDesignation());

        // Mapping frontend → backend
        enquiry.setOfficialEmail(request.getEmail().trim());
        enquiry.setPhoneNumber(phone);

        enquiry.setCityState(request.getCityState());
        enquiry.setStudentStrength(request.getStudentStrength());
        enquiry.setEnquiryType(request.getEnquiryType());
        enquiry.setMessage(request.getMessage());

        return repository.save(enquiry);
    }
}
