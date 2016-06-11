package com.attila.vocabulary.ux.common;
import com.attila.vocabulary.ux.common.entities.User;
import org.jetbrains.annotations.NotNull;

import javax.servlet.http.HttpSession;

/**
 * Created by Student on 5/30/2016.
 */
public interface IAccountService {


    CreationOutcomes registerAccount(@NotNull String userName, @NotNull String password, @NotNull String retypedPassword);

    CreationOutcomes loginAccount(@NotNull String userName, @NotNull String password);

    User getLoggedInUser(String uname, String pasword);

    CreationOutcomes changeAccountPassword(User user, @NotNull String oldPassword, @NotNull String newPassword, @NotNull String reTypeNewPassword);

    enum CreationOutcomes {
        SUCCESS,
        RETYPED_PASSWORD_DO_NOT_MATCH,
        MISSING_USERNAME,
        MISSING_PASSWORD,
        INVALID_CREDENTIAL,
        MISSING_NEW_PASSWORD,
        EXISTING_ACCOUNT
    }

}
