package com.programming.registration.api.controller;

import java.util.List;

import javax.imageio.spi.RegisterableService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.programming.registration.api.model.User;
import com.programming.registration.api.service.Registrationservice;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/registerapi")
public class RegistrationController {
	
	@Autowired
    private Registrationservice registrationService;

    @PostMapping("/register")
    public ResponseEntity<String> register( @RequestBody User user) {
    	return ResponseEntity.status(HttpStatus.CREATED).body(registrationService.register(user));
    }
    
    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> findAllUsers() {
    	if(registrationService.findAllUsers().size()==0) {
    		return ResponseEntity.notFound().build();
    	}
    	else {
    		return	ResponseEntity.ok(registrationService.findAllUsers());
    	}
    }

    @GetMapping("/findUser/{email}")
    public ResponseEntity<List<User>> findUser(@PathVariable String email) {
    	if(registrationService.findUser(email).size()==0) {
    		return ResponseEntity.notFound().build();
    	}
    	else {
    		return	ResponseEntity.ok(registrationService.findUser(email));
    	}
    }

    @DeleteMapping("/cancel/{id}")
    public ResponseEntity<List<User>> cancelRegistration(@PathVariable int id) {
    	if(registrationService.cancelRegistration(id).size()==0) {
    		return ResponseEntity.notFound().build();
    	}
    	else {
    		return	ResponseEntity.ok(registrationService.cancelRegistration(id));
    	}
    }

	

}
