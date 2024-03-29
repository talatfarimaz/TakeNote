package com.lasiyyema.takenote.entities;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Category", length = 200, nullable = false)
    private String category;

    @CreationTimestamp
    @Column(name = "CreateDate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

    @OneToMany(mappedBy = "category",
            orphanRemoval = true)
    private List<Category> categories = new ArrayList<>();

    public Category() {
    }

    public Category(Long id, String category, Date createDate) {
        this.id = id;
        this.category = category;
        this.createDate = createDate;
    }
}

