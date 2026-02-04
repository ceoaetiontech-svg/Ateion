package com.Ateion.Backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Enquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String institutionName;
    private String institutionType;
    private String contactPerson;
    private String designation;
    private String officialEmail;
    private String phoneNumber;
    private String cityState;
    private String studentStrength;
    private String enquiryType;

    @Column(length = 1000)
    private String message;
}
