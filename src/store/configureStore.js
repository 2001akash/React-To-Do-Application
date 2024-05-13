// Load tasks from local storage
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { loadTasks, saveTasks } from '../utils/localStorage'; // Import local storage functions

// Load tasks from local storage
const persistedState = {
  tasks: loadTasks(),
};

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Subscribe to store changes and save tasks to local storage
store.subscribe(() => {
  saveTasks(store.getState().tasks);
});

export default store;
