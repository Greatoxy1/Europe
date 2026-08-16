import './App.css';
import News from "./components/News";
import NewsPage from "./components/NewsPage"
export function App() {
  return (
    <div className="App">
      <NewsPage />
      <News />
    </div>
  );
}

export default App;