import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ContextProvider } from "./context/MemberContext.tsx";

createRoot(document.getElementById("root")!).render(
    <ContextProvider>
        <App />
    </ContextProvider>
);
