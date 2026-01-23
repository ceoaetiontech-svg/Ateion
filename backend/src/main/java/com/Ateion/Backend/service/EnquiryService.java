package com.Ateion.Backend.service;

import com.Ateion.Backend.dto.EnquiryRequest;
import com.Ateion.Backend.entity.Enquiry;
import com.Ateion.Backend.repository.EnquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnquiryService {

    @Autowired
    private EnquiryRepository repository;

    public Enquiry saveFromRequest(EnquiryRequest request) {

        Enquiry enquiry = new Enquiry();
        enquiry.setInstitutionName(request.getInstitutionName());
        enquiry.setInstitutionType(request.getInstitutionType());
        enquiry.setContactPerson(request.getContactPerson());
        enquiry.setDesignation(request.getDesignation());

        // 🔁 mapping frontend → backend
        enquiry.setOfficialEmail(request.getEmail());
        enquiry.setPhoneNumber(request.getPhone());

        enquiry.setCityState(request.getCityState());
        enquiry.setStudentStrength(request.getStudentStrength());
        enquiry.setEnquiryType(request.getEnquiryType());
        enquiry.setMessage(request.getMessage());

        return repository.save(enquiry);
    }
}
