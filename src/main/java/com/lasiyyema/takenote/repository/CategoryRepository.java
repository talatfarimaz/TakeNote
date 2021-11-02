package com.lasiyyema.takenote.repository;

import com.lasiyyema.takenote.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
