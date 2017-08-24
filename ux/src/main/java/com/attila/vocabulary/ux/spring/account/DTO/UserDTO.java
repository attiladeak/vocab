package com.attila.vocabulary.ux.spring.account.DTO;

import com.attila.vocabulary.ux.common.entities.User;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by attila.deak on 7/4/2016.
 */
public class UserDTO {

    private Integer id;

    private String username;

    private String password;

    private Boolean administrator;

    private Date lastlogin;

    private Integer loginnr;

    public UserDTO(User user) {
        this.id = user.getId();
        this.username = user.getUserName();
        this.password = user.getPassword();
        this.administrator = user.isAdministrator();
        this.lastlogin = user.getLastlogin();
        this.loginnr = user.getLoginnr();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getAdministrator() {
        return administrator;
    }

    public void setAdministrator(Boolean administrator) {
        this.administrator = administrator;
    }

    public Date getLastlogin() {
        return lastlogin;
    }

    public void setLastlogin(Date lastlogin) {
        this.lastlogin = lastlogin;
    }

    public Integer getLoginnr() {
        return loginnr;
    }

    public void setLoginnr(Integer loginnr) {
        this.loginnr = loginnr;
    }
}