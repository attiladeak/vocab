package com.attila.vocabulary.ux.spring.admin;

import com.attila.vocabulary.ux.common.IAdminService;
import com.attila.vocabulary.ux.common.entities.User;
import com.attila.vocabulary.ux.common.repositories.IUserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by attila.deak on 6/12/2016.
 */

@Service
public class AdminService implements IAdminService {

    private IUserRepository userRepository;

    public AdminService(IUserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> getUserList(){
        List<User> allUsersList = userRepository.findAll();
        return allUsersList;
    }

}
