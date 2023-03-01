import React from "react";
import "../index.css";
import { Hero, Layout } from "../components/components_index";

const taglineText = {
  firstLine: "Not found",
  secondLine: "Start again?",
};

const index = () => {
  return (
    <Layout>
      <Hero taglineText={taglineText} />
    </Layout>
  );
};

export default index;
export const Head = () => <title>Konspekt</title>;
