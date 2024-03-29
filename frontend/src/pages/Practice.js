import React from 'react';
import Card1 from "../assets/landscape-1.png";
import Card2 from "../assets/landscape-2.png";
import { useGlobal } from '../components/GlobalContext';
import "../style/Practice.css";
import { Link } from 'react-router-dom';
import study from "../assets/study.jpg";
import ReactLoading from "react-loading";




function Practice() {
   
   const { globalVariable } = useGlobal();
   let io=globalVariable;
   let ios=io.split("$");

   let logInfo;
   let ioe=globalVariable;
   logInfo=ioe.split("$");

  if(logInfo[0]==="404"){
    window.location.href = '/';
  }

     
    return (
    <>
      <p className='namer'>{ios[1]}</p>
      <div className='TestHome'>

         <div className='HeaderTest'>
            <div className='Header hb'>
               <div className='ro'>
                  <p>E Learner</p>
               </div>
               <div className='lo'>
                  <Link to={'/Home'}>Home</Link>
                  <Link to={'/Learn'}>Learn</Link>
                  <Link to={'/Practice'}>Practice</Link>
                  <Link to={'/Info'}>Info</Link>
               </div>
            </div>
         </div>
        <div className="containerTest">
         
         <div className="card__containerTest">
            <Link to={'/practice/webpractice'}>
            <button className="card__article">
               <img src={Card1} alt="card1" className="card__img"/>

               <div className="card__data">
                  <span className="card__description">Let Get Pratice On</span>
                  <h2 className="card__title">Web Module</h2>
               </div>
            </button>
            </Link>

            <Link to={'/practice/formpractice'}>
            <button className="card__article" >
               <img src={Card2} alt="card2" className="card__img"/>

               <div className="card__data">
                  <span className="card__description">Let Get Pratice On</span>
                  <h2 className="card__title">Google Forms</h2>
               </div>
            </button>
            </Link>

            
         </div>
      </div>
      </div>
      <div className='mixc'>
         <img src={study}></img>
         <Link className='btx4' to={'/practice/webpractice'}>
            Practice On Web Module
         </Link>
         <Link className='btx5' to={'/practice/formpractice'}>
            Practice On Google Form
         </Link>
      </div>
      <div className='loading'>
         <ReactLoading type="bubbles" color="#0000FF"
                height={100} width={100} />
                <p>Loading Please Wait...</p>
      </div>
        
    </>
  )
}

export default Practice