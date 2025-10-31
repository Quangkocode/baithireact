import React from 'react';

export default function SubjectCard({item}){
  return (
    <div className="subject-item">
      <img src={'/public/'+item.image} alt={item.subject} />
      <h4 style={{marginTop:8}}>{item.subject}</h4>
    </div>
  )
}
