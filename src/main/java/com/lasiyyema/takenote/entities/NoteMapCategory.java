package com.lasiyyema.takenote.entities;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "noteMapCategory", uniqueConstraints = {@UniqueConstraint(columnNames = {"Id"})})
@Data
public class NoteMapCategory {

    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "noteId", referencedColumnName = "Id")
    private Note noteCategory;

    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;

    @CreationTimestamp
    @Column(name = "CreateDate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;
}
