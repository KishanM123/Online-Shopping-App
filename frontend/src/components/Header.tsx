// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // Check for a logged-in user
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  const handleSignOut = () => {
    localStorage.removeItem('username');
    setUsername(null);
    window.location.href = '/'; // Redirect to home page after sign-out
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Shopping App</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          {username ? (
            <>
              <li>Hello, {username}</li>
              <li><button onClick={handleSignOut}>Sign Out</button></li>
            </>
          ) : (
            <li><Link to="/signin">Sign In</Link></li>
          )}
        </ul>
      </nav>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="What are you looking for today?"
          aria-label="Search products"
        />
      </form>
      <ThemeToggle />
    </header>
  );
};

export default Header;
