import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
