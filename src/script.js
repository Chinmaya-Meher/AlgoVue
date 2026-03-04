import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Bubblesort from "./components/Bubblesort";
import Selectionsort from "./components/Selectionsort";
import InsertionSort from "./components/Insertionsort";
import Menu from "./components/Menu";
import Linearsearch from "./components/Linearsearch";
import Binarysearch from "./components/BinarySearch";
import Stack from "./components/Stack";
import Queue from "./components/Queue";
import DEQueue from "./components/DEQueue"
import CircularQueue from "./components/CircularQueue";
import JARVIS from "./jarvis/frontpage";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bubblesort" element={<Bubblesort />} />
        <Route path="/selectionsort" element={<Selectionsort />} />
        <Route path="/insertionsort" element={<InsertionSort />} />
        <Route path="/linearsearch" element={<Linearsearch />} />
        <Route path="/binarysearch" element={<Binarysearch />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/circular_queue" element={<CircularQueue />} />
        <Route path="/double_ended_queue" element={<DEQueue />}/>
        <Route path="/learn" element={<JARVIS />} />
      </Routes>
    </>
  );
}
