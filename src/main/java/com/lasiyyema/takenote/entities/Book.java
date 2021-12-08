package com.lasiyyema.takenote.entities;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "book", uniqueConstraints = {@UniqueConstraint(columnNames = {"Id"})})
@Data
public class Book implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "BookName", length = 100, nullable = false )
    private String bookName;

    @CreationTimestamp
    @Column(name = "CreateDate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

    /*@OneToOne(mappedBy = "book")
    private NoteMapBook noteMapBook;*/

    @OneToMany(mappedBy = "bookName",
            orphanRemoval = true)
    private List<Book> books = new ArrayList<>();


    public Book() {
    }

    public Book(Long id, String bookName, Date createDate) {
        this.id = id;
        this.bookName = bookName;
        this.createDate = createDate;
    }
}

