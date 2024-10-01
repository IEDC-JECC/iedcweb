import React, { useState, useEffect } from 'react';

const Social = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    },); 

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <button onClick={closePopup} style={styles.closeButton}>×</button>
        <h3>Follow Us</h3>
        <ul style={styles.socialList}>
          <li>
            <a href="https://www.facebook.com/groups/655165751224277/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/iedc.jecc?igsh=MXhiZTR1aWc1cTF4Ng==" target="_blank" rel="noopener noreferrer" style={styles.link}>
              Instagram
            </a>
          </li>
          <li>
            <a href="https://x.com/iedcjec" target="_blank" rel="noopener noreferrer" style={styles.link}>
              X
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/iedc-jecc/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://youtube.com/@iedc-jecc3656?si=CUAjqDDD8HeX5z2p" target="_blank" rel="noopener noreferrer" style={styles.link}>
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    width: '300px',
    position: 'relative',
  },
  socialList: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '18px',
    marginBottom: '10px',
    display: 'block',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
};

export default Social;