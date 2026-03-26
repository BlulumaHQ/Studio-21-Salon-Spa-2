import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PreviewSystem from "./components/preview/PreviewSystem";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import GroomingPackagesPage from "./pages/GroomingPackagesPage";
import SelfServiceWashPage from "./pages/SelfServiceWashPage";
import ProductsPage from "./pages/ProductsPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HelpWantedPage from "./pages/HelpWantedPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PreviewSystem>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/grooming-packages" element={<GroomingPackagesPage />} />
              <Route path="/self-service-wash" element={<SelfServiceWashPage />} />
              <Route path="/products-accessories" element={<ProductsPage />} />
              <Route path="/dog-gallery" element={<GalleryPage />} />
              <Route path="/our-salon-about-us" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/help-wanted" element={<HelpWantedPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PreviewSystem>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
