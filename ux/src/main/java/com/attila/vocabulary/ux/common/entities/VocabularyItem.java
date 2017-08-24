package com.attila.vocabulary.ux.common.entities;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by attila.deak on 6/12/2016.
 */
@Entity
@Table(name = "vocabularyitem")
public class VocabularyItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer vocabularyItemId;

    @ManyToOne
    @JoinColumn(name = "ID")
    private User createdBy;
    private Date createdDate;

    private String type;
    private String source;
    private String grammaticalType;

    @ManyToOne
    @JoinColumn(name = "vocabularyId")
    private Vocabulary vocabulary;

    public Integer getId() {
        return vocabularyItemId;
    }

    public void setId(Integer id) {
        this.vocabularyItemId = id;
    }

    public Date getCreateddate() {
        return createdDate;
    }

    public void setCreateddate(Date createddate) {
        this.createdDate = createddate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getGrammaticaltype() {
        return grammaticalType;
    }

    public void setGrammaticaltype(String grammaticaltype) {
        this.grammaticalType = grammaticaltype;
    }


    public User getCreatedby() {
        return createdBy;
    }

    public void setCreatedby(User createdby) {
        this.createdBy = createdby;
    }

    public Vocabulary getVocabulary() {
        return vocabulary;
    }

    public void setVocabulary(Vocabulary vocabulary) {
        this.vocabulary = vocabulary;
    }
}
