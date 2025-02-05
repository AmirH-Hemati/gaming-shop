import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // برای گوش دادن به همه آدرس‌های شبکه
    port: 5173, // یا هر پورت دیگری که می‌خواهید
  },
  plugins: [react(), tailwindcss()]
});
