package com.attila.vocabulary.ux.common.entities;

import org.jetbrains.annotations.NotNull;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by attila.deak on 6/12/2016.
 */

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username", unique = true)
    private String username;

    @OneToMany(mappedBy = "createdby")
    private List<Vocabulary> vocabularies;

    private String password;

    private Boolean administrator;

    private Date lastlogin;

    private Integer loginnr;




    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean isAdministrator() {
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
