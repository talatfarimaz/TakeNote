package com.lasiyyema.takenote.entities;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "note", uniqueConstraints = {@UniqueConstraint(columnNames = {"Id"})})
@Data
public class Note {

    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "NoteContent", length = 2000, nullable = false)
    private String noteContent;

    @CreationTimestamp
    @Column(name = "CreateDate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

    @Column(name = "PageNumber")
    private Integer pageNumber;

    @Column(name = "Color", length = 100, nullable = false)
    private String color;

    @OneToOne(mappedBy = "noteBook")
    private NoteMapBook noteMapBook;

    @ManyToOne
    private NoteMapCategory noteMapCategory;



    public Note() {
    }

    public Note(Long id, String noteContent, Date createDate, Integer pageNumber, Book book, Set<Category> categories, String color) {
        this.id = id;
        this.noteContent = noteContent;
        this.createDate = createDate;
        this.pageNumber = pageNumber;
        this.color = color;
    }
}

