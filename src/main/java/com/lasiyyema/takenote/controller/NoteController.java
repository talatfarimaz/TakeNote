package com.lasiyyema.takenote.controller;

import com.lasiyyema.takenote.dtos.BookDTO;
import com.lasiyyema.takenote.entities.Book;
import com.lasiyyema.takenote.entities.Note;
import com.lasiyyema.takenote.entities.NoteMapBook;
import com.lasiyyema.takenote.entities.NoteMapCategory;
import com.lasiyyema.takenote.repository.*;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

  @GetMapping("/getSavedNoteList")
  public List<Note> getNoteList() {
    try {
      return null;

      /*select takenote.note.color, takenote.note.create_date, takenote.note.note_content, takenote.note.page_number, takenote.note.id, takenote.note_map_book.book_id, takenote.book.book_name, takenote.category.category from takenote.note
      inner join takenote.note_map_book
      on takenote.note.id = takenote.note_map_book.note_id
      inner join takenote.book
      on takenote.note_map_book.book_id = takenote.book.id
      inner join takenote.note_map_category
      on takenote.note.id = takenote.note_map_category.note_id
      inner join takenote.category
      on takenote.category.id = takenote.note_map_category.category_id*/

    } catch (Exception e) {
      throw e;
    }

       /* try {
            Session session = factory.openSession();
            String hql = "SELECT E.bookName FROM Book E";
            Query query = (Query) session.createQuery(hql);
            List results = query.list();
            return results;
        } catch (Exception e) {
            throw e;
        }*/
  }

}
