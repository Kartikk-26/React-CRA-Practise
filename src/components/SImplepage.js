// src/SimplePage.js
import React from 'react';

const SimplePage = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Welcome to My Simple Page</h1>
        <p>This is a basic React.js page setup.</p>
      </header>
      <section style={styles.content}>
        <h2>About Us</h2>
        <p>We're learning how to build websites with React!</p>
      </section>
      <footer style={styles.footer}>
        <p>© 2024 My Simple Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
  },
  content: {
    margin: '20px 0',
  },
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '10px',
    marginTop: '20px',
  },
};

export default SimplePage;
