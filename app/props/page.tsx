'use client';

import Footer from "@/components/Footer";
import ImageProfile from "@/components/ImageProfile";
import MenuBar from "@/components/MenuBar";

export default function PropPage() {
  return (
    <div>
      <MenuBar page={"เรียนรู้ props"} />
      <h1 className="text-3xl text-center mb-3">Components รูป</h1>
      <ImageProfile src="https://publish.kawtung.com/wp-content/uploads/2022/06/161_5.jpg" />
      <Footer />
    </div>
  );
}