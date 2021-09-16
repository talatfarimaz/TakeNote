package com.lasiyyema.takenote.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "noteMapCategory", uniqueConstraints = {@UniqueConstraint(columnNames = {"Id"})})
@Data
public class NoteMapCategory {

    @Id
    @Column(name = "Id")
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "noteId", referencedColumnName = "Id")
    private Note noteCategory;

    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;


}
