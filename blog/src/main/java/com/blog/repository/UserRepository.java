package com.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blog.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	// " SELECT * FROM user WHERE username = ? AND password = ? "
	User findByUsernameAndPassword(String username, String password);
}
