import React from "react";
import { Link } from "react-router-dom";
import styles from "./Body.module.css";
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../../img/icon-power-off.svg";

const Body = ({ hashtags }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    auth.logout();
    navigate("/", { replace: true });
  };

  return (
    <>
      <nav className={styles.bgNav}>
        <div className={styles.bgTitle}>
          <Link to='/'>
            <h2>
              hashtag<strong>finder</strong>
            </h2>
          </Link>
        </div>
      </nav>
      <main>
        <strong className={styles.title}>Buscas realizadas</strong>
        <div className={styles["table-container"]}>
          <div className={styles["table-header"]}>
            <span>Hashtag</span>
            <span>Data</span>
            <span>Hora</span>
          </div>
          <div className={styles["table-body"]}>
            {React.Children.toArray(
              hashtags?.map(({ data, horario, hashtag }) => {
                return (
                  <div className={styles["table-body-line"]}>
                    <span className={styles.hashName}>#{hashtag}</span>
                    <span>{data.substring(0, 5)}</span>
                    <span>{horario}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Body;
