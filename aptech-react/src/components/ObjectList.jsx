import React from 'react';

import { useEffect, useState } from 'react'
import ObjectCard from './ObjectCard'

export default function ObjectList(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch('/public/data/objects.json').then(r=>r.json()).then(setItems)
  },[])
  return (
    <div className="objects-grid" style={{marginTop:18}}>
      {items.map(it=> <ObjectCard key={it.id} item={it} />)}
    </div>
  )
}
