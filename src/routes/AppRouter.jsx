import React from "react";
import { HomePage, AboutPage, ContactPage, ProjectPage } from "../pages";
import { Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
};
