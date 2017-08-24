package com.attila.vocabulary.ux.spring.admin;

import com.attila.vocabulary.ux.common.IAdminService;
import com.attila.vocabulary.ux.common.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by attila.deak on 6/12/2016.
 */

@Controller
public class AdminController {

    private static final String MESSAGE_TAG = "userlist";
    private static final String USER_MANAGEMENT_PAGE = "userManagement";

    @Autowired
    private IAdminService adminService;

    @RequestMapping(path = "userManagement", method = RequestMethod.POST)
    @ResponseBody List<User> showUsersManagement(){
        List<User> userlist = adminService.getUserList();
        return userlist;
    }
}
