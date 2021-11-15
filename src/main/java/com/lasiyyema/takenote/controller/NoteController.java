package com.lasiyyema.takenote.controller;

import com.lasiyyema.takenote.entities.Book;
import com.lasiyyema.takenote.entities.Note;
import com.lasiyyema.takenote.repository.NoteRepository;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.LinkedHashMap;

@RestController
@RequestMapping("/notes")
public class NoteController implements ErrorController {
    private final NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @PostMapping("/addNote")
    public long addBook(@RequestBody Object note) {
        try {
            Note noteData = new Note();
            noteData.setColor((String) ((LinkedHashMap) note).get("color"));
            noteData.setNoteContent((String) ((LinkedHashMap) note).get("noteContent"));
            noteData.setPageNumber(Integer.parseInt(String.valueOf(((LinkedHashMap) note).get("pageNumber"))));
            noteRepository.save(noteData);
            return noteData.getId();
        } catch (Exception e) {
            throw e;
        }
    }
}
