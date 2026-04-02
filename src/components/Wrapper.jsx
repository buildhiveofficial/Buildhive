"use client";

import { useState } from "react";
import LoadingScreen from "./Loading";

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && children}
    </>
  );
};

export default LoadingWrapper;