import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          nav: { orders: 'Orders', products: 'Products' },
          topMenu: { sessions: 'Active sessions' },
          orders: {
            title: 'Orders',
            name: 'Name',
            productsCount: 'Products',
            createdAt: 'Created at',
            total: 'Total',
            delete: 'Delete',
            confirmDelete: 'Are you sure you want to delete this order?',
            confirmDeleteTitle: 'Confirm Deletion', 
          },
          products: {
            title: 'Products',
            name: 'Name',
            type: 'Type',
            warranty: 'Warranty',
            price: 'Price',
            order: 'Order',
            filterType: 'Filter by type',
            all: 'All',
          },
          common: { close: 'Close', yes: 'Yes', no: 'No', cancel: 'Cancel', delete: 'Delete' },
        },
      },
      ru: {
        translation: {
          nav: { orders: 'Приходы', products: 'Продукты' },
          topMenu: { sessions: 'Активные сессии' },
          orders: {
            title: 'Приходы',
            name: 'Название',
            productsCount: 'Продукты',
            createdAt: 'Создано',
            total: 'Сумма',
            delete: 'Удалить',
            confirmDelete: 'Вы уверены, что хотите удалить этот приход?',
            confirmDeleteTitle: 'Подтверждение удаления', 
          },
          products: {
            title: 'Продукты',
            name: 'Название',
            type: 'Тип',
            warranty: 'Гарантия',
            price: 'Цена',
            order: 'Приход',
            filterType: 'Фильтр по типу',
            all: 'Все',
          },
          common: { close: 'Закрыть', yes: 'Да', no: 'Нет', cancel: 'Отменить', delete: 'Удалить' },
        },
      },
    },
    lng: 'ru', 
    fallbackLng: 'en', 
    interpolation: { escapeValue: false }, 
  });

export default i18n;