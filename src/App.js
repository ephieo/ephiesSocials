import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex h-screen flex-col items-center justify-center  text-sky-950 bg-lime-200 cursor-pointer ">
        <h1 className="text-bold text-5xl">Ephie Oyedoh</h1>
        <div className="flex flex-col">
          {socialsResources.map((resource) => (
            <a
              className="p-4 m-8  font-semibold hover:text-red-400 hover:text-2xl hover:border-dotted hover:border-4 border-red-400 rounded-xl "
              href={resource.href}
              key={resource.name}
              target="_blank"
            >
              {resource.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

const socialsResources = [
  {
    name: "Instagram",
    logo: "",
    href: "https://www.instagram.com/phratzphotoz",
  },
  { name: "Youtube", logo: "", href: "https://www.youtube.com/@EphiesWorld" },
  { name: "Tiktok", logo: "", href: "https://www.tiktok.com/@eshego" },
  {
    name: "Photography Portfolio",
    logo: "",
    href: "https://www.koinonia835.com/",
  },
];
