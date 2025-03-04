import Link from 'next/link';
import styles from './notfound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>404 - Page Not Found</h1>
        <p className={styles.message}>
          Sorry, the page you are looking for doesn&#39;t exist.
        </p>
        <p className={styles.return}>
          You can go back to the{' '}
          <Link href="/" passHref>
            <span className={styles.link}>home page</span>
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default NotFound;