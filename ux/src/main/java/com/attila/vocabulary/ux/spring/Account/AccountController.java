package com.attila.vocabulary.ux.spring.account;


import com.attila.vocabulary.ux.common.IAccountService;
import com.attila.vocabulary.ux.common.entities.User;
import com.attila.vocabulary.ux.spring.account.DTO.UserDTO;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@Service
@Controller
@RequestMapping(path="account")
public class AccountController {

    public static final String MESSAGE_TAG = "message";
    public static final String REGISTER_SUCCESS = "userRegistration";
    public static final String REGISTER_ERROR = "userRegistration";
    public static final String LOGIN_SUCCESS = "redirect:/index.html";
    public static final String LOGIN_ERROR = "userLogin";
    public static final String PASSWORD_CHANGE = "changePassword";
    private static final Logger LOGGER = LogManager.getLogger(AccountController.class);

    @Autowired
    private IAccountService registerService;


    @RequestMapping(path = "userRegistration")
    public String userRegistration() {
        return "userRegistration";
    }

    @Transactional
    @RequestMapping(path = "userRegistration", method = RequestMethod.POST)
    public String userRegistration(@RequestParam("Pasword") String pasword, @RequestParam("Uname") String uname,
                                   @RequestParam("ReType") String retype, final ModelMap model) {

        LOGGER.info("Creating account!");

        final IAccountService.CreationOutcomes outcome = registerService.registerAccount(uname, pasword, retype);


        final String resultPage;

        switch (outcome) {
            case SUCCESS: {
                resultPage = REGISTER_SUCCESS;
                model.addAttribute(MESSAGE_TAG, "You are a lucky fellow!");
                model.addAttribute("displayMetod", "display: none");
                break;
            }
            case RETYPED_PASSWORD_DO_NOT_MATCH: {
                resultPage = REGISTER_ERROR;
                model.addAttribute(MESSAGE_TAG, "Retyped password did not match!");
                break;
            }
            case EXISTING_ACCOUNT: {
                resultPage = REGISTER_ERROR;
                model.addAttribute(MESSAGE_TAG, "Account '" + uname + "' already exists!");
                break;
            }
            case MISSING_USERNAME: {
                resultPage = REGISTER_ERROR;
                model.addAttribute(MESSAGE_TAG, "Please enter a username!");
                break;
            }
            case MISSING_PASSWORD: {
                resultPage = REGISTER_ERROR;
                model.addAttribute(MESSAGE_TAG, "Please enter a password!");
                break;
            }
            default: {
                throw new UnsupportedOperationException("Not supported case!");
            }
        }

        return resultPage;
    }

    @RequestMapping(path="userLoginController" ,method = RequestMethod.GET)
    public String userLogin() {
        return LOGIN_ERROR;
    }

    @Transactional
    @RequestMapping(path = "userLoginController", method = RequestMethod.POST)
    public String userLogin(@RequestParam("Pasword") String pasword, @RequestParam("Uname") String uname, final ModelMap model, HttpSession session) {

        final IAccountService.CreationOutcomes outcome = registerService.loginAccount(uname, pasword);


        final String resultPage;

        switch (outcome) {
            case SUCCESS: {
                String currentUserName = "";
                resultPage = LOGIN_SUCCESS;
                User loggedInUser = registerService.getLoggedInUser(uname, pasword);
                session.setAttribute("currentUser", loggedInUser);

                break;
            }
            case INVALID_CREDENTIAL: {
                resultPage = LOGIN_ERROR;
                model.addAttribute(MESSAGE_TAG, "Invalid credentials!");
                break;
            }
            case MISSING_USERNAME: {
                resultPage = LOGIN_ERROR;
                model.addAttribute(MESSAGE_TAG, "Please enter a username!");
                break;
            }
            case MISSING_PASSWORD: {
                resultPage = LOGIN_ERROR;
                model.addAttribute(MESSAGE_TAG, "Please enter a password!");
                break;
            }
            default: {
                throw new UnsupportedOperationException("Not supported case!");
            }
        }

        return resultPage;
    }

