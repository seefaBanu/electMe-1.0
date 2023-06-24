package com.electMe.voteApp.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Election
{
    @Id
    private Long id;
    private String electionName;


    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
