import React from 'react'

export default function Quote() {
  return (
    <div className='h-screen bg-slate-200 flex justify-center flex-col'>
      <div className='flex justify-center'>
        <div className='max-w-lg text-3xl font-bold'>
          "The customer service I recieved was exceptional. The support team went above and beyond to address my concerns."
        </div>
      </div>
        <div className='max-w-md text-center text-xl font-semibold'>
          Julies Winfield
        </div>
        <div className='max-w-md text-center text-sm font-normal'>
          CEO | Acne Corp
        </div>
    </div>
  )
}
