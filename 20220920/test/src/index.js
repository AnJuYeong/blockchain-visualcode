import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // BrowserRouter이 컴포넌트로 감싸면 안에 있는 컴포넌트가 라우터 기능을 사용할 수 가 있다.
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

reportWebVitals();
