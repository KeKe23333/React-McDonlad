import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//设置移动端适配
//把总的宽度分成100份，每一份就是1vw
//也分成 750 rem， 需要百分之多少就写多少， 750 rem就是全屏
document.documentElement.style.fontSize = 100/750 + 'vw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
