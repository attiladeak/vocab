package com.attila.vocabulary.ux.spring;

import com.attila.vocabulary.ux.common.IAccountService;
import com.attila.vocabulary.ux.common.repositories.IUserRepository;
import com.attila.vocabulary.ux.spring.Account.AccountService;
import com.attila.vocabulary.ux.spring.PersistenceConfig;
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
    public IAccountService accountService(final IUserRepository userRepository){
        return new AccountService(userRepository);
    }
}