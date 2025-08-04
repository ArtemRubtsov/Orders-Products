import { Product } from "../../entities/order/types";

export const formatDate = (date: string, format: 'short' | 'iso') => {
  const d = new Date(date)
  if (format === 'short') return d.toLocaleDateString('ru-RU')
  return d.toISOString();
};


