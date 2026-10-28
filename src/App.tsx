import React, { useEffect, useState } from 'react';
import { dataUrl, getData, mode, ResponseData } from './api';
import './App.css';

export default function App() {
  const [data, setData] = useState<ResponseData>();
  const [error, setError] = useState('');
  useEffect(() => { getData().then(setData).catch(() => setError('Не удалось получить данные')); }, []);
  return <main>
    <p className="label">Задание 7</p>
    <h1>Работа с GitHub Pages</h1>
    <div className="greeting" role="status">{error || data?.greeting || 'Загрузка...'}</div>
    <dl><dt>Режим</dt><dd>{mode}</dd><dt>Источник данных</dt><dd>{mode === 'development' ? 'Локальный json-server' : 'GitHub Raw'}</dd></dl>
    <a href={dataUrl}>Открыть JSON</a>
    <footer>Выполнил: {data?.author || 'Мельник А.А.'}</footer>
  </main>;
}
