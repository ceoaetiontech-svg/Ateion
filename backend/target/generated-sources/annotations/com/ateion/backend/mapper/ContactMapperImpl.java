package com.ateion.backend.mapper;

import com.ateion.backend.dto.ContactRequestDTO;
import com.ateion.backend.dto.ContactResponseDTO;
import com.ateion.backend.entity.Contact;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-03-23T16:03:32+0530",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.17 (Ubuntu)"
)
@Component
public class ContactMapperImpl implements ContactMapper {

    @Override
    public Contact toEntity(ContactRequestDTO requestDTO) {
        if ( requestDTO == null ) {
            return null;
        }

        Contact.ContactBuilder contact = Contact.builder();

        contact.name( requestDTO.getName() );
        contact.email( requestDTO.getEmail() );
        contact.subject( requestDTO.getSubject() );
        contact.message( requestDTO.getMessage() );

        return contact.build();
    }

    @Override
    public ContactResponseDTO toResponseDTO(Contact contact) {
        if ( contact == null ) {
            return null;
        }

        ContactResponseDTO.ContactResponseDTOBuilder contactResponseDTO = ContactResponseDTO.builder();

        contactResponseDTO.id( contact.getId() );
        contactResponseDTO.name( contact.getName() );
        contactResponseDTO.email( contact.getEmail() );
        contactResponseDTO.subject( contact.getSubject() );
        contactResponseDTO.message( contact.getMessage() );
        contactResponseDTO.createdAt( contact.getCreatedAt() );

        return contactResponseDTO.build();
    }

    @Override
    public List<ContactResponseDTO> toResponseDTOList(List<Contact> contacts) {
        if ( contacts == null ) {
            return null;
        }

        List<ContactResponseDTO> list = new ArrayList<ContactResponseDTO>( contacts.size() );
        for ( Contact contact : contacts ) {
            list.add( toResponseDTO( contact ) );
        }

        return list;
    }
}
