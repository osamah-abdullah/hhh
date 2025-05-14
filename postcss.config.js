import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwindcss(),   // استدعاء الـ plugin كدالّة
    autoprefixer(),  // نفس الأمر
  ],
}
