const Footer = () => {
  return (
    <div className="footer">
      <h1>Sadlu Pizza Wala</h1>
      <hr />
      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Career</li>
        </ul>
      </div>
      <hr />
      <div className="social-links">
        <h3>Social Links</h3>
        <ul>
          <li>
            <img
              src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg?semt=ais_user_personalization&w=740&q=80"
              style={{ height: 30, width: 30 }}
            ></img>
          </li>
          <li>
            <img
              src="https://img.freepik.com/premium-vector/facebook-app-icon-social-media-logo-vector-illustration-meta_277909-402.jpg?semt=ais_user_personalization&w=740&q=80"
              style={{ height: 30, width: 30 }}
            ></img>
          </li>
          <li>
            <img
              src="https://img.freepik.com/premium-photo/twitter-logo_1080029-97.jpg?semt=ais_user_personalization&w=740&q=80"
              style={{ height: 30, width: 30 }}
            ></img>
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Lr-7Eun1rzHDm1vsAokNksXIzbOET7f3TA&s"
              style={{ height: 30, width: 30 }}
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
