package com.blog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

	@GetMapping("/user/signup")
	public String joinForm() {
		return "user/joinForm";
	}
	
	@GetMapping("/user/signin")
	public String loginForm() {
		return "user/loginForm";
	}
}
