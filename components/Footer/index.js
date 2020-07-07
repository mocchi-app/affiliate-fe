import styles from './Footer.module.scss';
import stylesUtils from '../../styles/utils.module.scss';

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerMenu}>
        <div className={styles.menuItemLeft}>
          <ul className={stylesUtils.list}>
            <li>Brands</li>
            <li>Affiliates</li>
            <li>Contact</li>
          </ul>
          <ul className={stylesUtils.list}>
            <li>Terms of Use</li>
            <li>Privacy Notice</li>
          </ul>
        </div>
        <div className={styles.menuItemRight}>
          <img className={styles.logo} src='/images/logo_mocchi_green.png' alt='logo' />
          <div className={styles.iconsSection}>
            <img src='/images/fb-green.png' alt="facebook"/>
            <img src="/images/twitter-green.png" alt="twitter"/>
            <img src="/images/youtube-green.png" alt="youtube"/>
            <img src="/images/ig-green.png" alt="instagram"/>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        &copy;2020 - 2021 Giftjet - All rights reserved
      </div>
    </footer>
  );
}
