package com.lasiyyema.takenote.controller;

import com.lasiyyema.takenote.entities.Book;
import com.lasiyyema.takenote.repository.BookRepository;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Date;

@RestController
@RequestMapping("/books")
public class BookController implements ErrorController {
    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PostMapping("/addBook")
    public long save(@RequestBody Book book,  RedirectAttributes redirectAttributes) {
        try {
            book.setCreateDate(new Date());
            bookRepository.save(book);
            return book.getId();
        }
        catch (Exception e) {
          throw e;
        }
    }
}
