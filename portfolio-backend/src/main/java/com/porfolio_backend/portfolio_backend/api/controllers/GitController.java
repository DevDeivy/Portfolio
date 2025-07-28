package com.porfolio_backend.portfolio_backend.api.controllers;

import com.porfolio_backend.portfolio_backend.application.services.GitService;
import com.porfolio_backend.portfolio_backend.domain.models.GitModel;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class GitController {

    @Autowired
    private GitService gitService;

    @GetMapping("/help")
    public GitModel getGitHelp(String message){
        return gitService.comandsHelp();
    }
}
