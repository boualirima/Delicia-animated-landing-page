import React, { useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background1 from "../assets/background1.svg";
import Logo from "./logo"
import '.././App.css'
import thom from "../assets/thom.svg"
import mous from "../assets/mous.svg"
import plat1 from "../assets/plat1.svg"
import plat2 from "../assets/plat2.svg"
import plat3 from "../assets/plat3.svg"
import plat4 from "../assets/plat4.svg"
import plat5 from "../assets/plat5.svg"
import plat6 from "../assets/plat6.svg"
import egg from "../assets/egg.svg"
import petitPain from "../assets/petitpain.svg"
import dessert1 from "../assets/dessert1.svg"
import dessert2 from "../assets/dessert2.svg"
import dessert3 from "../assets/dessert3.svg"
import dessertOther from "../assets/dessertOther.svg"
import debcha from "../assets/debcha.svg"
import epices from "../assets/epices.svg"
import profil from "../assets/profil.svg"
import etoiles from "../assets/etoiles.svg"
import chocolat from "../assets/chocolat.svg"
import coffee from "../assets/coffee.svg"
import barma from "../assets/barma.svg"
import tomatich from "../assets/tomatich.svg"
import insta from "../assets/insta.svg"
import github from "../assets/github.svg"
import gmail from "../assets/gmail.svg"
import heart from "../assets/heart.svg"
import cacao from "../assets/cacao.svg"
import jus from "../assets/jus.svg"

import ma9la from "../assets/ma9la.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const Homepage = () => {
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".thom",
        {opacity:0 },{
        scrollTrigger:".thom",
        x:150,
        duration:3,
        rotateZ:1,
        opacity: 1,

    })
    gsap.fromTo(".mous",
        {opacity:0 },{
        scrollTrigger:".mous",
        x:-150,
        duration:3,
        rotateZ:1,
        opacity: 1,

    })
    gsap.fromTo(".egg",
        {opacity:0 },{
        scrollTrigger:".egg",
        x:150,
        duration:3,
        rotateZ:1,
        opacity: 1,

    })
    gsap.fromTo(".petitPain",
        {opacity:0 },{
        scrollTrigger:".petitPain",
        x:-150,
        duration:3,
        rotateZ:1,
        opacity: 1,

    })
    gsap.fromTo(".debcha",
        {opacity:0 },{
        scrollTrigger:".debcha",
        x:150,
        duration:3,
        rotateZ:1,
        opacity: 1,

    })
    gsap.fromTo(".epices",
        {opacity:0 },{
        scrollTrigger:".epices",
        x:-150,
        duration:3,
        rotateZ:1,
        opacity: 1,

    })
    gsap.fromTo(".chocolat",
        {opacity:0 },{
        scrollTrigger:".chocolat",
        x:150,
        duration:3,
        rotateZ:1,
        opacity: 1,

    })
    gsap.fromTo(".coffee",
        {opacity:0 },{
        scrollTrigger:".coffee",
        x:-150,
        duration:3,
        rotateZ:1,
        opacity: 1,

    })
    gsap.fromTo(".barma",
        {opacity:0 },{
        scrollTrigger:".barma",
        x:150,
        duration:3,
        rotateZ:1,
        opacity: 1,

    })
    gsap.fromTo(".ma9la",
        {opacity:0 },{
        scrollTrigger:".ma9la",
        x:-150,
        duration:3,
        rotateZ:1,
        opacity: 1,

    })
    const svg = document.querySelector('svg.line')
    const path = svg ? svg.querySelector('path') : null;
    const scroll = () =>{
        const distance = (window.scrollY - 100)
        const totalDistance = svg.clientHeight - window.innerHeight
        const percentage = distance /totalDistance
        const pathLength = path.getTotalLength()
        path.style.strokeDasharray = `${pathLength }`
        path.style.strokeDashoffset =`${pathLength * (1-percentage)}`
    }
    
    scroll()
    window.addEventListener('scroll' , scroll)
    
   
    }, []);

    //top list ****************************************

    const topLists = [
        { title: 'Quiche Lorraine', id: 1 , pic:plat1 , description:' Une soupe gratinée à base d oignons caramélisés de bouillon de bœuf et de croûtons de pain recouverts de fromage fondu'},
        { title: 'Croque-Monsieur', id: 2 , pic:plat2 ,description:'Une soupe gratinée à base d oignons caramélisés de bouillon de bœuf et de croûtons de pain recouverts de fromage fondu. '},
        { title: 'Salade Niçoise ', id: 3 , pic:plat3 ,description:'Une soupe gratinée à base d oignons caramélisés de bouillon de bœuf et de croûtons de pain recouverts de fromage fondu '},
         { title: 'Clafoutis aux Cerises ', id: 4 , pic:plat4 , description:'Une soupe gratinée à base d oignons caramélisés de bouillon de bœuf et de croûtons de pain recouverts de fromage fondu ' },
         { title: 'Foie Gras Poêlé', id: 5 , pic:plat6 , description:'Une soupe gratinée à base d oignons caramélisés de bouillon de bœuf et de croûtons de pain recouverts de fromage fondu  '},
         { title: 'Gratin Dauphinois', id: 6 , pic:plat5 ,description:'Une soupe gratinée à base d oignons caramélisés de bouillon de bœuf et de croûtons de pain recouverts de fromage fondu '},
      ];
    return ( 
        <>
        <div className="relative ">
        <img  src={background1} alt="" className=" w-screen h-screen object-cover z-0 "/>
            <div className="absolute top-52  w-full  flex items-center justify-center flex-col">
                <h1 className=" text-8xl font-italiana ">Delicia</h1>
                <p className="font-jf text-5xl mt-10 ">where every meal is a </p>
                <h1 className="font-jf text-8xl  text-mygreenc  mt-11">Masterpiece</h1>
                <button className="bg-mygreenf py-4 px-10 rounded-full mt-14">
                    <p className="text-white font-jf text-xl">Let 's  cook !</p>
                </button>
           </div>
           <div className=" flex  justify-center  space-x-[60%] top-0   ">
                <img src={thom} alt="thom" className="thom" />
                <img src={mous} alt="mous" className="mous justify-self-end " />
            </div>
            <p className="text-8xl font-jf flex justify-center ">Top List</p>              
            
            <div className="  mt-[6%]  ">
                <div className="slider-container ">
                    <Slider {...settings}>
                        {topLists.map((topLists)=>(
                            <div className=""  >
                                <div className="flex items-center justify-center ">
                                    <img src={topLists.pic} alt="" className="size-80 "/>
                                </div>
                                <div className="flex items-center justify-center flex-col gap-5 mt-4">
                                    <p className="text-4xl font-bold  "  style={{ fontFamily: 'Product Sans' }}>{topLists.title}</p>
                                    <p className="text-2xl  mr-[20%] ml-[25%] text-gray-500"  style={{ fontFamily: 'Product Sans' }}>{topLists.description}</p>
                                    <button className="mt-4 mb-[10%]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-9">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                </button>
                                </div>
                        
                            </div>

                            ))}  
                    </Slider>
                </div>      
            </div>
            <div className=" flex  justify-center  space-x-[60%] mt-[8%]   ">
                <img src={egg} alt="zgg" className="egg" />
                <img src={petitPain} alt="petitPain" className="petitPain justify-self-end " />
            </div>
            <p className="text-8xl font-jf flex justify-center ">What’s on your plate ?</p> 
            <div className="relative ">
                    <div className="flex flex-row gap-6 items-center mr-[55%] mt-[7%]  ">
                        <img src={dessert1} alt="" className="z-10 "/>
                        <p className="text-5xl font-bold z-10 mt-[7%] " style={{ fontFamily: 'Product Sans' }}>Vanilla Cake</p>
                    </div>

                    <div className="flex flex-row gap-6 items-center ml-[55%] mt-[5%] ">
                           <p className="text-5xl font-bold " style={{ fontFamily: 'Product Sans' }}>Cookies</p>
                        <img src={dessert2} alt="" className="z-10"/> 
                    </div>

                    <div className="flex flex-row gap-6 items-center mr-[55%] mt-[7%] ">
                        <img src={dessert3} alt="" className="z-10" /> 
                        <p className="text-5xl font-bold " style={{ fontFamily: 'Product Sans' }}>Chocolat Dessert</p>           
                    </div>
                    <div className="absolute top-0 z-0 ">
                        <svg 
                        className="line"
                        width="1800"
                        height="1555"
                        viewBox="0 0 1926 1555" 
                        fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M268.581 0.982964C268.581 0.982964 -442.805 132.917 458.316 135.007C1359.44 137.096 2902.5 498.001 1062 819.5C-778.5 1141 1243.5 1722 1453.5 1506.5C1663.5 1291 1404 1309.5 1404 1309.5" 
                        stroke="black" 
                        stroke-width="4" 
                        stroke-linecap="round"
                        stroke-dasharray="50 50"/>
                        </svg>
                    </div>
                    <div className=" flex  justify-center  space-x-[60%] mt-[8%]   ">
                        <img src={debcha} alt="zgg" className="debcha" />
                        <img src={epices} alt="petitPain" className="epices justify-self-end " />
                    </div>
                    <p className="text-8xl font-jf flex justify-center mt-[6%] ">What the other say ?</p>
                    <div className="flex flex-row gap-72 mt-[6%] ml-[10%]">
                        <img src={dessertOther} alt="" />
                        <div className="flex flex-col gap-10">
                            <p className="text-5xl " style={{ fontFamily: 'Product Sans' }}>Amaziiingg JADOOOGH !</p>
                            <p className="text-2xl  text-balance leading-loose " style={{ fontFamily: 'Product Sans' }}>"I tried the chocolate lava cake recipe from this site, and it was absolutely divine! The instructions were clear and easy to follow, and the cake turned out perfectly gooey and rich. My family couldn't stop raving about it. Thank you for making me look like a dessert genius!"</p>
                            <div className="flex flex-row gap-10 items-center ">
                                <img className="size-35" src={profil} alt="" />
                                <img src={etoiles} alt="" />
                            
                            </div>
                        </div>
                       
                    </div>
                    <div className=" flex  justify-center  space-x-[60%] mt-[8%]   ">
                        <img src={chocolat} alt="" className="chocolat" />
                        <img src={coffee} alt="petitPain" className="coffee justify-self-end " />
                    </div>
                    <p className="text-6xl font-jf flex justify-center mt-[6%] ">Easy recipes will send to your inbox </p>
                    <p className="text-2xl font-jf flex justify-center mt-[1%] ">Get weekly updates on the newest chinese receipes in your mailbox !</p>
                    <div className="flex flex-row items-center justify-center mt-[2%]  ">
                        <img src={tomatich} alt="" className="size-40" />
                        <div className=" bg-white p-4 w-[50%] border border-spacing-2 border-gray-400 rounded-full flex flex-row" >
                            <input
                            type="text"
                            placeholder="Enter your email" 
                            className="w-full p-2"
                            />
                            <button className="border rounded-full py-2 bg-[#FE3501] text-white w-[30%] font-jf text-xl">
                                Subscribe
                            </button>
                        </div>
                        
                    </div>
                    <div className=" flex  justify-center  space-x-[60%]    ">
                        <img src={barma} alt="zgg" className="barma" />
                        <img src={ma9la} alt="ma9la" className="petitPain justify-self-end size-[30%]" />
                    </div>
                    
                    <div className="bg-white flew flex-row gap-16 mt-[3%]">
                        <img src="" alt="" />
                       <div className=" p-20 ml-[4%] flex flex-col gap-2 items-center justify-center">
                            <Logo ></Logo>
                            <p className="font-jf text-sm text-gray-500 ">est votre destination en ligne pour découvrir et partager des recettes savoureuses et créatives.</p>
                            <div className="flex flex-row gap-6 items-center mt-[5%] ">
                                    <p className="font-jf text-xl ">Made with</p>
                                    <img src={heart} alt="" className="size-8" />
                                    <p className="font-jf text-xl ">by la rim</p>

                            </div>
                            <div className="flex flex-row gap-4 items-center mb-0 mt-[4%] ">
                                <img src={insta} alt="" className="size-8"/>
                                <img src={github} alt="" className="size-12"/>
                                <img src={gmail} alt="" className="size-9" />
                            </div>
                       </div>


                    </div>
                    




            </div>
            


            
        </div>
        </>
     );
}
 
export default Homepage;