package com.lasiyyema.takenote.repository;

import com.lasiyyema.takenote.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}