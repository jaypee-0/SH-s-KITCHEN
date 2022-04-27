import React, { useState } from 'react'
import FAQ from '../Components/FAQ/FAQ';
import Header from '../Components/FAQ/Header';

export default function FAQs() {
const [active, setActive] = useState("");

  return (
    <div>
        <Header />
        <FAQ title="Question1" active={active} setActive={setActive} />
        <FAQ title="Question2" active={active} setActive={setActive} />
        <FAQ title="Question3" active={active} setActive={setActive} />
        <FAQ title="Question4" active={active} setActive={setActive} />
    </div>
  )
}
