package com.attila.vocabulary.ux.spring.vocabulary;

import com.attila.vocabulary.ux.common.IVocabularyService;
import com.attila.vocabulary.ux.common.entities.EntryField;
import com.attila.vocabulary.ux.common.entities.User;
import com.attila.vocabulary.ux.common.entities.Vocabulary;
import com.attila.vocabulary.ux.spring.vocabulary.DTO.VocabularyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by attila.deak on 2/7/2017.
 */

@Service
@Controller
@RequestMapping(path="vocabulary")
public class VocabularyController {

    @Autowired
    private IVocabularyService vocabularyService;

    @RequestMapping (path = "getVocabularyList")
    @ResponseBody List<VocabularyDTO> getVocabularyList(){

        List<Vocabulary> vocabularyList = vocabularyService.getVocabularyList();

        List<VocabularyDTO> vocabularyDTOs = new ArrayList<VocabularyDTO>();

        for (Vocabulary vocabulary : vocabularyList){
            VocabularyDTO vocabularyDTO = new VocabularyDTO(vocabulary);
            vocabularyDTOs.add(vocabularyDTO);
        }

        return vocabularyDTOs;
    }

    @RequestMapping (path = "createVocabulary", method = RequestMethod.POST)
    @ResponseBody String createVocabulary(@RequestBody VocabularyDTO vocabularyDTO, HttpSession session){
        User currentUser = (User)session.getAttribute("currentUser");

        vocabularyService.createVocabulary(vocabularyDTO, currentUser);

        return "Success";
    }

    @RequestMapping(path = "deleteVocabulary", method = RequestMethod.POST)
    @ResponseBody
    String deleteVocabulary(@RequestBody String vocabularyid) {
        String response = vocabularyService.deleteVocabulary(vocabularyid);

        return response;
    }

    @RequestMapping(path = "getVocabulary", method = RequestMethod.POST)
    @ResponseBody
    VocabularyDTO getVocabulary(@RequestBody String id){
        Vocabulary vocabulary = vocabularyService.getVocabulary(id);

        VocabularyDTO vocabularyDTO = null;
        EntryField primaryLang = vocabularyService.getPrimaryLanguage(vocabulary);
        List<EntryField> entryFields = vocabularyService.getEntryFields(vocabulary);

        if(vocabulary != null){
            vocabularyDTO = new VocabularyDTO(vocabulary, primaryLang, entryFields);
        }


        return vocabularyDTO;
    }
}