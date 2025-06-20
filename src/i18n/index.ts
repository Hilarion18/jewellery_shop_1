
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// src/i18n/index.ts
export const resources = {
  en: {
    translation: {
      // ... existing translations
      footer: {
        tagline: "Preserving the physical music experience",
        contact: "Contact Information",
        about: "About Us",
        collection: "Our Collection",
        blog: "Music Blog",
        rights: "All rights reserved",
      },
      about: {
        subtitle: "Our passion for physical music",
        founderTitle: "Meet Rahidra",
        founderBio1: "Rahidra, the founder of Hysteria Music, has been collecting physical music media since he was 15 years old. What started as a personal passion has grown into a mission to preserve the tangible music experience in an increasingly digital world.",
        founderBio2: "With over 20 years of collecting experience, Rahidra has amassed one of the most comprehensive collections of vinyl records, cassettes, and CDs in Southeast Asia. Each piece in our collection tells a story about music history and culture.",
        quote: "Music isn't just sound - it's a physical experience. The crackle of vinyl, the artwork on cassette tapes, these are parts of the musical journey we're preserving for future generations.",
        mission: "At Hysteria Music, we're dedicated to keeping physical music formats alive and accessible to music lovers and collectors worldwide.",
        collectionTitle: "Our Growing Collection",
        vinylRecords: "Vinyl Records",
        cassettes: "Cassettes",
        cds: "CDs",
        rareItems: "Rare Items",
      }
    }
  },
  id: {
    translation: {
      // ... existing translations
      footer: {
        tagline: "Melestarikan pengalaman musik fisik",
        contact: "Informasi Kontak",
        about: "Tentang Kami",
        collection: "Koleksi Kami",
        blog: "Blog Musik",
        rights: "Seluruh hak cipta dilindungi",
      },
      about: {
        subtitle: "Gairah kami terhadap musik fisik",
        founderTitle: "Kenali Rahidra",
        founderBio1: "Rahidra, pendiri Hysteria Music, telah mengoleksi media musik fisik sejak usia 15 tahun. Apa yang awalnya merupakan kegemaran pribadi telah berkembang menjadi misi untuk melestarikan pengalaman musik fisik di dunia yang semakin digital.",
        founderBio2: "Dengan pengalaman koleksi lebih dari 20 tahun, Rahidra telah mengumpulkan salah satu koleksi rekaman vinil, kaset, dan CD terlengkap di Asia Tenggara. Setiap barang dalam koleksi kami menceritakan kisah tentang sejarah dan budaya musik.",
        quote: "Musik bukan hanya suara - ini adalah pengalaman fisik. Bunyi desisan vinil, karya seni pada kaset, ini adalah bagian dari perjalanan musik yang kami lestarikan untuk generasi mendatang.",
        mission: "Di Hysteria Music, kami berdedikasi untuk menjaga format musik fisik tetap hidup dan dapat diakses oleh pecinta musik dan kolektor di seluruh dunia.",
        collectionTitle: "Koleksi Kami yang Terus Bertambah",
        vinylRecords: "Rekaman Vinil",
        cassettes: "Kaset",
        cds: "CD",
        rareItems: "Barang Langka",
      }
    }
  }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
  
  export default i18n;