package com.attila.vocabulary.ux.common.repositories;

import com.attila.vocabulary.ux.common.entities.EntryField;
import com.attila.vocabulary.ux.common.entities.Vocabulary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by attila.deak on 3/5/2017.
 */
public interface IEntryFieldRepository extends JpaRepository<EntryField, Integer>{
    public List<EntryField> findByVocabulary(Vocabulary vocabulary);
    public List<EntryField> findByVocabularyAndIsPrimaryEntry(Vocabulary vocabulary, Boolean isPrimary);
}
