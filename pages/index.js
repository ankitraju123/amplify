import Image from "next/image";
import React from "react";

import Link from "next/link";

import front from "../images/Front.jpg";
import khusboo from "../images/khusboo.jpg";
import Author from "../images/milind chapekar.png";


import { useEffect } from "react";



import marksheet from "../images/khusboo_marksheet.jpg";


import limesh from '../images/limeshpic.jpeg'
import limeshmark from '../images/limeshmark.jpeg'

import Text from 'react'


import Head from "next/head";

export default function Home({ formattedDate }) {
  <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Simpified Physics" />
        <meta property="og:description" content="It is the best book available in market today." />
        <meta property="og:image" content="https://www.gradplus.pro/wp-content/uploads/2023/07/Front-Cover-724x1024.png" /> {/* Replace with the actual URL of your image */}
        <meta property="og:image:width" content="1200" /> {/* Replace with the width of your image */}
        <meta property="og:image:height" content="630" />
        <meta/>
      
     



      </Head>
  return (
    <>
     <div className=" bg-white ">
        <div className="bg-black  ">
          <br />
          <br />

          <div className=" text-center ">
            <p className="title text-5xl"> SIMPLIFIED PHYSICS </p>
           
          </div>

          <div className="text-center">
            <p className="text-2xl text-white ">
              Get your BOOK NOW and Score your Dream Marks
            </p>
           

            <div className="flex h-314 w-full  justify-center items-center  ">
              <Image
                className=" p-5 ..."
                src={front}
                alt=""
                width="400"
                height="314"
              />
              <br />
              <br />
            </div>
            <br />
           
            <div className="text-container">
  <p className="text-2xl">
    <span className="text-white">
      After years of research, Grab the{" "}
      <span className="text-yellow font-semibold">Physics Scoring machine</span>{" "} for
    Maharashtra State Board HSC
    </span>
  </p>
  
</div>
          </div>

          <br />
          <br />

          <div className="text-center">
            <button   className="ga-tester  bg-orange-500 hover:bg-orange-700 text-white  py-2 px-10 rounded-full ">
              <a href="https://www.amazon.in/Simplified-Physics-Milind-Chapekar-Maharashtra/dp/B07VNXG53W/ref=sr_1_1?crid=1CG2ZN1A308I8&keywords=physics+course+book+by+milind+chapekar&qid=1687779017&sprefix=%2Caps%2C328&sr=8-1">
              
                <p className="text-white text-2xl font-semibold">Buy Now</p>
                <p className="text-white">Available on Amazon</p>
              </a>
            </button>
          </div>

          <br />
          <br />
        </div>

        <br />

        <div className="text-box mx-auto text-center p-7 ...  ">
          <p className="mb-2 font-bold text-black  text-3xl ">
            This <span className="underline">Simplified Physics</span> will help
            you:{" "}
          </p>
          <br />

          
<div className="text-black list-disc list-inside  mx-auto ">
  <div className="flex gap-2 w-1/3 mx-auto text-left">
    <img
      className="h-7 w-7"
      src="https://media.istockphoto.com/id/538098895/vector/orange-check-mark.jpg?s=612x612&w=0&k=20&c=382AWz8MhxSog6dorH7uKQm_Je0cB8YAc4RhFzwGrqA="
    />
    <p className="finally">
      Finally get the <span className="text-orange-500">Proper Physics Notes</span> which are committed to improve your marks in the final{" "}
      <span className="text-orange-500">Board Exams.</span>
    </p>
  </div>

  <div className="flex gap-2 w-1/3 mx-auto text-left my-2">
    <img
      className="h-7 w-7"
      src="https://media.istockphoto.com/id/538098895/vector/orange-check-mark.jpg?s=612x612&w=0&k=20&c=382AWz8MhxSog6dorH7uKQm_Je0cB8YAc4RhFzwGrqA="
    />
    <p className="finally">
      Overcome the <span className="text-orange-500">Physics-phobia</span> and throw away the negativity.
    </p>
  </div>

  <div className="flex gap-2 w-1/3 mx-auto text-left my-2">
    <img
      className="h-7 w-7"
      src="https://media.istockphoto.com/id/538098895/vector/orange-check-mark.jpg?s=612x612&w=0&k=20&c=382AWz8MhxSog6dorH7uKQm_Je0cB8YAc4RhFzwGrqA="
    />
    <p className="finally">
      Make you <span className="text-orange-500">confident in Physics</span>, whatever be your current preparation status.
    </p>
  </div>
</div>

          <br />
          <p className="text-2xl text-black">
            The theory book which truely{" "}
            <span className="boost">boosts your physics marks.</span>{" "}
          </p>
          <br />
          <div className="text-center">
            <button  className="ga-tester bg-orange-500 hover:bg-orange-700 text-white  py-2 px-10 rounded ">
              <a href="https://www.amazon.in/Simplified-Physics-Milind-Chapekar-Maharashtra/dp/B07VNXG53W/ref=sr_1_1?crid=1CG2ZN1A308I8&keywords=physics+course+book+by+milind+chapekar&qid=1687779017&sprefix=%2Caps%2C328&sr=8-1">
                <p className="text-white text-2xl font-semibold">Get Your Copy</p>
                <p className="text-white">at your doorstep</p>
              </a>
            </button>
          </div>
        </div>

        <div className="topper text-center">
          <br />
          <br />
          <div className="flex justify-center align-middle">
            <img
              className="limpic"
              src="https://www.gradplus.pro/wp-content/uploads/2023/09/limeshpic-2.jpeg"
            />
          </div>
          <br/>
          <br/>
          <p className="text-2xl text-black">
            <span className="font-semibold">Limesh Chakole</span>, scored 97 marks in physics ,
              <p> highly recommends "Simplified Physics By Milind Chapekar" book.</p>
          </p>
          <br/>
          <br/>
        
          <div className="flex justify-center align-middle">
            <img
              className="khushboo-marksheet"
              src="https://www.gradplus.pro/wp-content/uploads/2023/09/limeshmark-1.jpeg"
            />
          </div>
          <br/>
          {/* <div className="w-2/4 mx-auto p-3 font-bold ">
          <div className='container_video mx-auto text-center p-10 border-solid border-2 border-black ... rounded-lg' dangerouslySetInnerHTML={{ __html: `
    // <p className="font-bold text-black">Toshita Gabhane</p>
    // <br/>
    // <script src="https://fast.wistia.com/embed/medias/c021olhfrp.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_c021olhfrp seo=true videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/c021olhfrp/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
    // ` }} />
       
          </div> */}
          <br/>
          <div className="text-container">
          <p className="text-2xl text-black">
           
       <span className="underline">Here is another example</span>  
          </p>
          </div>
          <br/>
          <div className="flex justify-center align-middle">
            <img
              className="toshita"
              src="https://www.gradplus.pro/wp-content/uploads/2023/07/Toshita-300x300-1.jpg"
            />
          </div>
          <br />
          <br />
          <div className="text-container">
          <p className="text-2xl text-black">
            <span className="font-semibold">Toshita Gabhane</span>, Bhandara
            District topper 2021  Highly recommends "Simplified Physics By Milind Chapekar" book.
          </p>
          </div>
          
          
          <br />
          <div className="flex justify-center align-middle">
            {/* <Image
              className="tosh-comm"
              width="400"
              height="314"
              src=""
            /> */}
            <img className="img_com p-4" src="https://www.gradplus.pro/wp-content/uploads/2023/07/Toshita-Post-1024x487.jpg"/>
          </div>
          <br />
          <div className="w-2/4 mx-auto p-3 font-bold">
          <div className='container_video mx-auto text-center p-10 border-solid border-2 border-black ... rounded-lg' dangerouslySetInnerHTML={{ __html: `
    <p className="font-bold text-black">Toshita Gabhane</p>
    <br/>
    <script src="https://fast.wistia.com/embed/medias/hyjrmtlu6o.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_hyjrmtlu6o seo=true videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/hyjrmtlu6o/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
    ` }} />
          </div>

          {/* <script src="https://fast.wistia.com/embed/medias/hyjrmtlu6o.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_hyjrmtlu6o seo=true videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/hyjrmtlu6o/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
          <script src="https://fast.wistia.com/embed/medias/c021olhfrp.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_c021olhfrp seo=true videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/c021olhfrp/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div> */}
          <div className="container  ">
            <img
              className=" container-items "
              src="https://www.gradplus.pro/wp-content/uploads/2023/07/Toshita-Post-2.jpg"
              alt=""
            />
            <img
              className="container-items"
              src="https://www.gradplus.pro/wp-content/uploads/2023/07/Toshita-Post-3.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          --------------------
          <br />
          <br />
          <div className="flex justify-center align-middle">
            <img
              className="khushboo"
              src="https://www.gradplus.pro/wp-content/uploads/2023/07/Khoosboo-600x600-1.jpg"
            />
          </div>
          <br />
          <br />
          <div className="text-container">
          <p className="text-2xl text-black">
            <span className="font-semibold ">Khushboo Sathawane</span>, 2018
            Bhandara District topper has Secured 96 marks in Physics using "Simplified Physics"
          </p>
          </div>
          
          <p className="text-2xl">
            .{" "}
          </p>
          <br />
          <div className="flex justify-center align-middle">
            <img
              className="khushboo-marksheet"
              src="https://www.gradplus.pro/wp-content/uploads/2023/07/Khoosboo-Marksheet.jpg"
            />
          </div>
          <br />
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-700 text-white  py-2 px-10 rounded-full ">
              <a href="https://www.amazon.in/Simplified-Physics-Milind-Chapekar-Maharashtra/dp/B07VNXG53W/ref=sr_1_1?crid=1CG2ZN1A308I8&keywords=physics+course+book+by+milind+chapekar&qid=1687779017&sprefix=%2Caps%2C328&sr=8-1">
                <p className="text-white text-2xl font-semibold">Boost Your Physics Marks</p>
                <p className="text-white">Order Simplified Physics Now</p>
              </a>
            </button>
          </div>
          <br />
          <br />
        </div>

        <br />
        

        <div className="container-4 p-3">
          <div className="max-w-2xl mx-auto ">
            <br/>
            <p className="font-semibold text-2xl underline text-black">THE PROBLEM</p>
            

            <p className="text-left p-4 tracking-widest text-black">
              {" "}
              Unfortunately Physics experience the worst result compared to all
              other subjects in State Board HSC examination. And this has
              constantly annoyed us for years. We were desperately thinking over
              all possible measures, tried many tactical strategies so that the
              students could score maximum marks in Physics Board Exam.
            </p>
            <br />
            <br />
            <p className="font-semibold text-2xl underline text-black">FINDINGS</p>

          
            <p className="text-left p-4 tracking-widest text-black">
              {" "}
              To get deeper into the problem, we conducted the systematic
              research which consisted of actual case studies of the students.
              What they feel? What things had they faced difficult regarding the
              Physics Board Exam? What suggestions they want to give about
              boosting the Physic Marks? And likewise many questions.
            </p>
            <br />
            <br />
            <p className="font-semibold text-2xl underline text-black">THE SOLUTION</p>
            
            <p className="text-left p-4 tracking-widest text-black">
              Many problems came out. We broadly categorized all those problems.
              We brainstormed a lot over them. We took help of experienced
              student psychologists.And after this years of toil, we have come
              up with the Simplified Physics.
            </p>
            <br />
            <p className="text-2xl tracking-wider text-black">
              It is not just another book for Physics. Strictly NO!! It is well
              <span className="boost"> researched book</span> specially designed
              to help you to score maximum marks in your Physics Board Exam.
            </p>
            <br />
          </div>
        </div>

        <div className="flex justify-center align-middle">
          <img
            className="arrow"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1J2me_pzzNI080zJCF2Xncp1byNO1mOGNgA&usqp=CAU"
          />
        </div>

        <div className="  z-50 text-center bg-white ">
          <p className="text-2xl font-semibold underline text-black">Author</p>
          <br />
          <br />

          <div className="w-full flex justify-center items-center">
            <img
              className="author"
              src="https://www.gradplus.pro/wp-content/uploads/2022/10/Milind-600x600-1.png"
            />
          </div>
          <br />
          <p className="text-3xl ml-19 text-black ">Milind Chapekar</p>
          <br />

          <p className="1xl ml-4 text-black">
            Masters in Engineering with 10+ years of Teaching Experience.
          </p>
          <br />
          <br />
          <div className="w-full flex justify-center items-center">
            <img
              className="arrow"
              src="https://www.gradplus.pro/wp-content/uploads/2022/12/arrow-9.png"
            />
          </div>
          <br />
          <br />
          <div className="text-container">
          <p className="text-2xl text-black">
            My Goal with this book is very simple. To deliver the <span className="boost">concise content</span>  needed to get maximum marks in Physics Maharashtra Board Examinations.
            
            
          </p>
          
          </div>
       
          <br />
          <div className="w-full flex justify-center items-center">
            <img
              className="pages"
              src="https://www.gradplus.pro/wp-content/uploads/2023/07/Book-Pages-341x1024.jpg"
            />
          </div>
          <br />
          <div className="text-container">
          <p className="text-2xl text-black">
            I have reviewed the Simplified Physics by my students,top experts and even the educational mentors.
          </p>
          </div>
        
         
          <br />
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-700 text-white  py-2 px-10 rounded-full ">
              <a href="https://www.amazon.in/Simplified-Physics-Milind-Chapekar-Maharashtra/dp/B07VNXG53W/ref=sr_1_1?crid=1CG2ZN1A308I8&keywords=physics+course+book+by+milind+chapekar&qid=1687779017&sprefix=%2Caps%2C328&sr=8-1">
                <p className="text-white text-2xl font-semibold">
                  Be Confident in Board Exam
                </p>
                <p className="text-white">Order Simplified Physics Now</p>
              </a>
            </button>
          </div>
          <br />
          <br />

          <div className="container-5">
            <br />
            <br />
            <div className="max-w-2xl p-4">
              <p className="text-3xl font-bold text-center text-black">
                Why Most of the students fail to score in physics Board Paper ?
              </p>
              <br />
              <p className="text-black">Let's FACE it</p>
              <br />
              <br />
              <p className="tracking-widest text-left text-black">
                {" "}
                In my extensive research of actual case studies of many students, I have found many problems which may lead to poor performance in Physics.
              </p>
              <br />
              

              <p className="tracking-widest text-left text-black">
                {" "}
                But one thing is almost common that the student is unable to grab the huge syllabus. So, they could not revise it properly on the verge of examination. 
              </p>
              <br />
              
              <p className="tracking-widest text-left text-black">
                {" "}
                Most of the students said that they got literally confused in the last Months. They could not even remember what they have studied before.
              </p>
              <br />
              
             
             
              <p className="tracking-widest text-left text-black">
                {" "}
                It is a human behavior to forget the things. The typical
                forgetting curve is as follows:
              </p>
              <br />
              
              <div className="w-full flex justify-center items-center">
                <img
                  className="graph"
                  src="https://www.gradplus.pro/wp-content/uploads/2023/07/image-10.png"
                />
              </div>

              <p className="text-black">[Ref:Hermann Ebbinghaus, a German Psychologist]</p>
              <br />
             
              <p className="tracking-widest text-left text-black">
                {" "}
                This means, we generally forget everything what we learn in the
                span of a week or more.
              </p>
              <br />
              
              <p className="tracking-widest text-left text-black">
                {" "}
                In the very long span of TWO years, we learn many new concepts.
                We apply them. We revise them. We test ourselves taking number
                of tests.
              </p>
              <br />
              

              <p className="tracking-widest text-left text-black">
                {" "}
                But in the final months of examination, at least for Physics,
                you need to revise entire syllabus again and again.
              </p>
              <br />
              
              <p className="tracking-widest text-left text-black">
                {" "}
                And for that you would need the complete syllabus but that must
                be according to the Board’s Modal Answers. But at the same time
                written in simple language.
              </p>
              <br />
             
              <p className="tracking-wider text-2xl text-black">
                {" "}
                Simplified Physics will solve all these difficulties. Each and
                every line is research fully written. It will surely <span className="boost">boost your
                confidence</span>  which will ultimately reflect in your marks.
              </p>
              <br />
              
              <div className="text-center">
                <button className="bg-orange-500 hover:bg-orange-700 text-white  py-2 px-10 rounded-full ">
                  <a href="https://www.amazon.in/Simplified-Physics-Milind-Chapekar-Maharashtra/dp/B07VNXG53W/ref=sr_1_1?crid=1CG2ZN1A308I8&keywords=physics+course+book+by+milind+chapekar&qid=1687779017&sprefix=%2Caps%2C328&sr=8-1">
                    <p className="text-white text-2xl font-semibold">
                      Get Confidence for Physics Marks
                    </p>
                    <p className="text-white">Order Simplified Physics Now</p>
                  </a>
                </button>
              </div>
              <br />
              <br />
            </div>
          </div>

          <div className="container-6 ">
            <br />
            <br />
            <p className="text-3xl font-semibold text-black">What students say</p>
            <br />

            <p className="text-black">Let's hear it</p>
            <br />
            {/* <Video/> */}

            <div className="w-2/4 mx-auto p-3 font-bold">
            <div className='container_video mx-auto text-center p-10 border-solid border-2 border-black ... rounded-lg' dangerouslySetInnerHTML={{ __html: `
    <p className="font-bold text-black">Ajinkya Tembhurne</p>
    <br/>
      <script src="https://fast.wistia.com/embed/medias/9gv65xbzg1.jsonp" async></script>
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
        <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
          <div class="wistia_embed wistia_async_9gv65xbzg1 seo=true videoFoam=true" style="height:100%;position:relative;width:100%">
            <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
              <img src="https://fast.wistia.com/embed/medias/9gv65xbzg1/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
            </div>
          </div>
        </div>
      </div>
    ` }} />
  <br/>
  <div className='container_video mx-auto text-center p-10 border-solid border-2 border-black ... rounded-lg' dangerouslySetInnerHTML={{ __html: `
    <p className="font-bold text-black">Pranjal Mehar</p>
    <br/>
    <script src="https://fast.wistia.com/embed/medias/s2ntcxlzwb.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_s2ntcxlzwb seo=true videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/s2ntcxlzwb/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
    ` }} />
  <br/>
  <div className='container_video mx-auto text-center p-10 border-solid border-2 border-black ... rounded-lg' dangerouslySetInnerHTML={{ __html: `
    <p className="font-bold text-black">Anshul Khobragade</p>
    <br/>
    <script src="https://fast.wistia.com/embed/medias/4oi4uf6lid.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_4oi4uf6lid seo=true videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/4oi4uf6lid/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
    ` }} />
  <br/>
  <div className="container_video mx-auto text-center p-10 border-solid border-2 border-black ... rounded-lg">
    <p className="font-bold text-black">Pushpak Hinje</p>
    <br/>
    <div className="flex justify-center align-middle">
            <img
              className=""
              src="https://www.gradplus.pro/wp-content/uploads/2023/07/image-11.png"
            />
          </div>
    
  </div>
  <br/>
  <div className="container_video mx-auto text-center p-10 border-solid border-2 border-black ... rounded-lg">
    <p className="font-bold text-black">Vishal Barai</p>
    <br/>
    <div className="flex justify-center align-middle">
            <img
              className=""
              src="https://www.gradplus.pro/wp-content/uploads/2023/07/image-12.png"
            />
          </div>
    
  </div>
  <br/>
  <div className="container_video mx-auto text-center p-10 border-solid border-2 border-black ... rounded-lg">
    <p className="font-bold text-black">Sangeeta Ghai</p>
    <br/>
    <div className="flex justify-center align-middle">
            <img
              className=""
              src="https://www.gradplus.pro/wp-content/uploads/2023/07/image-13.png"
            />
          </div>
   
  </div>
  <br/>
  <div className="container_video mx-auto text-center p-10 border-solid border-2 border-black ... rounded-lg">
    <p className="font-bold text-black">Sahil Khobragade</p>
    <br/>
    <div className="flex justify-center align-middle">
            <img
              className=""
              src="https://www.gradplus.pro/wp-content/uploads/2023/07/image-14.png"
            />
          </div>
  
  </div>
  <br/>
</div>

            
   

    
            



            
            <br/>
            <div className="text-center">
                <button className="bg-orange-500 hover:bg-orange-700 text-white  py-2 px-10 rounded-full ">
                  <a href="https://www.amazon.in/Simplified-Physics-Milind-Chapekar-Maharashtra/dp/B07VNXG53W/ref=sr_1_1?crid=1CG2ZN1A308I8&keywords=physics+course+book+by+milind+chapekar&qid=1687779017&sprefix=%2Caps%2C328&sr=8-1">
                    <p className="text-white text-2xl font-semibold">
                      Buy Now
                    </p>
                    <p className="text-white">Available on Amazon</p>
                  </a>
                </button>
              </div>
              <br/>
              <br/>
              <div className="bg-black text-white h-20 flex align-middle justify-center">
              <a href="https://www.instagram.com/milindchapekar/">© Milind Chapekar</a>
              </div>
           
             
          </div>

          <br />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}