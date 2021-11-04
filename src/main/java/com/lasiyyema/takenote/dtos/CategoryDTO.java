package com.lasiyyema.takenote.dtos;

import lombok.Data;

@Data
public class CategoryDTO {
    private Integer id;
    private String categoryName;

    public CategoryDTO() {
    }
}
