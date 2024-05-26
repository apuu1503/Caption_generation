import React from 'react';

const Header = () => {
  return (
    <div style={styles.container}>
      <header>
        <img src="your_image.jpg" alt="Your Name" style={styles.image} />
        <h1 style={styles.heading}>Your Name</h1>
        <p style={styles.about}>About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </header>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  image: {
    width: '150px',
    borderRadius: '50%',
  },
  heading: {
    marginTop: '20px',
    fontSize: '36px',
  },
  about: {
    marginTop: '10px',
    fontSize: '18px',
    color: '#666',
  }
};

export default Header;
