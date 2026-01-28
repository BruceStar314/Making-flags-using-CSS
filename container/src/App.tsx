 import { FlagContainer } from "/src/components/FlagContainer";

export default function App() {

  const items = [
    { id: 1, flag: "", name: "Empty"},
    { id: 2, flag: "", name: "Empty"},
    { id: 3, flag: "", name: "Empty"},
    { id: 4, flag: "", name: "Empty"},
    { id: 5, flag: "", name: "Empty"},
    { id: 6, flag: "", name: "Empty"},
    { id: 7, flag: "", name: "Empty"},
    { id: 8, flag: "", name: "Empty"},
    { id: 9, flag: "", name: "Empty"},
    { id: 10, flag: "", name: "Empty"},
    { id: 11, flag: "", name: "Empty"},
    { id: 12, flag: "", name: "Empty"},
  ];

  return (
  <div className="min-h-screen w-full bg-gray-950 p-8">
      <div className="max-w-7xl mx-auto bg-gray-900 rounded-2xl shadow-2xl p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {items.map((item) => (
          <FlagContainer 
          key={item.id}
          flag={item.flag}
          countryName={item.name}
          />
          ))}
        </div>
      </div>
    </div>
  );
}
