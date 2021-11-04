package com.lasiyyema.takenote.controller;

import com.lasiyyema.takenote.dtos.BookDTO;
import com.lasiyyema.takenote.entities.Book;
import com.lasiyyema.takenote.repository.BookRepository;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.modelmapper.ModelMapper;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController implements ErrorController {
    private final BookRepository bookRepository;

    private final ModelMapper modelMapper;
    private static SessionFactory factory;


    public BookController(BookRepository bookRepository, ModelMapper modelMapper) {
        this.bookRepository = bookRepository;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/addBook")
    public long addBook(@RequestBody Book book, RedirectAttributes redirectAttributes) {
        try {
            bookRepository.save(book);
            return book.getId();
        } catch (Exception e) {
            throw e;
        }
    }

    @GetMapping("/getBookList")
    public List<BookDTO> getBookList() {
        try {
            List<Book> bookList = bookRepository.findAll();
            List<BookDTO> bookDTOList = new ArrayList<>();
            for (Book book : bookList) {
                BookDTO bookDTO = new BookDTO();
                bookDTO.setId(book.getId());
                bookDTO.setBookName(book.getBookName());
                bookDTOList.add(bookDTO);
            }
            return bookDTOList;
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
