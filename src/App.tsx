import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <main>
        <Button className="bg-green-500">Button Aja</Button>
        <Button variant="destructive" size={"lg"}>
          Button destructive
        </Button>
      </main>
    </>
  );
}

export default App;
