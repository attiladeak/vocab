package com.attila.vocabulary.ux.spring;

import com.attila.vocabulary.ux.common.IAccountService;
import com.attila.vocabulary.ux.common.IAdminService;
import com.attila.vocabulary.ux.common.IVocabularyService;
import com.attila.vocabulary.ux.common.repositories.IUserRepository;
import com.attila.vocabulary.ux.common.repositories.IVocabularyRepository;
import com.attila.vocabulary.ux.spring.account.AccountService;
import com.attila.vocabulary.ux.spring.admin.AdminService;
import com.attila.vocabulary.ux.spring.vocabulary.VocabularyService;
import org.springframework.context.annotation.*;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

@Configuration
@ComponentScan
@Import(PersistenceConfig.class)
@PropertySource("classpath:app.properties")
public class AppConfig {

    @Bean
    public PropertySourcesPlaceholderConfigurer propertyConfigIn() {
        return new PropertySourcesPlaceholderConfigurer();
    }

    @Bean
    public IAccountService accountService (final IUserRepository userRepository){
        return new AccountService(userRepository);
    }

    @Bean
    public IAdminService adminService (final IUserRepository userRepository){
        return new AdminService(userRepository);
    }

    @Bean
    public IVocabularyService vocabularyService (final IVocabularyRepository vocabularyRepository){
        return new VocabularyService(vocabularyRepository);
    }

}