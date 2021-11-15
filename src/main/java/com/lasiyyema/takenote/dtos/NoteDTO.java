package com.lasiyyema.takenote.dtos;

import lombok.Data;

@Data
public class NoteDTO {
    private Integer id;
    private String noteContent;
    private Integer pageNumber;
    private String color;
}
