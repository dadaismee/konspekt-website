import React from "react";
import { Hero, Layout } from "../components/index";
import "../index.css";

const index = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default index;
export const Head = () => <title>Kospekt</title>;
