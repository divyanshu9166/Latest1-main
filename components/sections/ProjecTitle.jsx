"use client";

import React from 'react';

const ProjecTitle = ({ title }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">{title}</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>
    </section>
  );
};

export default ProjecTitle;
