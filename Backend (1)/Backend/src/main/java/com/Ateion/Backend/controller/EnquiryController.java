package com.Ateion.Backend.controller;

import com.Ateion.Backend.dto.EnquiryRequest;
import com.Ateion.Backend.entity.Enquiry;
import com.Ateion.Backend.service.EnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = "http://localhost:3000")
public class  EnquiryController {

    @Autowired
    private EnquiryService service;

    @PostMapping
    public ResponseEntity<Enquiry> submit(@RequestBody EnquiryRequest request) {
        return ResponseEntity.ok(service.saveFromRequest(request));
    }
}
