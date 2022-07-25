import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Form } from "./components/Form";

export const App = () => {
  return (
   <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </RecoilRoot>
   </BrowserRouter>
  );
}


