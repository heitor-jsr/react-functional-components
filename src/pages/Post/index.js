import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Home() {
  const params = useParams();

  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), []); 
  return <h1>Post</h1>
}