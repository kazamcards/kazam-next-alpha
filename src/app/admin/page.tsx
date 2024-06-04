import Footer from "@/components/footer";
import Header from "@/components/header";
import React from 'react';
import AdminPage from 'src/components/AdminPage.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <Header/>
      <AdminPage />
      <Footer/>
    </div>
  );
};

export default App;