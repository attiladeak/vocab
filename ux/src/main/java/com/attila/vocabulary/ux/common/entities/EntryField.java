package com.attila.vocabulary.ux.common.entities;

import com.attila.vocabulary.ux.spring.vocabulary.DTO.EntryFieldDTO;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by attila.deak on 2/11/2017.
 */

@Entity
@Table(name = "entryfield")
public class EntryField {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer entryFieldId;
    private String name;
    private String description;
    private boolean isPrimaryEntry;

    @ManyToOne
    @JoinColumn(name = "vocabularyId")
    private Vocabulary vocabulary;

    @ManyToOne
    @JoinColumn(name = "createdby")
    private User createdBy;
    private Date createdDate;

    public EntryField(){}

    public EntryField(EntryFieldDTO entryFieldDTO){
        this.name = entryFieldDTO.getName();
        this.description = entryFieldDTO.getDescription();
    }

    public Integer getEntryFieldId() {
        return entryFieldId;
    }

    public void setEntryFieldId(Integer entryFieldId) {
        this.entryFieldId = entryFieldId;
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

    public boolean isPrimaryEntry() {
        return isPrimaryEntry;
    }

    public void setPrimaryEntry(boolean primaryEntry) {
        isPrimaryEntry = primaryEntry;
    }

    public Vocabulary getVocabulary() {
        return vocabulary;
    }

    public void setVocabulary(Vocabulary vocabulary) {
        this.vocabulary = vocabulary;
    }

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
}
