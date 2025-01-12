import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="movie-genres">
          <h4>Được làm bởi Đặng Hồng Nguyên & Trần Nguyên</h4>
          <h4>Hotline: 0905664702</h4>
          {/* Thêm danh sách thể loại phim */}
        </div>
        <div className="contact-info">
          <h4>Email: dangnguyen0175@gmail.com</h4>
          {/* Thêm thông tin liên hệ */}
        </div>
        {/* Thêm các thành phần khác */}
      </div>
    </footer>
  );
};

export default Footer;
