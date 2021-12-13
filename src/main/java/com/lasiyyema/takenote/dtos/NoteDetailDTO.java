package com.lasiyyema.takenote.dtos;

import lombok.Data;

import java.util.List;

@Data
public class NoteDetailDTO {
    private BookDTO bookDTO;
    private List<CategoryDTO> categoryDTOList;
}
