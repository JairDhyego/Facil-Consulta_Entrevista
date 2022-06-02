import { Routes, Route } from "react-router-dom";
import { NoutFound } from "../pages/NotFound/";
import { PageB } from "../pages/PageB/";
import { PageC } from "../pages/PageC";
import { Inicio } from "./../pages/Inicio/";
import { Pageconclusao } from "../pages/Pageconclusao";

export const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/segundaetapa" element={<PageB />} />
      <Route path="/terceiraetapa" element={<PageC />} />
      <Route path="/cadastroconluido" element={<Pageconclusao />} />
      <Route path="*" element={<NoutFound />} />
    </Routes>
  );
};
