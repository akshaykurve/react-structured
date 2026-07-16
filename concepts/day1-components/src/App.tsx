import { Card } from "./components/Cards";

function App() {
  return (
    <>
      <h1 className="bg-white w-full text-center font-bold text-4xl font-serif text-amber-950 uppercase py-2">Components and props</h1>
      <div className="m-4 flex flex-wrap gap-4">

      <Card 
        name="Alex Mercer"
        age={28}
        city="New York"
        role="Developer"
        email="alex.m@example.com"
        isOnline={true}
      />
      </div>
    </>
  );
}

export default App;
