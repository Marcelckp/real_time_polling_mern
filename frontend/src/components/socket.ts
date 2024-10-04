import { io } from "socket.io-client";

const URL = process.env.REACT_APP_API_BASE_URL || "https://ed-4758619407515648.educative.run:3000";
export const socket = io(URL);
