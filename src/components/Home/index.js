import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Container } from "./styles";

import { Form, Input } from "@rocketseat/unform";

import api from "../../services/api";

const schema = Yup.object().shape({
  account: Yup.string().required("Account Name is required."),
});

function Home() {
  const [apiLoading, setApiLoading] = useState(false);

  async function handleSubmit({ account }) {
    setApiLoading(true);

    try {
      const { data } = await api.post("accounts", {
        name: account,
      });

      setApiLoading(false);

      const { _id, name } = data;

      toast.success(`Account "${name}" successfully created! ID: ${_id}`);
    } catch (err) {
      setApiLoading(false);
      toast.error("Something went wrong.");
    }
  }

  return (
    <Container apiLoading={apiLoading}>
      <header>
        <h1>HOME</h1>
        <Link to="/accounts">
          <h1>ACCOUNTS</h1>
        </Link>
      </header>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="account" placeholder="Account Name" />
        <button disabled={apiLoading} type="submit">
          {apiLoading ? "CREATING..." : "CREATE"}
        </button>
      </Form>
    </Container>
  );
}

export default Home;
