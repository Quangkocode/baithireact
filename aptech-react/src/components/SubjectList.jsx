import React from 'react';

import { useEffect, useState } from 'react'
import SubjectCard from './SubjectCard'

export default function SubjectList(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch('/public/data/subjects.json').then(r=>r.json()).then(setItems)
  },[])
  return (
    <div>
      <div className="subjects-row">
        {items.map(it=> <SubjectCard key={it.id} item={it} />)}
      </div>
      <p style={{maxWidth:900, margin:'18px auto 0', color:'#666', lineHeight:1.6, textAlign:'center'}}>{items.length? items[0].description : ''}</p>
    </div>
  )
}
