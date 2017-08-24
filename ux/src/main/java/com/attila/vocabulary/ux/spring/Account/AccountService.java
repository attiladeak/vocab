package com.attila.vocabulary.ux.spring.account;


import com.attila.vocabulary.ux.common.IAccountService;
import com.attila.vocabulary.ux.common.entities.User;
import com.attila.vocabulary.ux.common.repositories.IUserRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.AccessType;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AccountService implements IAccountService {

    @Resource
    private IUserRepository userRepository;

    public AccountService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public CreationOutcomes registerAccount(@NotNull String uname, @NotNull String pasword, @NotNull String retype) {

        CreationOutcomes result;

        if (pasword != null && !pasword.equals("")) {
            if (pasword.equals(retype)) {
                if (uname != null && !uname.equals("")) {
                    List<User> allUsersList = userRepository.findAll();
                    List<User> users = userRepository.findByUsername(uname);
                    if (users.size() == 0) {
                        if (allUsersList.size() == 0){
                            createUser(uname, pasword, true);
                        } else {
                            createUser(uname, pasword, false);
                        }
                        result = CreationOutcomes.SUCCESS;
                    } else {
                        result = CreationOutcomes.EXISTING_ACCOUNT ;
                    }
                } else {
                    result = CreationOutcomes.MISSING_USERNAME;
                }
            } else {
                result = CreationOutcomes.RETYPED_PASSWORD_DO_NOT_MATCH;
            }
        } else {
            result = CreationOutcomes.MISSING_PASSWORD;
        }

        return result;
    }

    public User createUser(String username, String password, Boolean isAdmin){
        final User entity = new User();
        entity.setUserName(username);
        entity.setPassword(password);
        entity.setAdministrator(isAdmin);
        entity.setLoginnr(0);

        final User savedEntity = userRepository.save(entity);

        return savedEntity;
    }

    public String deleteUser(String userid){

        Integer id = Integer.parseInt(userid);
        User entity = userRepository.findOne(id);

        if (entity != null){
            userRepository.delete(entity);
            return "Success";
        } else {
            return "Fail";
        }
    }

    public String updateUser(String userid, String password){

        Integer id = Integer.parseInt(userid);
        User entity = userRepository.findOne(id);

        if (entity != null){
            entity.setPassword(password);
            userRepository.save(entity);
            return "Success";
        } else {
            return "Fail";
        }
    }

    public User getUser(String userid){

        Integer id = Integer.parseInt(userid);
        User entity = userRepository.findOne(id);

        if(entity != null){
            return entity;
        } else {
            return null;
        }

    }


    @Override
    public CreationOutcomes loginAccount(@NotNull String uname, @NotNull String pasword){

        CreationOutcomes result;

        if (pasword != null && !pasword.equals("")) {
            if (uname != null && !uname.equals("")) {
                List<User> users = userRepository.findByUsernameAndPassword(uname, pasword);
                if (users.size() == 0) {
                    result = CreationOutcomes.INVALID_CREDENTIAL;
                } else {
                    User user = users.get(0);
                    result = CreationOutcomes.SUCCESS;

                    user.setLoginnr(user.getLoginnr()+1);
                    user.setLastlogin(new Date());

                }
            } else {
                result = CreationOutcomes.MISSING_USERNAME;
            }
        } else {
            result = CreationOutcomes.MISSING_PASSWORD;
        }

        return result;
    }

    public User getLoggedInUser(String uname, String pasword){

        List<User> loggegInUserList = new ArrayList<User>();
        User loggedInUser = new User();

        loggegInUserList = userRepository.findByUsernameAndPassword(uname, pasword);

        for (User user : loggegInUserList){
            loggedInUser = user;
        }

        return loggedInUser;
    }

    public CreationOutcomes changeAccountPassword(User user, @NotNull String oldPassword, @NotNull String newPassword, @NotNull String reTypeNewPassword ){
        CreationOutcomes result;

        if(oldPassword.equals("")){
            result = CreationOutcomes.MISSING_PASSWORD;
        } else if(!oldPassword.equals(user.getPassword())) {
            result = CreationOutcomes.INVALID_CREDENTIAL;
        } else if(newPassword.equals("") && reTypeNewPassword.equals("")){
            result = CreationOutcomes.MISSING_NEW_PASSWORD;
        } else if(!newPassword.equals(reTypeNewPassword)){
            result = CreationOutcomes.RETYPED_PASSWORD_DO_NOT_MATCH;
        } else {
            user.setPassword(newPassword);
            final User savedEntity = userRepository.save(user);
            result = CreationOutcomes.SUCCESS;
        }

        return result;
    }

}
