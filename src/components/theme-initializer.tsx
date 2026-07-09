"use client";

import { useServerInsertedHTML } from "next/navigation";

export function ThemeInitializer() {
  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            })();
          `,
        }}
      />
    );
  });

  return null;
}
