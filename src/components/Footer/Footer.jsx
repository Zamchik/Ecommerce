import styles from './Footer.module.css'

const Footer = () => {

  const supportLinks = ['FAQ', 'Shipping', 'Returns', 'Contact'];
  const legalLinks = ['Privacy Policy', 'Terms of Service'];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_columns}>
          {/* Колонка About */}
          <div className={styles.footer_columns}>
            <h3 className={styles.footer_title}>About</h3>
            <p className="footer-about-text">
              TechStore – your premier destination for cutting-edge electronics and gadgets.
              We offer quality products, expert advice, and exceptional customer service.
            </p>
          </div>

          {/* Колонка Support */}
          <div className={styles.footer_columns}>
            <h3 className={styles.footer_title}>Support</h3>
            <ul className={styles.footer_links}>
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.footer_link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка Legal */}
          <div className={styles.footer_columns}>
            <h3 className={styles.footer_title}>Legal</h3>
            <ul className={styles.footer_links}>
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#"  className={styles.footer_link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка Newsletter */}
          <div className={styles.footer_columns}>
            <h3 className={styles.footer_title}>Newsletter</h3>
            <form className={styles.footer_newsletter_form} >
              <input
                type="email"
                placeholder="Your email address"
                className={styles.footer_input}
                required
              />
              <button type="submit" className={styles.footer_button}>
                Subscribe
              </button>
            </form>
            <p className={styles.footer_newsletter_note}>
              Get special offers and the latest updates.
            </p>
          </div>
        </div>

        {/* Копирайт */}
        <div className={styles.footer_copyright}>
          <p>© 2026 TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;