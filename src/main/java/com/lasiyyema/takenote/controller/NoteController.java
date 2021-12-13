package com.lasiyyema.takenote.controller;

import com.lasiyyema.takenote.dtos.BookDTO;
import com.lasiyyema.takenote.dtos.CategoryDTO;
import com.lasiyyema.takenote.dtos.NoteDTO;
import com.lasiyyema.takenote.dtos.NoteDetailDTO;
import com.lasiyyema.takenote.entities.*;
import com.lasiyyema.takenote.repository.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
        long bookId = Long.parseLong(String.valueOf(note.get("noteMapBook")));
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
  public List<NoteDTO> getNoteList() {
    try {
      List<Note> noteList = noteRepository.findAll();
      List<NoteDTO> noteDTOList = new ArrayList<>();
      for (Note note : noteList) {
        NoteDTO noteDTO = new NoteDTO();
        noteDTO.setNoteContent(note.getNoteContent());
        noteDTO.setId(note.getId());
        noteDTO.setColor(note.getColor());
        noteDTO.setPageNumber(note.getPageNumber());
        noteDTOList.add(noteDTO);
      }
      return noteDTOList;
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

  @GetMapping("/getNoteDetail/{id}")
  @ResponseBody
  public NoteDetailDTO getNoteDetail(@PathVariable Long id) {
    try {
      List<NoteMapBook> noteMapBook =  noteMapBookRepository.findAll();

      List<NoteMapCategory> noteMapCategoryList = noteMapCategoryRepository.findAll();
      BookDTO bookDTO = new BookDTO();
      List<CategoryDTO> categoryDTOList = new ArrayList<>();
      for (NoteMapBook mapBook : noteMapBook) {
        if (mapBook.getNoteBook().getId().equals(id)) {
          bookDTO.setId(mapBook.getBook().getId());
          bookDTO.setBookName(mapBook.getBook().getBookName());
        }
      }

      for (NoteMapCategory noteMapCategory : noteMapCategoryList) {
        if (noteMapCategory.getNoteCategory().getId().equals(id)) {
          CategoryDTO categoryDTO = new CategoryDTO();
          categoryDTO.setCategoryName(noteMapCategory.getCategory().getCategory());
          categoryDTO.setId(noteMapCategory.getCategory().getId());
          categoryDTOList.add(categoryDTO);
        }
      }
      NoteDetailDTO noteDetailDTO = new NoteDetailDTO();
      noteDetailDTO.setBookDTO(bookDTO);
      noteDetailDTO.setCategoryDTOList(categoryDTOList);

      /*SessionFactory factory = null;
      Session session = null;
      Configuration configuration = new Configuration().configure();
      factory = configuration.buildSessionFactory();
      session = factory.openSession();
      String hqlCategory =
          "FROM NoteMapCategory  WHERE NoteMapCategory.noteCategory.id = " + id;
      List resultListCategory = session.createQuery(hqlCategory).list();
      String hqlBook =
          "SELECT NoteMapBook.book.id FROM NoteMapBook  WHERE NoteMapBook.noteBook.id = :id";
      List<Book> resultListBook = session.createQuery(hqlBook).list();
      NoteDetailDTO noteDetailDTO = new NoteDetailDTO();
      BookDTO bookDTO = new BookDTO();
      bookDTO.setBookName(resultListBook.get(0).getBookName());
      bookDTO.setId(resultListBook.get(0).getId());
      noteDetailDTO.setBookDTO(bookDTO);
      List<CategoryDTO> categoryDTOList = new ArrayList<>();
      for (Category category : resultListCategory) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setCategoryName(category.getCategory());
        categoryDTO.setId(category.getId());
        categoryDTOList.add(categoryDTO);
      }
      noteDetailDTO.setCategoryDTOList(categoryDTOList);*/
      return noteDetailDTO;
    } catch (Exception e) {
      throw e;
    }
  }
}
