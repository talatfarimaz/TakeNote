package com.lasiyyema.takenote.entities;

import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "noteMapBook", uniqueConstraints = {@UniqueConstraint(columnNames = {"Id"})})
@Data
public class NoteMapBook {

    @Id
    @Column(name = "Id")
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "noteId", referencedColumnName = "Id")
    private Note noteBook;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bookId", referencedColumnName = "Id")
    private Book book;

}
