package com.gl.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.gl.dto.TodoDto;
import com.gl.entity.Todo;
import com.gl.exception.ResourceNotFoundException;
import com.gl.mapper.TodoMapper;
import com.gl.repository.ToDoRepository;
import com.gl.service.TodoService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {

	private ToDoRepository todoRepository;

	@Override
	public TodoDto addTodo(TodoDto todoDto) {

		// convert TodoDto into Todo Jpa entity
		Todo todo = TodoMapper.mapToTodo(todoDto);

		// Todo Jpa entity
		Todo savedTodo = todoRepository.save(todo);

		// convert saved Todo Jpa entity object into TodoDto object and return
		return TodoMapper.mapToTodoDto(savedTodo);
	}

	@Override
	public TodoDto getTodo(Long id) {
		Todo todo = todoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Todo item is not exist with a given id: " + id));
		return TodoMapper.mapToTodoDto(todo);
	}

	@Override
	public List<TodoDto> getAllTodos() {
		List<Todo> todos = todoRepository.findAll();
		return todos.stream().map((todo) -> TodoMapper.mapToTodoDto(todo)).collect(Collectors.toList());
	}

	@Override
	public TodoDto updateTodo(TodoDto todoDto, Long id) {
		Todo todo = todoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Todo item is not exist with a given id: " + id));
		todo.setTitle(todoDto.getTitle());
		todo.setDescription(todoDto.getDescription());
		todo.setCompleted(todoDto.getCompleted());
		Todo updatedTodo = todoRepository.save(todo);
		return TodoMapper.mapToTodoDto(updatedTodo);
	}

	@Override
	public void deleteTodo(Long id) {
		Todo todo = todoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Todo item is not exist with a given id: " + id));
		todoRepository.deleteById(id);

	}

	@Override
	public TodoDto completeTodo(Long id) {

		Todo todo = todoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Todo item is not exist with a given id: " + id));
		todo.setCompleted("Yes");
		Todo updatedTodo = todoRepository.save(todo);
		return TodoMapper.mapToTodoDto(updatedTodo);
	}

	@Override
	public TodoDto incompleteTodo(Long id) {

		Todo todo = todoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Todo item is not exist with a given id: " + id));

		todo.setCompleted("No");
		Todo updatedTodo = todoRepository.save(todo);
		return TodoMapper.mapToTodoDto(updatedTodo);
	}

}
