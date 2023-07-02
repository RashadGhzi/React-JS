import React from 'react';
import ReactDOM from 'react-dom/client';
import Student from './component/Student';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let stu = ReactDOM.createRoot(document.getElementById('stu'));
stu.render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>,
);

stu.unmount()

