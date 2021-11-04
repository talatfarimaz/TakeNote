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
            System.out.println(note);
            /*noteRepository.save(note);
            return note.getId();*/

        } catch (Exception e) {
            throw e;
        }
        return 0;
    }
}
