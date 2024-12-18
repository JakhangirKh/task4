computed - bu hisoblangan xususiyatlarni yaratishga yordam beradigan xususiyat. U Vue komponentining holati (state) yoki ma'lumotlari (data) asosida qayta hisoblanadi. computed asosan holatga bog'liq ma'lumotlarni keshlash (caching) uchun ishlatiladi. Ya'ni, agar bog'liq bo'lgan ma'lumot o'zgarmasa, computed funksiyasi qaytadan hisoblashni amalga oshirmaydi. Bu samaradorlikni oshiradi.

watch - bu reaktiv kuzatuvchi (observer) bo'lib, u ma'lum bir ma'lumot (data) yoki computed xususiyatining qiymatini kuzatadi va u o'zgarganda avtomatik ravishda biror amalni bajaradi.

key yordamida Vue har bir element yoki komponentni noyob tarzda aniqlaydi, bu esa qayta render qilishda (re-render) noto‘g‘ri ishlov berishni oldini oladi. v-for bilan birga ishlaydi


Vue-da ref atributi komponentlar yoki DOM elementlariga to‘g‘ridan-to‘g‘ri murojaat qilish imkonini beradi. U reference (havola) sifatida ishlaydi.
provide va inject Vue’da ota-komponentdan bolaga yoki nevara komponentlarga ma'lumot uzatish uchun ishlatiladi. Bu modelda ma'lumotni props orqali emas, balki kontekst orqali yetkazish mumkin.


<transition> qoplovchi komponent bo‘lib, bir nechta sinflarni avtomatik qo‘shadi:
v-enter, v-enter-active, v-enter-to (kirish animatsiyasi uchun).
v-leave, v-leave-active, v-leave-to (chiqish animatsiyasi uchun).
<transition> komponenti elementlarning ko‘rinishi yoki yo‘qolishida CSS animatsiyalari yoki JavaScript animatsiyalari ni qo‘llash imkonini beradi.


