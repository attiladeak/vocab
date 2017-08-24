package com.attila.vocabulary.ux.spring;

import com.attila.vocabulary.ux.common.entities.User;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

/**
 * Created by Student on 5/25/2016.
 */
@Service
@Controller
public class HomeController {

    @RequestMapping(path = "/")
    public String homeRedirect(HttpSession session) {
            return "redirect:/index.html";
    }

}
