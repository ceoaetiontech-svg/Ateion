import { z } from 'zod';

export const schema = z.object({
    institutionName: z.string().min(3, "Institution name is required."),
    institutionType: z.string().refine(v => v !== "Select type", "Please select institution type"),
    contactPerson: z.string().min(3, "Full Name is required."),
    designation: z.string().min(3, "Designation is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\+?\d{10,15}$/, "Invalid phone number"),
    cityState: z.string().min(3, "City/State is required"),
    enquiryType: z.string().refine(v => v !== "Select enquiry type", "Please select enquiry type"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    // optional fields
    studentStrength: z.string().refine(v => v !== "Select range", "Please select student strength"),
});