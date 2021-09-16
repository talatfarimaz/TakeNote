package com.lasiyyema.takenote.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "category", uniqueConstraints = {@UniqueConstraint(columnNames = {"Id"})})
@Data
public class Category {

    @Id
    @Column(name = "Id")
    private Integer id;

    @Column(name = "Category", length = 200, nullable = false)
    private String category;

    @Column(name = "CreateDate", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date createDate;

    @OneToMany(mappedBy = "category",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<Category> comments = new ArrayList<>();

    public Category() {
    }

    public Category(Integer id, String category, Date createDate) {
        this.id = id;
        this.category = category;
        this.createDate = createDate;
    }
}

