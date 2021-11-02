package com.lasiyyema.takenote.controller;

import com.lasiyyema.takenote.dtos.BookDTO;
import com.lasiyyema.takenote.entities.Book;
import com.lasiyyema.takenote.repository.BookRepository;
import org.modelmapper.ModelMapper;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController implements ErrorController {
    private final BookRepository bookRepository;

    private final ModelMapper modelMapper;

    public BookController(BookRepository bookRepository, ModelMapper modelMapper) {
        this.bookRepository = bookRepository;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/addBook")
    public long addBook(@RequestBody Book book, RedirectAttributes redirectAttributes) {
        try {
            book.setCreateDate(new Date());
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
                BookDTO bookDTO = modelMapper.map(book, BookDTO.class);
                bookDTOList.add(bookDTO);
            }
            return bookDTOList;
        } catch (Exception e) {
            throw e;
        }
    }

}
