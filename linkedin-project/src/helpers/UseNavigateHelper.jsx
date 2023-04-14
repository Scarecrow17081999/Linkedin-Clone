import React from "react";
import { useNavigate } from "react-router-dom";

export default function UseNavigateHelper(params) {
    let instance = useNavigate();
  return instance(params);
}
