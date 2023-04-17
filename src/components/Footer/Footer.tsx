import React from 'react';
// import { Link } from "react-router-dom";
import styles from './footer.module.css';
import Logo from '../../assets/LogoRu.png';
import Visa from '../../assets/visa.jpg';
import MasterCard from '../../assets/mc.png';
import PayPal from '../../assets/pp.png';
import Maib from '../../assets/maib.png';
import Stripe from '../../assets/stripe.png';
import cn from 'classnames';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={cn(styles.brand, styles.footerBrand)}>
          <img className={styles.logo} src={Logo} alt="" />
        </div>
        <ul className={cn(styles.footerList, styles.payments)}>
          <li className={styles.footerListItem}>
            <img className={styles.footerIcon} src={Visa} alt="Visa" />
          </li>
          <li className={styles.footerListItem}>
            <img
              className={styles.footerIcon}
              src={MasterCard}
              alt="MasterCard"
            />
          </li>
          <li className={styles.footerListItem}>
            <img className={styles.footerIcon} src={PayPal} alt="PayPal" />
          </li>
          <li className={styles.footerListItem}>
            <img className={styles.footerIcon} src={Maib} alt="Maib" />
          </li>
          <li className={styles.footerListItem}>
            <img className={styles.footerIcon} src={Stripe} alt="Stripe" />
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          <p className={cn(styles.lang, styles.langEn)}>
            &copy; 2023 Living Books, all rights reserved
          </p>
        </div>
        <ul className={styles.footerList}>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100091274047469">
              <span className={styles.screenReaderText}></span>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                  fill="#D4D596"
                />
              </svg>
            </a>
          </li>
          <li>
            <p className={cn(styles.lang, styles.langEn)}>
              <a href="https://book.living-books.org/docs/user_agreement_ro.docx">
                User agreement
              </a>
            </p>
          </li>
          <li>
            <a href="mailto:support@living-books.org">
              <p className={cn(styles.lang, styles.langEn)}>Support</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
