package com.lasiyyema.takenote.entities;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "noteMapBook", uniqueConstraints = {@UniqueConstraint(columnNames = {"Id"})})
@Data
public class NoteMapBook {

    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "noteId", referencedColumnName = "Id")
    private Note noteBook;

    @OneToOne
    @JoinColumn(name = "bookId", referencedColumnName = "Id")
    private Book book;

    @CreationTimestamp
    @Column(name = "CreateDate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

}
