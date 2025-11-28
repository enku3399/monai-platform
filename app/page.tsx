import Link from 'next/link';
import { Camera, Sparkles, Upload, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white overflow-hidden font-sans">
      
      {/* Navbar */}
      <nav className="w-full max-w-6xl px-6 py-6 flex justify-between items-center z-50">
        <div className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          mongolai.mn
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm font-medium hover:text-purple-400 transition">
            Нэвтрэх
          </Link>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition">
            Эхлүүлэх
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 w-full max-w-6xl px-6 flex flex-col items-center text-center pt-20 pb-10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />

        <div className="border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 rounded-full text-sm text-purple-300 mb-8 inline-flex items-center gap-2">
          <Sparkles size={14} />
          <span>Монголын анхны AI зургийн студи</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
          Таны мэргэжлийн зургийг <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            AI-аар бүтээе
          </span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Студид очих шаардлагагүй. 10-20 селфи зураг оруулаад LinkedIn, CV-ний мэргэжлийн зургийг хиймэл оюун ухаанаар бүтээгээрэй.
        </p>

        <button className="group bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
          <Camera size={20} />
          Зураг үүсгэх
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </main>

      {/* Features */}
      <section className="w-full bg-gray-900/30 border-t border-gray-800 py-20 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
            <Upload className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">1. Зураг хуулах</h3>
            <p className="text-gray-400">Өөрийн 10-20 ширхэг селфи зургийг системд оруулна.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
            <Sparkles className="text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">2. AI боловсруулах</h3>
            <p className="text-gray-400">AI таны царайг сурч, мэргэжлийн түвшинд хувиргана.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
            <CheckCircle2 className="text-pink-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">3. Татаж авах</h3>
            <p className="text-gray-400">Өндөр чанартай зургуудыг шууд татаж аваарай.</p>
          </div>
        </div>
      </section>

    </div>
  );
}