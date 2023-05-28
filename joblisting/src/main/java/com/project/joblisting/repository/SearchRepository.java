package com.project.joblisting.repository;

import com.project.joblisting.model.JobPost;

import java.util.List;

public interface SearchRepository {

    List<JobPost> findByText(String text);
}
