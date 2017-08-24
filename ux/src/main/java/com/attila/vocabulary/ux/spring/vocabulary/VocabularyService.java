package com.attila.vocabulary.ux.spring.vocabulary;

import com.attila.vocabulary.ux.common.IVocabularyService;
import com.attila.vocabulary.ux.common.entities.EntryField;
import com.attila.vocabulary.ux.common.entities.User;
import com.attila.vocabulary.ux.common.entities.Vocabulary;
import com.attila.vocabulary.ux.common.repositories.IEntryFieldRepository;
import com.attila.vocabulary.ux.common.repositories.IVocabularyRepository;
import com.attila.vocabulary.ux.spring.vocabulary.DTO.EntryFieldDTO;
import com.attila.vocabulary.ux.spring.vocabulary.DTO.VocabularyDTO;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by attila.deak on 2/7/2017.
 */
@Service
public class VocabularyService implements IVocabularyService {

    @Resource
    private IVocabularyRepository vocabularyRepository;

    @Resource
    private IEntryFieldRepository entryFieldRepository;

    public VocabularyService(IVocabularyRepository vocabularyRepository){
        this.vocabularyRepository = vocabularyRepository;
    }

    public List<Vocabulary> getVocabularyList(){
        List<Vocabulary> vocabularyList = vocabularyRepository.findAll();
        return vocabularyList;
    };

    public String createVocabulary (VocabularyDTO vocabularyDTO, User currentUser){
        Vocabulary vocabulary = new Vocabulary(vocabularyDTO);
        vocabulary.setCreatedby(currentUser);
        vocabulary.setCreateddate(new Date());

        vocabularyRepository.save(vocabulary);

        createEntryField(vocabularyDTO.getPrimaryLanguage(), currentUser, true, vocabulary);

        for(EntryFieldDTO entryFieldDTO : vocabularyDTO.getEntryFields()){
            createEntryField(entryFieldDTO, currentUser, false, vocabulary);
        }

        return "Success";
    }

    public String deleteVocabulary(String id){
        Vocabulary entity = this.getVocabulary(id);

        if (entity != null){

            List<EntryField> entryFields = entryFieldRepository.findByVocabulary(entity);

            if (entryFields.size() > 0 ){
                for(EntryField e : entryFields){
                    entryFieldRepository.delete(e);
                }
            }
            vocabularyRepository.delete(entity);

            return "Success";
        } else {
            return "Fail";
        }
    }

    public Vocabulary getVocabulary(String id){
        Integer vocabid = Integer.parseInt(id);
        Vocabulary entity = vocabularyRepository.findOne(vocabid);
        return entity;
    }

    public EntryField getPrimaryLanguage(Vocabulary vocabulary){
        List<EntryField> primaryLanguages = entryFieldRepository.findByVocabularyAndIsPrimaryEntry(vocabulary, true);
        if(primaryLanguages.size() == 1){
            return primaryLanguages.get(0);
        } else {
            return null;
        }
    }

    public List<EntryField> getEntryFields(Vocabulary vocabulary){
        List<EntryField> entryFields = entryFieldRepository.findByVocabularyAndIsPrimaryEntry(vocabulary, false);
        return entryFields;
    }

    public void createEntryField(EntryFieldDTO entryFieldDTO, User currentUser, Boolean isPrimary, Vocabulary vocabulary){
        EntryField entryField = new EntryField(entryFieldDTO);
        entryField.setCreatedBy(currentUser);
        entryField.setPrimaryEntry(isPrimary);
        entryField.setVocabulary(vocabulary);
        entryField.setCreatedDate(new Date());



        entryFieldRepository.save(entryField);
    }
}
