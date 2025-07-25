// export function slugify(text: string): string {
//   return text
//     .toLowerCase()
//     .replace(/ş/g, 's')
//     .replace(/ı/g, 'i')
//     .replace(/ç/g, 'c')
//     .replace(/ü/g, 'u')
//     .replace(/ö/g, 'o')
//     .replace(/ğ/g, 'g')
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/^-+|-+$/g, '');
// }





// libs/slugify.ts
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // boşluk veya özel karakterleri tireye çevir
    .replace(/^-+|-+$/g, ''); // baş/son tireyi sil
}
