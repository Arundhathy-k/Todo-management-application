package com.gl.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gl.dto.TodoDto;
import com.gl.service.TodoService;
import lombok.AllArgsConstructor;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/todos")
public class TodoController {

	private TodoService todoService;

	@PostMapping
	public ResponseEntity<TodoDto> addTodoItem(@RequestBody TodoDto todoDto) {
		TodoDto savedTodo = todoService.addTodo(todoDto);
		return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
	}

	@GetMapping("{id}")
	public ResponseEntity<TodoDto> getTodoById(@PathVariable("id") Long id) {
		TodoDto todoDto = todoService.getTodo(id);
		return new ResponseEntity<>(todoDto,HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity<List<TodoDto>> getAllTodos() {
		List<TodoDto> todos = todoService.getAllTodos();
		return ResponseEntity.ok(todos);
	}

	@PutMapping("{id}")
	public ResponseEntity<TodoDto> updateTodoItem(@PathVariable("id") Long id, @RequestBody TodoDto todoDto) {
		TodoDto updatedTodo = todoService.updateTodo(todoDto, id);
		return ResponseEntity.ok(updatedTodo);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteTodoItem(@PathVariable("id") Long id) {
		todoService.deleteTodo(id);
		return ResponseEntity.ok("Todo deleted successfully!.");
	}
	
	@PatchMapping("{id}/complete")
	public ResponseEntity<TodoDto> completeTodo(@PathVariable("id") Long id){
		TodoDto updatedTodo = todoService.completeTodo(id);
		return ResponseEntity.ok(updatedTodo);
	}
	
	@PatchMapping("{id}/incomplete")
	public ResponseEntity<TodoDto> incompleteTodo(@PathVariable("id") Long id){
		TodoDto updatedTodo = todoService.incompleteTodo(id);
		return ResponseEntity.ok(updatedTodo);
	}
}
