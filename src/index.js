import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store} from './Redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// const [state, setState] = useState(INITIAL_STATE);

// const onSubmit = event => {
//   event.preventDefault();
//   const { name, number } = state;
//   const id = nanoid();
//   onAddContact({ id, name, number });
//   reset();
// };
// // const reset = () => {
// //   setState(INITIAL_STATE);
// // };

// const onChange = event => {
//   const { name, value } = event.target;
//   setState(prevState => {
//     return { ...prevState, [name]: value };
//   });
// };
