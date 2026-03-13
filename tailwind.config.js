/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '32.5': '8.125rem', // 130px
                '37.5': '9.375rem', // 150px
                '47.5': '11.875rem', // 190px
            }
        },
    },
    plugins: [],
}
