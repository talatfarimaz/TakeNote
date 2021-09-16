package com.lasiyyema.takenote.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "book", uniqueConstraints = {@UniqueConstraint(columnNames = {"Id"})})
@Data
public class Book {

    @Id
    @Column(name = "Id")
    private Integer id;

    @Column(name = "BookName", length = 100, nullable = false)
    private String bookName;

    @Column(name = "CreateDate", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date createDate;

    @OneToOne(mappedBy = "book")
    private NoteMapBook noteMapBook;


    public Book() {
    }

    public Book(Integer id, String bookName, Date createDate) {
        this.id = id;
        this.bookName = bookName;
        this.createDate = createDate;
    }
}

