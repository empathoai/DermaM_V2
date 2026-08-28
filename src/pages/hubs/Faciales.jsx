import React from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import CategoryPage from '../../components/templates/CategoryPage/CategoryPage';
import CategorySEO from '../../components/shared/CategorySEO/CategorySEO';
import { categoryPages } from '../../data/categoryPages';

export default function FacialesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] text-[#363633] font-sans selection:bg-[#CCC9C1] selection:text-[#141313]">
      <CategorySEO data={categoryPages.faciales} />
      <Navbar />

      <main className="flex-grow flex flex-col">
        <CategoryPage data={categoryPages.faciales} />
      </main>

      <Footer />
    </div>
  );
}
