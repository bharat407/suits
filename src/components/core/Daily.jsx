// src/components/WeddingRequisites.js
import React from "react";
import { Data } from "../../Data/Daily";
import Section from "../section/section";

const WeddingRequisites = () => {
  return <Section heading="Daily Needs " data={Data} />;
};

export default WeddingRequisites;
