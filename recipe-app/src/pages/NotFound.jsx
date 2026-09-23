/**
 * NotFound.jsx
 * Friendly 404 error page with navigation back to Home.
 */

import { useNavigate } from "react-router-dom";
import { Compass } from "lucide-react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className={`page ${styles.page}`}>
      <Card className={styles.card}>
        <Compass size={48} className={styles.icon} />
        <h1 className={styles.title}>404: Page Not Found</h1>
        <p className={styles.text}>
          We couldn't find the page you were looking for. It may have been moved or doesn't exist.
        </p>
        <Button variant="primary" onClick={() => navigate("/")}>
          Return to Home
        </Button>
      </Card>
    </main>
  );
}
