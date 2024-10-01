import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import './socialpage.css';


const SocialPage = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/groups/655165751224277/', icon: Facebook, color: '#1877F2' },
    { name: 'Instagram', url: 'https://www.instagram.com/iedc.jecc?igsh=MXhiZTR1aWc1cTF4Ng==', icon: Instagram, color: '#E4405F' },
    { name: 'X (Twitter)', url: 'https://x.com/iedcjec', icon: Twitter, color: '#1DA1F2' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/iedc-jecc/', icon: Linkedin, color: '#0A66C2' },
    { name: 'YouTube', url: 'https://youtube.com/@iedc-jecc3656?si=CUAjqDDD8HeX5z2p', icon: Youtube, color: '#FF0000' },
  ];

  return (
    <div>
        <div className="social-container">
      <div className="social-content">
        <h1>IEDC JECC</h1>
        <h3>Connect With Us</h3>
        <p>Stay updated with our latest news, events, and initiatives by following us on social media.</p>
        <div className="social-grid">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <link.icon size={48} color={link.color} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default SocialPage;
