// Load tasks from local storage
export const loadTasks = () => {
    try {
      const serializedTasks = localStorage.getItem('tasks');
      if (serializedTasks === null) {
        return undefined; // Return undefined to use default state if no tasks are saved
      }
      return JSON.parse(serializedTasks);
    } catch (error) {
      console.error('Error loading tasks from local storage:', error);
      return undefined; // Return undefined to use default state if an error occurs
    }
  };
  
  // Save tasks to local storage
  export const saveTasks = (tasks) => {
    try {
      const serializedTasks = JSON.stringify(tasks);
      localStorage.setItem('tasks', serializedTasks);
    } catch (error) {
      console.error('Error saving tasks to local storage:', error);
    }
  };
  