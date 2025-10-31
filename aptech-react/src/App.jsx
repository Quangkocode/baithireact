import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ObjectList from './components/ObjectList'
import SubjectList from './components/SubjectList'

export default function App(){
  return (
    <div>
      <Header />
      <main>
        <section className="banner-area">
          <img src="/public/image/banner.png" alt="banner" className="banner-img"/>
        </section>
        <section className="container">
          <h2 className="section-title">SHOULD WHO LEARN PROGRAMING IN FPT APTECH?</h2>
          <ObjectList />
        </section>

        <section className="container">
          <h2 className="section-title">WHAT IS THE COURSE PROGRAM?</h2>
          <SubjectList />
        </section>
      </main>
      <Footer />
    </div>
  )
}
