package com.programming.registration.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.programming.registration.api.model.User;
import com.programming.registration.api.repository.UserRepository;

@Service
public class Registrationservice {
	
	@Autowired
    private UserRepository repository;

    
    public String register(User user) {
        repository.save(user);
        return "Hi " + user.getName() + " your Registration process successfully completed";
    }
    
    
    public List<User> findAllUsers() {
        return repository.findAll();
    }

    
    public List<User> findUser(String email) {
        return repository.findByEmail(email);
    }

    
    public List<User> cancelRegistration(int id) {
        repository.deleteById(id);
        return repository.findAll();
    }


}
