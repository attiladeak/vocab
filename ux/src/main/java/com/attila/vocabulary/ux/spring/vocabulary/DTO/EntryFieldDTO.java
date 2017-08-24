package com.attila.vocabulary.ux.spring.vocabulary.DTO;

import com.attila.vocabulary.ux.common.entities.EntryField;

/**
 * Created by attila.deak on 2/20/2017.
 */
public class EntryFieldDTO {
    private String name;
    private String description;

    public EntryFieldDTO(EntryField entryField){
        if(entryField != null) {
            this.name = entryField.getName();
            this.description = entryField.getDescription();
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
