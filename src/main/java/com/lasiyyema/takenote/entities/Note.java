package com.lasiyyema.takenote.entities;

import lombok.Data;

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
    private Integer id;

    @Column(name = "NoteContent", length = 2000, nullable = false)
    private String noteContent;

    @Column(name = "CreateDate", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date createDate;

    @Column(name = "PageNumber")
    private Integer pageNumber;

    @OneToOne(mappedBy = "noteBook")
    private NoteMapBook noteMapBook;

    @OneToOne(mappedBy = "noteCategory")
    private NoteMapCategory noteMapCategory;



    public Note() {
    }

    public Note(Integer id, String noteContent, Date createDate, Integer pageNumber, Book book, Set<Category> categories) {
        this.id = id;
        this.noteContent = noteContent;
        this.createDate = createDate;
        this.pageNumber = pageNumber;
    }
}
