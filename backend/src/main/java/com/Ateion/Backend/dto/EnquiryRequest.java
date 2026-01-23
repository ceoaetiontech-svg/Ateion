package com.Ateion.Backend.dto;

import lombok.Data;

@Data
public class EnquiryRequest {

    private String institutionName;
    private String institutionType;
    private String contactPerson;
    private String designation;

    // 👇 frontend names
    private String email;
    private String phone;

    private String cityState;
    private String studentStrength;
    private String enquiryType;
    private String message;
}
