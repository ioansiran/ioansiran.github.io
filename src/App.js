import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./component/Navigation";
import ProfileComponent from "./component/ProfileComponent";
import ProjectListComponent from "./component/ProjectListComponent";
import ServicesListComponent from "./component/ServicesListComponent";
import ContactComponent from "./component/ContactComponent";

function App() {
  return (
    <>
      <Navigation/>
      <ProfileComponent/>
      <ProjectListComponent/>
      <ServicesListComponent/>
      <ContactComponent/>
    </>
  );
}

export default App;
