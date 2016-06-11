package com.attila.vocabulary.ux.common.repositories;

import com.attila.vocabulary.ux.common.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by attila.deak on 6/12/2016.
 */


public interface IUserRepository extends JpaRepository<User, Integer>{

}
