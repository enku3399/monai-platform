export default function Home() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">MonAI Platform</h1>
      <p className="text-gray-600">AI зураг сэргээх & стиль үүсгэх үйлчилгээ</p>

      <div className="mt-10 flex flex-col gap-4 items-center">
        <a
          href="#"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Хуучин зураг сэргээх
        </a>

        <a
          href="#"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          AI Стиль эффектийн студи
        </a>
      </div>
    </main>
  );
}
