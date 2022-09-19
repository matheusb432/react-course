import { useCallback } from 'react';
import { useFetch } from '../../hooks';
import { Task } from '../../types';
import { firebaseUrl } from '../../util';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

interface NewTaskProps {
  onAddTask: (task: Task) => void;
}

const NewTask = ({ onAddTask }: NewTaskProps) => {
  const { isLoading, error, sendRequest: createTaskRequest } = useFetch();

  const handleCreatedTaskData = useCallback(
    // NOTE the data will now be the second parameter since handleCreatedTaskData will have taskText binded to it
    async (taskText: string, data: any) => {
      const generatedId = data.name;
      const createdTask = { id: generatedId, text: taskText };

      onAddTask(createdTask);
    },
    [onAddTask]
  );

  const enterTaskHandler = useCallback(
    async (taskText: string) => {
      await createTaskRequest({
        url: `${firebaseUrl}/tasks.json`,
        options: {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
        // NOTE bind() will pre configure the first argument for the handleData in the useFetch hook as taskText
        // handleData: handleCreatedTaskData.bind(null, taskText),
        // NOTE however it's better to use the anonymous function since it's simpler
        handleData: (taskData) => handleCreatedTaskData(taskText, taskData),
      });
    },
    [createTaskRequest, handleCreatedTaskData]
  );

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
