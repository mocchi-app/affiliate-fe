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
          <img className={styles.logo} src='/images/guideshop-footer.png' alt='logo' />
        </div>
      </div>
      <div className={styles.bottomSection}>
        &copy;2020 - 2021 guideshop - All rights reserved
      </div>
    </footer>
  );
}
