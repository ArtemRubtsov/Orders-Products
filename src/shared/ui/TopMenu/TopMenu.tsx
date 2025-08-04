'use client';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import { GiBrokenShield } from 'react-icons/gi';
import { LuClock10 } from 'react-icons/lu';
import s from './topMenu.module.scss'

const socket = io('http://localhost:3001'); 

export default function TopMenu() {
  const { t } = useTranslation();
  const [time, setTime] = useState<Date | null>(null);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    updateTime(); 
    const interval = setInterval(updateTime, 1000);
    socket.on('connect', () => socket.emit('join'));
    socket.on('sessionCount', (count: number) => setSessions(count));
    return () => {
      clearInterval(interval);
      socket.emit('leave');
      socket.disconnect();
    };
  }, []);

  const dayOfWeek = time ? time.toLocaleDateString('en-US', { weekday: 'long' }) : '';
  const date = time ? time.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: '2-digit' }) : '';
  const clockTime = time ? time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) : '--:--:--';

  return (
    <div className='shadow-lg bg-white z-1 '>
      <div className=''>
        <div className='row g-0 align-items-center bg-white pt-3 pb-3 shadow'>

          <div className='col-2 offset-md-custom d-flex align-items-center'>
            <GiBrokenShield className='text-success fs-1' />
            <span className='text-success px-2'>INVENTORY</span>
          </div>

          <div className='col-3'>
            <input
              name='search'
              id='search-field'
              className={`w-100 bg-light text-black px-3 form-control ${s.customInput}`}
              placeholder='Поиск'
            />
          </div>

          <div className='col-2 ms-auto text-muted d-flex flex-column align-items-start'>
            <div>{dayOfWeek || 'Day'}</div>
            <div className='d-flex gap-2'>
              <div>{date || 'Date'}</div>
              <div>
                <span className='pe-1'><LuClock10 className='text-success' /></span>
                <span className='ps-1'>{clockTime}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}