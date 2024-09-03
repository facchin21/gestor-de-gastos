import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDate = (dateString : string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return format(date, 'dd MMMM yyyy', { locale: es });
};