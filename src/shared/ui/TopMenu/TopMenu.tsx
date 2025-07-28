'use client';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useTranslation } from 'react-i18next';

const socket = io('http://localhost:3001'); 

export default function TopMenu() {
  const { t } = useTranslation();
  const [time, setTime] = useState(new Date());
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    socket.on('connect', () => socket.emit('join'));
    socket.on('sessionCount', (count: number) => setSessions(count));
    return () => {
      clearInterval(interval);
      socket.emit('leave');
      socket.disconnect();
    };
  }, []);

  return (
    <div className="d-flex justify-content-end p-2 bg-light">
      <span className="me-3">{time.toLocaleString('ru-RU')}</span>
      <span>{t('topMenu.sessions')}: {sessions}</span>
    </div>
  );
}