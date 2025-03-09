import React from 'react';

import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
