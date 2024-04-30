package com.gl.mapper;

import com.gl.dto.TodoDto;
import com.gl.entity.Todo;

public class TodoMapper {

	// convert todo jpa entity into todo dto
	public static TodoDto mapToTodoDto(Todo todo) {
		return new TodoDto(todo.getId(), todo.getTitle(), todo.getDescription(), todo.getCompleted());
	}

	// convert todo dto into todo jpa entity
	public static Todo mapToTodo(TodoDto todoDto) {
		return new Todo(todoDto.getId(), todoDto.getTitle(), todoDto.getDescription(), todoDto.getCompleted());

	}
}
