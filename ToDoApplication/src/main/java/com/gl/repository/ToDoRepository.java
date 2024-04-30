package com.gl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gl.entity.Todo;

public interface ToDoRepository extends JpaRepository<Todo, Long> {

}
