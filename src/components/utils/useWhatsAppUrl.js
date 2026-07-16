import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getWhatsAppMessage } from '../../data/whatsappMessages';

const DEFAULT_WHATSAPP_NUMBER = '15612535384';

function getWhatsAppNumber() {
  const configuredNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '';
  const digits = configuredNumber.replace(/[^0-9]/g, '');

  return digits || DEFAULT_WHATSAPP_NUMBER;
}

export function buildWhatsAppUrl(pathname) {
  const message = getWhatsAppMessage(pathname);
  return `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`;
}

export default function useWhatsAppUrl() {
  const { pathname } = useLocation();

  return useMemo(() => buildWhatsAppUrl(pathname), [pathname]);
}
