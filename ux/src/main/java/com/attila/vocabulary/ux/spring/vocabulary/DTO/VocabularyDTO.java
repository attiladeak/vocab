package com.attila.vocabulary.ux.spring.vocabulary.DTO;

import com.attila.vocabulary.ux.common.entities.EntryField;
import com.attila.vocabulary.ux.common.entities.Vocabulary;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by attila.deak on 2/20/2017.
 */
public class VocabularyDTO {

    private String vocabularyName;
    private String vocabularyDescription;
    private Integer vocabularyID;
    private Date createdDate;


    private EntryFieldDTO primaryLanguage;
    private List<EntryFieldDTO> entryFields;

    public VocabularyDTO(){};

    public VocabularyDTO(Vocabulary vocabulary){
        this.vocabularyName = vocabulary.getName();
        this.vocabularyDescription = vocabulary.getDescription();
        this.vocabularyID = vocabulary.getVocabularyId();
        this.createdDate = vocabulary.getCreateddate();
    }

    public VocabularyDTO(Vocabulary vocabulary, EntryField primaryLang, List<EntryField> entries){
        this.vocabularyName = vocabulary.getName();
        this.vocabularyDescription = vocabulary.getDescription();
        this.vocabularyID = vocabulary.getVocabularyId();
        this.createdDate = vocabulary.getCreateddate();

        List<EntryFieldDTO> entryFieldsList = new ArrayList<EntryFieldDTO>();
        for(EntryField e : entries){
            entryFieldsList.add(new EntryFieldDTO(e));
        }

        this.primaryLanguage = new EntryFieldDTO(primaryLang);
        this.entryFields = entryFieldsList;
    }

    public String getVocabularyName() {
        return vocabularyName;
    }

    public void setVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
    }

    public String getVocabularyDescription() {
        return vocabularyDescription;
    }

    public void setVocabularyDescription(String vocabularyDescription) {
        this.vocabularyDescription = vocabularyDescription;
    }

    public EntryFieldDTO getPrimaryLanguage() {
        return primaryLanguage;
    }

    public void setPrimaryLanguage(EntryFieldDTO primaryLanguage) {
        this.primaryLanguage = primaryLanguage;
    }

    public List<EntryFieldDTO> getEntryFields() {
        return entryFields;
    }

    public void setEntryFields(List<EntryFieldDTO> entryFields) {
        this.entryFields = entryFields;
    }

    public Integer getVocabularyID() {
        return vocabularyID;
    }

    public void setVocabularyID(Integer vocabularyID) {
        this.vocabularyID = vocabularyID;
    }

    public Date getCreateddate() {
        return createdDate;
    }

    public void setCreateddate(Date createddate) {
        this.createdDate = createddate;
    }
}


