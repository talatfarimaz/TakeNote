package com.lasiyyema.takenote.controller;

import com.lasiyyema.takenote.entities.Note;
import com.lasiyyema.takenote.entities.NoteMapBook;
import com.lasiyyema.takenote.entities.NoteMapCategory;
import com.lasiyyema.takenote.repository.*;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/notes")
public class NoteController implements ErrorController {
  private final NoteRepository noteRepository;
  private final BookRepository bookRepository;
  private final NoteMapBookRepository noteMapBookRepository;
  private final CategoryRepository categoryRepository;
  private final NoteMapCategoryRepository noteMapCategoryRepository;

  public NoteController(
      NoteRepository noteRepository,
      BookRepository bookRepository,
      NoteMapBookRepository noteMapBookRepository,
      CategoryRepository categoryRepository,
      NoteMapCategoryRepository noteMapCategoryRepository) {
    this.noteRepository = noteRepository;
    this.bookRepository = bookRepository;
    this.noteMapBookRepository = noteMapBookRepository;
    this.categoryRepository = categoryRepository;
    this.noteMapCategoryRepository = noteMapCategoryRepository;
  }

  @PostMapping("/addNote")
  public long addNote(@RequestBody Map<String, Object> note) {
    try {
      Note noteData = new Note();
      noteData.setColor((String) note.get("color"));
      noteData.setNoteContent((String) note.get("noteContent"));
      noteData.setPageNumber(Integer.parseInt(String.valueOf(note.get("pageNumber"))));
      noteRepository.save(noteData);
      if (noteData.getId() != null) {
        NoteMapBook noteMapBook = new NoteMapBook();
        long bookId =Long.parseLong(String.valueOf(note.get("noteMapBook")));
        noteMapBook.setBook(bookRepository.getById((bookId)));
        noteMapBook.setNoteBook(noteData);
        noteMapBookRepository.save(noteMapBook);

        List<Integer> categoryIdList = (List<Integer>) note.get("noteMapCategory");
        for (Integer categoryId : categoryIdList) {
          NoteMapCategory noteMapCategory = new NoteMapCategory();
          noteMapCategory.setNoteCategory(noteData);
          noteMapCategory.setCategory(categoryRepository.getById(Long.valueOf(categoryId)));
          noteMapCategoryRepository.save(noteMapCategory);
        }
      }
      return noteData.getId();
    } catch (Exception e) {
      throw e;
    }
  }
}
