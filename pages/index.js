import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/affiliate.module.scss';

export default function AffiliatePage() {
  return (
    <>
      <Head>
        <title>Affiliate</title>
      </Head>
      {/* Main Promo */}
      <section className={styles.mainPromo}>
        <div className={styles.text}>
          <h1 className={styles.sectionTitle}>
          Recommend products <br /> you love, earn money.
          </h1>
          <p className={styles.sectionActionText}>
          Review brands you love, earn money.
          </p>
          <Link href='/onboarding'>
            <a className={styles.getStarted}>Get Started</a>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorksSection}>
        <h1 className={styles.sectionTitle}>How it works</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src='/images/inventory.png' alt='' />
            </div>
            <p className={styles.desc}>Review products from brands.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src='/images/shoppable.png' alt='' />
            </div>
            <p className={styles.desc}>Share the products you love.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src='/images/order.png' alt='' />
            </div>
            <p className={styles.desc}>Earn 10% from brands on each sale.</p>
          </div>
        </div>
      </section>

      {/* Get started */}
      <section className={styles.getStartedSection}>
        <h1 className={styles.sectionTitle}>Get started</h1>
        <p className={styles.sectionActionText}>
          Share products you love, earn money.
        </p>
        <Link href='/onboarding'>
          <a className={styles.getStarted}>Get Started</a>
        </Link>
      </section>
    </>
  );
}
