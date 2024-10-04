"use server";
import axios from "axios";
import { cookies as cookie } from "next/headers";


export const getUser = () => {
  const Cookies = cookie();

  return Cookies.get("user_id")?.value || null;
};
