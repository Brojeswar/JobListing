package com.project.joblisting.controller;

import javax.servlet.http.HttpServletResponse;

import com.project.joblisting.repository.JobPostRepository;
import com.project.joblisting.model.JobPost;
import com.project.joblisting.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class JobPostController {

    @Autowired
    private JobPostRepository repo;

    @Autowired
    private SearchRepository searchRepo;

    @ApiIgnore
    @RequestMapping(value = "/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }

    @GetMapping("/jobposts")
    public List<JobPost> getAllJobPosts() {
        return repo.findAll();
    }

    @PostMapping("/addjobpost")
    public JobPost addJobPost(@RequestBody JobPost jobPost) {
        return repo.save(jobPost);
    }

    @DeleteMapping("/deletejobpost/{_id}")
    public void addJobPost(@PathVariable("_id") String _id) {
        repo.deleteById(_id);
    }

    @GetMapping("/jobposts/{text}")
    public List<JobPost> jobSearch(@PathVariable("text") String text) {
        return searchRepo.findByText(text);
    }
}
