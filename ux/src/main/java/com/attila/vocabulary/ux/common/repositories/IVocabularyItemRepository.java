package com.attila.vocabulary.ux.common.repositories;

import com.attila.vocabulary.ux.common.entities.Vocabulary;
import com.attila.vocabulary.ux.common.entities.VocabularyItem;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by attila.deak on 6/12/2016.
 */
public interface IVocabularyItemRepository extends JpaRepository<VocabularyItem, Integer> {
}
