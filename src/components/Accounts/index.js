import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";

import loading from "../../assets/loading.gif";

function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [apiLoading, setApiLoading] = useState(false);

  useEffect(() => {
    async function loadAccounts() {
      setApiLoading(true);

      try {
        const { data } = await api.get("accounts");
        setApiLoading(false);

        setAccounts(data);
      } catch (err) {
        setApiLoading(false);
      }
    }

    loadAccounts();
  }, []);

  return (
    <Container>
      <header>
        <Link to="/">
          <h1>HOME</h1>
        </Link>
        <h1>ACCOUNTS</h1>
      </header>

      <main>
        {apiLoading ? (
          <div className="loading">
            <img src={loading} alt="loading" />
            LOADING...
          </div>
        ) : (
          accounts.map((account) => (
            <div className="account" key={account._id}>
              <dl>
                <dt>ID</dt>
                <dd>{account._id}</dd>
                <dt>NAME</dt>
                <dd>{account.name}</dd>
              </dl>
              <Link to={`accounts/${account.name}`}>SHOW</Link>
            </div>
          ))
        )}
      </main>
    </Container>
  );
}

export default Accounts;
