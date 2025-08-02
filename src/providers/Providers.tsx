'use client'
import '../shared/styles/custom.scss'
import { store } from '../store'
import i18n from '../shared/config/i18n'
import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import TopMenu from '@/shared/ui/TopMenu/TopMenu'
import 'animate.css';
import NavigationMenu from '@/shared/ui/NavigationMenu/NavigationMenu'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <div className="vh-100 container-fluid px-0">
                <div className="d-flex flex-column vh-100">
                        <TopMenu />
                    <div className="d-flex flex-grow-1">
                        <NavigationMenu />
                    {children}
                    </div>
                </div>
            </div>
        </Provider>
    </I18nextProvider>
  )
}
