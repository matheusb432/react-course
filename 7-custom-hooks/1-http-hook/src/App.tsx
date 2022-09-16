import React, { useCallback, useEffect, useState } from 'react';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import { useFetch } from './hooks';
import { Task } from './types';
import { firebaseUrl } from './util';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { error, isLoading, sendRequest } = useFetch();

  // NOTE since useFetch will update it's state whenever handleTaskData changes,
  // * it's necessary to wrap this in a useCallback hook so that it does not cause an infinite loop
  const handleTasksData = useCallback(async (data: any) => {
    const loadedTasks: Task[] = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);

  useEffect(() => {
    sendRequest({
      url: `${firebaseUrl}/tasks.json`,
      handleData: handleTasksData,
    });
  }, [handleTasksData, sendRequest]);

  const taskAddHandler = (task: Task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
