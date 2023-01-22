import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Title from 'components/atoms/Title';
import Divider from 'components/atoms/Divider';
import TodoCard from 'components/molecules/TodoCard';
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Todo } from './index.d';

import './App.css';
import Button from 'components/atoms/Button';
import { IconArrowRight } from '@tabler/icons';

function App() {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') ?? '[]'));
  const [inputValue, setInputValue] = useState('');

  const todo = useMemo(() => todos.filter((todo) => !todo.done), [todos]);
  const done = useMemo(() => todos.filter((todo) => todo.done), [todos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onChange = (_e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(_e.target.value);
  };

  const onSubmit = (_e: FormEvent<HTMLFormElement>) => {
    _e.preventDefault();

    if (inputValue !== '') {
      setTodos((old) => [
        ...old,
        {
          id: old.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
          content: inputValue,
          done: false,
        },
      ]);

      setInputValue('');
    }
  };

  const onDone = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              done: true,
            };
          }
          return todo;
        }),
      );
    },
    [todos],
  );

  const onDelete = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <Container>
      <Flex as="form" align="center" styles={{ marginBottom: '15px' }} onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={inputValue}
          id="new_todo_input"
          type="text"
          placeholder="Add something to do ..."
        />
        <Button type="submit" label="Add" rightIcon={<IconArrowRight size={18} />} />
      </Flex>

      <Flex direction="column">
        {todo.map((todo) => (
          <TodoCard key={todo.id} todo={todo} onDone={onDone} onDelete={onDelete} />
        ))}
        {todo.length === 0 ? <Title>Everything's complete!</Title> : null}
      </Flex>

      <Divider />

      <Flex direction="column">
        {done.map((todo) => (
          <TodoCard key={todo.id} todo={todo} onDone={onDone} onDelete={onDelete} />
        ))}
      </Flex>
    </Container>
  );
}

export default App;
