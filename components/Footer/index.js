import styles from './Footer.module.scss';
import stylesUtils from '../../styles/utils.module.scss';

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerMenu}>
        <div className={styles.menuItemLeft}>
          <ul className={stylesUtils.list}>
            <li>Brands</li>
            <li>Influencers</li>
            <li>Contact</li>
          </ul>
          <ul className={stylesUtils.list}>
            <li>Terms of Use</li>
            <li>Privacy Notice</li>
          </ul>
        </div>
        <div className={styles.menuItemRight}>
          <img className={styles.logo} src='/images/matchjet_logo_colored.png' alt='logo' />
          <div className={styles.iconsSection}>
            <img src='/images/fb-colored.png' alt="facebook"/>
            <img src="/images/twitter-colored.png" alt="twitter"/>
            <img src="/images/youtube-colored.png" alt="youtube"/>
            <img src="/images/ig-colored.png" alt="instagram"/>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        &copy;2020 - 2021 Giftjet - All rights reserved
      </div>
    </footer>
  );
}
