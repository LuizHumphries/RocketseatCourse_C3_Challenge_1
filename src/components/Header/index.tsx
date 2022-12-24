import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.postHeader}>
      <Link href="/" legacyBehavior>
        <a>
          <img src="/logoimg.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
