import React from 'react'


export default function SponsorSection () {
    return (
        <div className='mb-20'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>Sponsors</h2>
          <p className='w-3/5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel tempus eros, vitae molestie quam. Integer id tincidunt felis.</p>
        </div>
        <div className='flex gap-6'>
          <img src='/img/logos/postman_logo-grey.svg' className='mx-auto' />
          <img src='/img/logos/postman_logo-grey.svg' className='mx-auto' />
          <img src='/img/logos/postman_logo-grey.svg' className='mx-auto' />
          <img src='/img/logos/postman_logo-orange.svg' className='mx-auto' />
          <img src='/img/logos/postman_logo-grey.svg' className='mx-auto' />
        </div>
      </div>
    )
}