package com.porfolio_backend.portfolio_backend.application.services;

import com.porfolio_backend.portfolio_backend.domain.models.GitModel;
import org.springframework.stereotype.Service;

@Service
public class GitService {

    private GitModel gitModel;

    public GitModel comandsHelp() {
        StringBuilder message = new StringBuilder();
        message.append("usage: git [ about me | skills | projects | contact me | download CV ]\n");
        message.append("commands social media[ --linkedin ] [ --notion ] [ --repository ]\n");
        return new GitModel(message.toString());
    }

    public GitModel commandAbout(){
        StringBuilder message = new StringBuilder();
        message.append("I´m Full-stack developer, I mantengo in constant learness constantly I´m learning each day, i will prove eficiencia and compromiso with the job");
        return new GitModel(message.toString());
    }

    public GitModel commandSkills(){
        StringBuilder message = new StringBuilder();
        message.append("Frontend - HTML | CSS | SASS | JavaScript | Angular | Astro");
        message.append("Backend - Spring | Node js | Django");
        message.append("Tools - Git | Github | npm | powerShell | kubernetes");
        message.append("Knowledges basics - Software Architecture | DevOps");
        return new GitModel(message.toString());
    }

    public String commandProjects(){
        return "";
    }

    public String commandContactMe(){
        return "";
    }
}
