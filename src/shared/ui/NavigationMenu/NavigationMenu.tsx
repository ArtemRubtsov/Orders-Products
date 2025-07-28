import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function NavigationMenu() {
  const { t } = useTranslation();
  return (
    <motion.nav className="navbar navbar-expand-lg navbar-light bg-light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item"><Link href="/orders" className="nav-link">{t('nav.orders')}</Link></li>
          <li className="nav-item"><Link href="/products" className="nav-link">{t('nav.products')}</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
}