import React from "react";
import { Outlet } from "react-router-dom";
export default function Root({ children }) {
  return <>
    <header></header>
    <Outlet />
    <footer></footer>
  </>
}