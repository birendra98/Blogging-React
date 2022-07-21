import React from 'react'
import Card from "../UI/Card"
import mumbai from '../images/mumbai.jpg';
import goa from '../images/goa.jpg';
import himachal from '../images/himachal.jpg';
import pune from '../images/pune.jpg';
import uttarakhand from '../images/uttarakhand.jpg';


const ShowBlog = () => {
  return (
    <div className='card' >
    <Card url={mumbai}  title='Mumbai' description='Mumbai place view' />
   
   <Card url={uttarakhand} title='Uttarakhand' description='Uttarakhand place view' />
   <Card url={pune} title='Pune' description='Pune place view' />
   <Card url={goa} title='Goa' description='Goa place view' />
   <Card url={himachal} title='Himachal' description='Himachal place view' />
   
    </div>
  )
}

export default ShowBlog