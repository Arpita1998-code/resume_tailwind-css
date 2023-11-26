import Image from "next/image";

const Resume = () => {
  return (
    <div className="body grid min-h-screen place-items-center bg-gray-400">
    <div className="main m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg">

      <div className="div-1">
      <nav className='navbar relative bg-sky-900 h-[200px] z-1000 w-full'>
      <h1 className='name-1 font-bold absolute top-[20px] left-[390px] text-[40px] text-white'>ARPITA DUTTA</h1>
      <h2 className='name-2 absolute top-[90px] left-[390px] text-[35px] text-white'>DEVELOPER</h2>
      <div><Image className='img h-[230px] w-[230px] absolute top-[40px] left-[40px] rounded-full' src="/Picsart_22-07-01_00-38-28-495.jpg" width="100" height="100"></Image></div>
      </nav>
      </div>
      

       <div className="div-2 absolute top-[300px] left-[700px]">
        <h3 className="div1-h3 font-bold text-blue-600 underline">ABOUT ME</h3>
        <p className=""> Web Developer with a passion for web application</p>
        <p className=""> development and success in managing </p> 
        <p className=""> development. projects Skilled in conceptualizing,</p> 
        <p className=""> designing, development, and deploying software</p>
        <p className=""> containing logical and mathematical solutions to</p>
        <p className=""> business problems. Dedicated to driving innovation</p>
        <p className=""> with the ability to follow industry and technological</p> 
        <p className=""> trends, and facilitating early adoption of innovations.</p>
      </div>

      <div className="div-3 absolute top-[350px] left-[400px]">
        <h3 className="div2-h3 font-bold text-blue-600 underline">CONTACT</h3>
        <ul>
          <li><b>Mobile:- </b>7908087039</li>
          <li><b>Email:- </b>arpitadutta808@gmail.com</li>
          <li><b>Linkedin:- </b>Arpita Dutta</li>
          <li><b>Skype:- </b>live:.cid.bc7685be6f216f87</li>
          <li><b>Address:- </b>Chittaranjan</li>
        </ul>
      </div>

      <div className="div-4 absolute top-[580px] left-[700px]">
      <h3 className="div3-h3 font-bold text-blue-600 underline">EXPERIENCE</h3>
      <h4><b>Project</b></h4>
      <p>Online OTT Platform-PHP</p>
      </div>    
      
      <div className="div-5 absolute top-[550px] left-[400px]">
      <h3 className="div4-h3 font-bold text-blue-600 underline">EDUCATION BACKGROUND</h3>
      <ul>
        <li><b>D.V.GIRLS (WBSCTE)</b></li>
        <p>10Th-2014</p>
        <li><b>D.V.GIRLS (WBSCTE)</b></li>
        <p>12Th-2016</p>
        <li><b>ASANSOL GIRLS COLLEGE,</b></li>
        <li><b>KAZI NAZRUL UNIVERSITY</b></li>
        <p>B.Sc in Zoology-2019</p>
        <li><b>BANWARILAL BHALOTIA</b></li>
        <li><b>COLLEGE, KAZI NAZRUL</b></li>
        <li><b>UNIVERSITY</b></li>
        <p>M.Sc in Zoology-2021</p>
      </ul>
      </div>
      
      <div className="div-6 absolute top-[680px] left-[700px]">
      <h3 className="div5-h3 font-bold text-blue-600 underline">INTERN</h3>
      <p> <b>Technology Private Limited</b></p>
      <p>2023</p>
      <ul>
        <li>Assisted in testing and debugging software </li>
        <li>applications.</li>
        <li>Participated in code reviews and provided </li>
        <li>feedback.</li>
        <li>Learned various programming languages and </li>
        <li>frameworks.</li>
      </ul>
      </div>
      
      <div className="div-7 absolute top-[880px] left-[400px]">
      <h3 className="div6-h3 font-bold text-blue-600 underline">SKILLS</h3>
      <ul>
        <li><b>JavaScript (ES6)</b></li>
        <li><b>React.js</b></li>
        <li><b>Node.js</b></li>
        <li><b>HTML/CSS</b></li>
        <li><b>PHP</b></li>
        <li><b>C</b></li>
        <li><b>Git</b></li>
      </ul>
      </div>

      <div className="div-8 absolute top-[940px] left-[700px]">
        <h3 className="div7-h3 font-bold text-blue-600 underline">DECLARATION</h3>
        <p className="dec1"> I declare that above mentioned information </p>
        <p className="dec2"> is correct up to my knowledge and, I bear </p>
        <p className="dec3"> the responsibility for the correctness of the </p>
        <p className="dec4"> above mentioned particulars.</p>
      </div> 
    </div>
    </div>
  );
}

export default Resume;