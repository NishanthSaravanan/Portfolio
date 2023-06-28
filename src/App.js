
import './App.css';

import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsGit , BsFillTelephoneFill} from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

function App() {
  const handleDownload = () => {
    const fileUrl = 'https://docs.google.com/document/d/1DCz94NvPre74gtkXrdbms1R6Vh3Ef0P-/edit?usp=drivesdk&ouid=114949047392592460810&rtpof=true&sd=true';
    const fileName = 'NishanthCV.docx'; 

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  let navContents = [{path:'#context', content: 'Home'},{path:'#Skills',content:'Skills'},{path:'#About',content:'About'},{path:'#Project',content:'Project'},{path:'#Contact',content:'Contact'}];
 
  return (
    <div className="App">
      
     
      <nav className='bg-gray-200 fixed w-full '>
           <div className='flex  '>
           
           < a href='#context' className='shadow-inner text-3xl object-left text-sky-700 font-semibold pl-3 ' id='name'>Nishanth.S</a>
           <div id='navContents ' className='flex mx-auto' >
         {
          navContents.map((innerArray, index) => (
            <ul key={index} >


    <a href={innerArray.path} className='text-xl  px-3 pt-2  hover:text-black-500 hover:underline flex '><span >{innerArray.content}</span></a>
 

            </ul >
          )

          )
         }
          

           </div>
           </div>
           </nav>
          
      
      <div id='context' className='pl-3 '>
      <br/>
      <br/>
      <br/>
      <h1 className='text-5xl indent-0.5 font-bold '>Hi,<br/> I'm<span  id='name' className='text-5xl indent-0.5 font-bold '> Nishanth Saravanan</span> <br/>an Computer Application <br/>Graduate</h1>
      <br/>
      <br/>
      <a href='#Contact'><button className='bg-sky-500 hover:bg-sky-700 text-2xl border-0.1 border-teal-400 rounded-full pr-5 pl-4 bg-blue-600 text-white' id='card'>Contact</button></a>
      </div>
      <br/>
      <br/> 
      <div className='pl-3 grid grid-flow-col auto-cols-max' id='icons'>
      
      <Link to='https://github.com/NishanthSaravanan'  className='pl-6 pr-3 text-5xl' id='card'><BsGithub/></Link>
      <Link to='https://www.linkedin.com/in/nishanthsaravanan'  className='pl-6 pr-3 text-5xl' id='card'><BsLinkedin/></Link>
      <Link to='mailto:nishanthsaravanan6@gmail.com'  className='pl-6 pr-3 text-5xl' id='card'><MdOutlineMail/></Link>
         
       
      </div>
      <br/>
      <hr className='text-black '/>
      <br/><br/>

      <div id='Skills'>
 

  <br/><br/>
  <h1 className='text-4xl text-center'>SKILLS</h1><br/>
  <div className='flex items-center justify-center ' id='card'>
  <div id='glow' className='subpixel-antialiased p-4 text-justify border-.1 border-current  box-content h-auto w-auto backdrop-brightness-125 bg-blue shadow-2xl  shadow-blue-500/50' >
  <ul >
  <li className='list-inside list-disc text-3xl'>
  Programming Languages
  <div className='list-inside list-none text-xl'> Java , Javascript  , C + + .</div>
  </li>
  <li className='list-inside list-disc text-3xl'>
  UI/Web Technologies
  <div  className='list-inside list-none text-xl'>ReactJS , NPM , Bootstrap , Tailwind CSS, CSS , HTML .</div>
    </li>
    <li className='list-inside list-disc text-3xl'>
    Version Control
    <div className='list-inside list-none text-xl'>Git .</div>
    </li>
    <li className='list-inside list-disc text-3xl'>
    Database
    <div className='list-inside list-none text-xl'>MongoDB , Oracle .</div>
    </li>
  </ul>
  </div>
  </div>
    </div> 
    <br/>
      <hr className='text-black '/>
      <br/><br/>
    <div id='About'>
          
          <br/><br/>
          <h1 className='text-4xl text-center'>ABOUT</h1><br/>
          <div className='flex items-center justify-center' id='card'>
           
        <div className='  border-.1 border-current shadow-2xl shadow-black box-content h-auto w-auto p-4'>
        <div className='flex items-center text-2xl'>
        Hello, I am an aspiring computer application graduate.  <br/>Seeking an opportunity in the field of software engineering,  <br/>looking for a challenging career where I can  <br/>implement my coding knowledge to further enhance my skills. I am <br/> seeking entry-level employment where I can develop my abilities  <br/>as a software developer and help a firm succeed overall. <br/>

<br/>
        </div>
        <div className='flex items-center text-3xl pr-2'>
       
        Take a look at my cool resume!!! <br/>
       
      <button onClick={handleDownload} className='bg-sky-500 hover:bg-sky-700 text-2xl border-2 border-teal-400 rounded-full pr-5 pl-4 bg-blue-600 text-white' id='card'>Download</button>

        </div>
            <br/>
            </div>  
        
        </div>
    </div> 
    <br/>
      <hr className='text-black '/>
      <br/><br/>
    <div id='Project'>
    <br/><br/>
    <h1 className='text-4xl text-center'>PROJECT</h1>
    <br/>
    <div className='flex items-center justify-center' id='card'>
           
           <div className='  border-.1 border-current shadow-2xl shadow-black box-content h-auto w-auto p-4'>
           <div className='flex items-center text-2xl'>

          E-Learn
          </div>
          <div className='flex items-center '>
          <ul>
            <li className='list-inside text-xl list-disc'>
E-Learn is all about the personal collection of computer science based  <br/>study materials. It gives the user better convenience to  <br/>access those collective contents in a single website.  <br/>
            </li>
            <li className='list-inside text-xl list-disc'>
              This website is responsive and ease to <br/> use . Such a beginner friendly website . <br/>
            </li>
            <li className='list-inside text-xl list-disc'>
              E-Learn is corely build with ReactJS and <br/>Bootstrap. And hosted in a GitHub. <br/>
            </li>
            <br/>
            <li className='list-inside text-xl list-none'>
              <Link to='https://github.com/NishanthSaravanan/E-Learn'><span className='text-2xl'><BsGit/> </span>https://github.com/NishanthSaravanan/E-Learn</Link>
            
            </li>
            <br/>
            
          </ul>
            </div>

            <div className='flex items-center text-2xl'>
Portfolio
          </div>
          <div className='flex items-center '>
          <ul>
            <li className='list-inside text-xl list-disc'>
Portfolio is a simple website with carries out all of my personal details in  <br/>terms of technical skills. 
            </li>
            <li className='list-inside text-xl list-disc'>
              This website is responsive and ease to use .
            </li>
            <li className='list-inside text-xl list-disc'>
             Portfolio is corely build with ReactJS and TailWindCSS. And hosted in a  <br/>GitHub.
            </li>
            <br/>
            <li className='list-inside text-xl list-none'>
              <Link to='https://github.com/NishanthSaravanan/Portfolio'><span className='text-2xl'><BsGit/> </span>https://github.com/NishanthSaravanan/Portfolio</Link>
            
            </li>
            <br/>
            
          </ul>
            </div>
            </div>



            
            </div>  
      </div>  
      <br/>
      <hr className='text-black '/>
      <br/><br/>
    <div id='Contact'>
    <br/><br/>
    <h1 className='text-4xl text-center'>CONTACT</h1>
    <br/>
    <div className='flex items-center justify-center' id='card'>
    <div >
           <div className='  border-.1 border-current shadow-2xl shadow-black box-content h-auto w-auto p-4' >
           <div className='flex flex-col items-left text-2xl'>
           <div className='flex'><Link to='mailto:nishanthsaravanan6@gmail.com'  className=' pr-3 text-5xl '><MdOutlineMail className='absolute pb-2'/><span className='text-2xl'>nishanthsaravanan6@gmail.com</span></Link></div>
           <div className='flex'> <Link to='tel:+918903713048'  className=' pr-3 text-5xl'><BsFillTelephoneFill className='absolute pb-4'/><span className='text-2xl'>+91 89037 10348</span></Link></div>
           <div className='flex'> <Link to='https://www.linkedin.com/in/nishanthsaravanan'  className=' pr-3 text-5xl'><BsLinkedin className='absolute pb-4'/><span className='text-2xl'>https://www.linkedin.com/in/nishanthsaravanan</span></Link></div>
           <div className='flex'> <Link to='https://github.com/NishanthSaravanan'  className='pr-3 text-5xl'><BsGithub className='absolute pb-4'/><span className='text-2xl'>https://github.com/NishanthSaravanan</span></Link></div>

           </div>

            </div>
            </div>
            </div>  
      </div> 
      <br/><br/>
    </div>
  );
}

export default App;
