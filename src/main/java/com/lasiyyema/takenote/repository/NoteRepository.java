package com.lasiyyema.takenote.repository;

import com.lasiyyema.takenote.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
