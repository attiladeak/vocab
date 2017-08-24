package com.attila.vocabulary.ux.common.entities;

import com.attila.vocabulary.ux.spring.vocabulary.DTO.EntryFieldDTO;
import com.attila.vocabulary.ux.spring.vocabulary.DTO.VocabularyDTO;

import javax.persistence.*;
import javax.swing.text.StringContent;
import java.util.Date;
import java.util.List;

/**
 * Created by attila.deak on 6/12/2016.
 */

@Entity
@Table(name = "vocabulary")
public class Vocabulary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer vocabularyId;

    @ManyToOne
    @JoinColumn(name = "createdby")
    private User createdby;

    @OneToMany(mappedBy = "vocabulary")
    private List<EntryField> entryfields;

    private String name;
    private String description;
    private Date createddate;

    public Vocabulary(){}

    public Vocabulary (VocabularyDTO vocabularyDTO){
        this.name = vocabularyDTO.getVocabularyName();
        this.description = vocabularyDTO.getVocabularyDescription();

        /*
        this.entryfields = null;

        for(EntryFieldDTO entryFieldDTO : vocabularyDTO.getEntryFields()){
            EntryField entryField = new EntryField(entryFieldDTO);
            entryField.setPrimaryEntry(false);
            this.entryfields.add(entryField);
        }

        EntryField primaryEntryField = new EntryField(vocabularyDTO.getPrimaryLanguage());
        primaryEntryField.setPrimaryEntry(true);
        this.entryfields.add(primaryEntryField);
        */
    }

    public Date getCreateddate() {
        return createddate;
    }

    public void setCreateddate(Date createddate) {
        this.createddate = createddate;
    }

    public User getCreatedby() {
        return createdby;
    }

    public void setCreatedby(User createdby) {
        this.createdby = createdby;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getVocabularyId() {
        return vocabularyId;
    }

    public void setVocabularyId(Integer vocabularyId) {
        this.vocabularyId = vocabularyId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<EntryField> getEntryfields() {
        return entryfields;
    }

    public void setEntryfields(List<EntryField> entryfields) {
        this.entryfields = entryfields;
    }
}
