import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { labelClasses, inputClasses, studentRanges, enquiryTypes, institutionTypes } from "./data";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './validation'
import { z } from "zod";

type FormValues = z.infer<typeof schema>;

const EnquireForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: "onSubmit",           // ← only validate when clicking submit
        defaultValues: {
            institutionType: "Select type",
            studentStrength: "Select range",
            enquiryType: "Select enquiry type",
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("Form is valid → send to backend", data);
        // axios.post(...) or fetch here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
                {/* Institution Name */}
                <div className="sm:col-span-2">
                    <label className={labelClasses}>Institution Name *</label>
                    <input
                        {...register("institutionName")}
                        className={inputClasses}
                        placeholder="Full legal name of the institution"
                    />
                    {errors.institutionName && <p style={{color: "red"}}>{errors.institutionName.message}</p>}
                </div>

                {/* Institution Type */}
                <div>
                    <label className={labelClasses}>Institution Type *</label>
                    <select
                        {...register("institutionType")}
                        className={`${inputClasses} cursor-pointer appearance-none`}
                    >
                        {institutionTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    {errors.institutionType && <p style={{color: "red"}}>{errors.institutionType.message}</p>}
                </div>

                {/* Contact Person */}
                <div>
                    <label className={labelClasses}>Contact Person *</label>
                    <input
                        {...register("contactPerson")}
                        placeholder="Full name"
                        className={inputClasses}
                    />
                    {errors.contactPerson && <p style={{color: "red"}}>{errors.contactPerson.message}</p>}
                </div>

                {/* Designation */}
                <div>
                    <label className={labelClasses}>Designation *</label>
                    <input
                        {...register("designation")}
                        placeholder="e.g., Principal, Dean"
                        className={inputClasses}
                    />
                    {errors.designation && <p style={{color: "red"}}>{errors.designation.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className={labelClasses}>Official Email *</label>
                    <input
                        {...register("email")}
                        placeholder="institutional.email@domain.edu"
                        className={inputClasses}
                    />
                    {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label className={labelClasses}>Phone Number *</label>
                    <input
                        {...register("phone")}
                        placeholder="XXXXX XXXXX"
                        className={inputClasses}
                    />
                    {errors.phone && <p style={{color: "red"}}>{errors.phone.message}</p>}
                </div>

                {/* City/State */}
                <div>
                    <label className={labelClasses}>City / State *</label>
                    <input
                        {...register("cityState")}
                        placeholder="City, State"
                        className={inputClasses}
                    />
                    {errors.cityState && <p style={{color: "red"}}>{errors.cityState.message}</p>}
                </div>

                {/* Student Strength */}
                <div>
                    <label className={labelClasses}>Student Strength</label>
                    <select
                        {...register("studentStrength")}
                        className={`${inputClasses} cursor-pointer appearance-none`}
                    >
                        {studentRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                        ))}
                    </select>
                    {errors.studentStrength && <p style={{color: "red"}}>{errors.studentStrength.message}</p>}
                </div>

                {/* Nature of Enquiry */}
                <div>
                    <label className={labelClasses}>Nature of Enquiry *</label>
                    <select
                        {...register("enquiryType")}
                        className={`${inputClasses} cursor-pointer appearance-none`}
                    >
                        {enquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    {errors.enquiryType && <p style={{color: "red"}}>{errors.enquiryType.message}</p>}
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                    <label className={labelClasses}>Message *</label>
                    <textarea
                        {...register("message")}
                        placeholder="Please describe your enquiry in detail..."
                        className={`${inputClasses} min-h-[120px] resize-none`}
                    />
                    {errors.message && <p style={{color: "red"}}>{errors.message.message}</p>}
                </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-8">
                <p className="text-xs text-foreground/40 font-light max-w-xs text-center sm:text-left">
                    By submitting this form, you agree to our privacy policy and terms regarding institutional affiliation.
                </p>
                <motion.button
                    disabled={isSubmitting}
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="enquiry-button px-12 py-5 flex items-center gap-3 group"
                >
                    Send Enquiry <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
            </div>
        </form>
    )
}

export default EnquireForm