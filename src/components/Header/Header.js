import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
const Header = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/">{t('hihi.ahihi')}</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  )
}


export default Header
