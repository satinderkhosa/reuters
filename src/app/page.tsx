'use client'

import styles from "./page.module.css";
import TableComponenent from "@/components/tableComponenent";

import { Provider } from "react-redux";
import { store } from '../redux/store';

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Provider store={store}>
          <TableComponenent />
        </Provider>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