    @Transactional
    @RequestMapping(path = "logoutController", method = RequestMethod.GET)
    public String userLogout(HttpSession session) {

        final String resultPage = "redirect:/";
        session.invalidate();

        return resultPage;
    }

    @Transactional
    @RequestMapping(path = "changePasswordNavigationController", method = RequestMethod.GET)
    public String changePasswordNavigation(ModelMap model) {

        return "changePassword";
    }

    @Transactional
    @RequestMapping(path = "changePasswordController", method = RequestMethod.POST)
    public String changePassword(@RequestParam("oldPassword") String oldPassword, @RequestParam("newPassword") String newPassword, @RequestParam("reTypeNewPassword") String reTypeNewPassword, final ModelMap model, HttpSession httpSession) {

        User loggedInUser = (User) httpSession.getAttribute("currentUser");

        IAccountService.CreationOutcomes outcome = registerService.changeAccountPassword(loggedInUser, oldPassword, newPassword, reTypeNewPassword);
        final String resultPage;

        switch (outcome) {
            case INVALID_CREDENTIAL: {
                resultPage = PASSWORD_CHANGE;
                model.addAttribute(MESSAGE_TAG, "Your current password is not correct. Please check and re-type");
                break;
            }
            case RETYPED_PASSWORD_DO_NOT_MATCH: {
                resultPage = PASSWORD_CHANGE;
                model.addAttribute(MESSAGE_TAG, "Passwords do not match. Plese re-type!");
                break;
            }
            case MISSING_PASSWORD: {
                resultPage = PASSWORD_CHANGE;
                model.addAttribute(MESSAGE_TAG, "Please enter your current password!");
                break;
            }
            case MISSING_NEW_PASSWORD: {
                resultPage = PASSWORD_CHANGE;
                model.addAttribute(MESSAGE_TAG, "Please enter your new password!");
                break;
            }
            case SUCCESS: {
                resultPage = PASSWORD_CHANGE;
                model.addAttribute(MESSAGE_TAG, "Your password is changed!");
                break;
            }
            default: {
                throw new UnsupportedOperationException("Not supported case!");
            }
        }

        return resultPage;
    }

    @Transactional
    @RequestMapping(path = "buttonClick", method = RequestMethod.POST)
    @ResponseBody
    String buttonclick() {
        return "Hello";
    }

    @RequestMapping(path="getCurrentUser" ,method = RequestMethod.POST)
    @ResponseBody public String getCurrentUser(HttpSession session) {

        User currentUser = (User)session.getAttribute("currentUser");
        return currentUser.getUserName();
    }

    @Transactional
    @RequestMapping(path = "createUser", method = RequestMethod.POST)
    @ResponseBody
    String createUser(String username, String password) {
        String response = null;

        User newUser = registerService.createUser(username, password, false);
        if (newUser != null){
            response = "Success";
        } else {
            response = "Fail";
        }

        return response;
    }

    @Transactional
    @RequestMapping(path = "updateUser", method = RequestMethod.POST)
    @ResponseBody
    String updateUser(String userid, String password) {
        String response = registerService.updateUser(userid, password);

        return response;
    }

    @Transactional
    @RequestMapping(path = "deleteUser", method = RequestMethod.POST)
    @ResponseBody
    String deleteUser(@RequestBody String userid) {
        String response = registerService.deleteUser(userid);

        return response;
    }

    @Transactional
    @RequestMapping(path = "getUser", method = RequestMethod.POST)
    @ResponseBody
    UserDTO getUser(@RequestBody String id) {
        User user = registerService.getUser(id);

        if(user != null){
            UserDTO userDTO = new UserDTO(user);
            return userDTO;
        } else {
            return null;
        }
    }
}