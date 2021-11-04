package com.lasiyyema.takenote.controller;

import com.lasiyyema.takenote.dtos.CategoryDTO;
import com.lasiyyema.takenote.entities.Category;
import com.lasiyyema.takenote.repository.CategoryRepository;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController implements ErrorController {
    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @PostMapping("/addCategory")
    public long addCategory(@RequestBody Category category, RedirectAttributes redirectAttributes) {
        try {
            categoryRepository.save(category);
            return category.getId();
        } catch (Exception e) {
            throw e;
        }
    }

    @GetMapping("/getCategoryList")
    public List<CategoryDTO> getBookList() {
        try {
            List<Category> categoryList = categoryRepository.findAll();
            List<CategoryDTO> categoryDTOList = new ArrayList<>();
            for (Category category : categoryList) {
                CategoryDTO categoryDTO = new CategoryDTO();
                categoryDTO.setId(category.getId());
                categoryDTO.setCategoryName(category.getCategory());
                categoryDTOList.add(categoryDTO);
            }
            return categoryDTOList;
        } catch (Exception e) {
            throw e;
        }
    }
}
