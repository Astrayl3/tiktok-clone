import { Home, Compass, User } from "lucide-react";

export default function Navigation() {
  return (
    <>
      {/* Mobile */}
      <nav className="fixed bottom-0 w-full bg-black border-t border-gray-800 text-white flex justify-around p-3 md:hidden z-50">
        <button className="flex flex-col items-center"><Home /> <span className="text-xs">Trang chủ</span></button>
        <button className="flex flex-col items-center text-gray-400"><Compass /> <span className="text-xs">Khám phá</span></button>
        <button className="flex flex-col items-center text-gray-400"><User /> <span className="text-xs">Hồ sơ</span></button>
      </nav>

      {/* PC Sidebar */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full w-64 bg-black border-r border-gray-800 text-white p-6 z-50">
        <h1 className="text-2xl font-bold text-red-500 mb-10">TiktokClone</h1>
        <div className="flex flex-col gap-6">
          <button className="flex items-center gap-4 text-xl font-bold hover:bg-gray-900 p-2 rounded"><Home /> Trang chủ</button>
          <button className="flex items-center gap-4 text-xl text-gray-400 hover:bg-gray-900 p-2 rounded"><Compass /> Khám phá</button>
          <button className="flex items-center gap-4 text-xl text-gray-400 hover:bg-gray-900 p-2 rounded"><User /> Hồ sơ</button>
        </div>
      </nav>
    </>
  );
}