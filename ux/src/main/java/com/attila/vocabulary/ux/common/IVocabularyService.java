package com.attila.vocabulary.ux.common;

import com.attila.vocabulary.ux.common.entities.EntryField;
import com.attila.vocabulary.ux.common.entities.User;
import com.attila.vocabulary.ux.common.entities.Vocabulary;
import com.attila.vocabulary.ux.spring.vocabulary.DTO.VocabularyDTO;

import java.util.List;

/**
 * Created by attila.deak on 2/7/2017.
 */
public interface IVocabularyService {

    List<Vocabulary> getVocabularyList();
    String createVocabulary(VocabularyDTO vocabularyDTO, User user);
    String deleteVocabulary(String id);
    Vocabulary getVocabulary(String id);
    EntryField getPrimaryLanguage(Vocabulary vocabulary);
    List<EntryField> getEntryFields(Vocabulary vocabulary);
}
