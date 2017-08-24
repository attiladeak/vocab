package com.attila.vocabulary.ux.common.entities;

import javax.persistence.*;

/**
 * Created by attila.deak on 2/11/2017.
 */
@Entity
@Table(name = "entryvalue")
public class EntryValue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer entryValueId;

    private String value;

    @ManyToOne
    @JoinColumn(name = "entryFieldId")
    private EntryField entryField;

    @ManyToOne
    @JoinColumn(name = "vocabularyItemId")
    private VocabularyItem vocabularyItem;
}
