import React from 'react';
import BI from "../images/BI.png";
import NE from "../images/NE.png";
import HA from "../images/HA.png";
import WL from "../images/WL.png"; 
import CF from "../images/CF.png"; 
import AR from "../images/AR.png"; 
import BB from "../images/BB.png"; 
import HH from "../images/HH10.png"; 
import TV from "../images/TV.png"; 
import ICPC from "../images/ICPC.png"; 
import HeadShot from "../images/Headshotweb.jpeg"; 
import DSP from "../images/DSP.jpg";
import WorkCard from '../components/WorkCard';
import LangCard from '../components/LangCard';

import FlaskIcon from "../icons/FlaskIcon.png";
import FlutterIcon from "../icons/FlutterIcon.png";
import GoIcon from "../icons/GoIcon.png";
import JavaIcon from "../icons/JavaIcon.png";
import MongoDBIcon from "../icons/MongoDBIcon.png";
import PythonIcon from "../icons/PythonIcon.png";
import ReactIcon from "../icons/ReactIcon.png";
import SwiftIcon from "../icons/SwiftIcon.png";
import TailWindIcon from "../icons/TailWindIcon.png";
import LeftArrow from "../icons/LeftArrowIcon.png";
import GithubIcon from "../icons/GithubIcon.png";
import MailIcon from "../icons/MailIcon.png";
import LinkedInIcon from "../icons/LinkedInIcon.png";


const exps = [
    {
        title: 'Better Innovations',
        imageSrc: BI,
        content: ['- Project Manager', '- Responsible for $461,000 in Revenue', '- GO, React, Python, Flask'],
        redir: "https://isp.butterinnovations.com/index.php/store/proxy-subnet",
        visit: 'true'
    },
    {
        title: 'AIN Enterprises',
        imageSrc: NE,
        content: ['- Co-Founder', '- Led 4 Employees ', '- GO (Wails), React, Python'],
        redir: "https://neuralaio.com/",
        visit: 'true'
    },
    {
        title: 'HayhaBots Incorporated',
        imageSrc: HA,
        content: ['- DevOps Intern', '- Dual Stack Node Project', '- iDRAC, IPV6/ IPV4'],
        redir: "https://www.hayhabots.com/",
        visit: 'true'
    },
    {
        title: 'Whims',
        imageSrc: WL,
        content: ['2nd Place CS 97 UCLA'],
        redir: "https://www.onawhims.com/",
        visit: 'true'
    },
    {
        title: 'Trade Content Delivery',
        imageSrc: BB,
        content: ['- Developed + Delivered Crypto Strategies', '- Twitter, Discord, Python', '- $129,000,000+ Influenced Volume']
    },
    {
        title: 'Helping Hand',
        imageSrc: HH,
        content: ['Click "Visit Project" Above to Learn More'],
        redir: "https://devpost.com/software/helping-hand-vif9x8",
        visit: 'true'
    },
    {
        title: 'Competitive Programming Trainer',
        imageSrc: ICPC,
        content: ['- ICPC Club Peer Trainer', '- Placed 3rd @ SJSU', '- Placed 13th @ PNW '],
        redir: "https://drive.google.com/file/d/1Iu41o_6gsMzx6n166plQT8Hyq4NFgubn/view?usp=sharing",
        visit: 'true'
    },
    {
        title: 'Price Action Tooling',
        imageSrc: TV,
        content: ['- Developed Indicators', '- PineScript V5', '- 15+ Users ']
    },
    {
        title: 'Cedar Fair',
        imageSrc: CF,
        content: ['Sales Associate']
    },
    {
        title: 'AYSO Referee',
        imageSrc: AR,
        content: ['Refereed 8 Years']
    },
    {
        title: 'VP Finance - DSP',
        imageSrc: DSP,
        content: ['- DSP Vice President of Finance', '- Managed club funds with SJSU AS']
    },
  ];

const techs = [
    {
        language: 'React',
        imageSrc: ReactIcon
    },
    {
        language: 'Tailwind',
        imageSrc: TailWindIcon
    },
    {
        language: 'Java',
        imageSrc: JavaIcon
    },
    {
        language: 'Mongo',
        imageSrc: MongoDBIcon
    },
    {
        language: 'Python',
        imageSrc: PythonIcon
    },
    {
        language: 'Golang',
        imageSrc: GoIcon
    },
    {
        language: 'Flutter',
        imageSrc: FlutterIcon
    },
    {
        language: 'Swift',
        imageSrc: SwiftIcon
    },
    {
        language: 'Flask',
        imageSrc: FlaskIcon
    },
]


const AboutMe = () => {
    return (
        <div className=" bg-[#141519] flex flex-col font-manrope overflow-hidden">
            <div className='flex flex-col justify-center items-center text-white p-4 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto'>
                <div className='justify-center'>
                    <h1 className='text-3xl mb-4 text-center text-bold'>Hi, I’m <span className="text-[#1DBF85]">Akhil</span>!</h1>
                    <div className='flex justify-center'>
                        <img class="object-cover rounded-full p-2 h-[200px]" src={HeadShot} alt="" />
                    </div>
                    <p className='text-lg text-center'>
                        I'm a Junior majoring in Software Engineering at San Jose State University. Living in Cupertino, California, I enjoy creating projects that simplify aspects of life for me and my friends. When I'm not coding, you'll likely find me at the gym or trying out new taco trucks!
                    </p>
                </div>
                <div>
                    <h1 className='text-3xl m-4 text-center text-bold'>Experiences & Projects</h1>
                    <div className='justify-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {exps.map((item, index) => (
                        <WorkCard
                            key={index}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            content={item.content}
                            redir={item.redir} 
                            visit={item.visit}
                        />
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl m-4 text-center text-bold'>Technologies</h1>
                    <div className='justify-start grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                        {techs.map((item, index) => (
                        <LangCard
                            key={index}
                            language={item.language}
                            imageSrc={item.imageSrc}
                        />
                        ))}
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='mt-4 flex flex-row p-4 items-center justify-center'>
                        <a 
                            href="https://drive.google.com/file/d/1_ONfNR71BJjF2GmQ3bYiXovXCHfbSGLS/view?usp=sharing" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-blue-100 underline'
                        >
                            View my resume here
                        </a>
                        <img class="object-cover ml-3 bg-[]" src={LeftArrow} alt="" />
                    </div>
                    <div className='flex justify-between pt-4 w-full flex-col sm:flex-row'>
                        <h2 className='text-white text-xl font-bold'>Akhil Manjesh</h2>
                        <div className='flex flex-row pt-2'>
                            <a href="https://www.linkedin.com/in/akhilmanjesh/" className=''>
                                <img class="object-cover h-[25px] " src={LinkedInIcon} alt="" />
                            </a>
                            <a href="https://github.com/akhilmanjesh/" className=''>
                                <img class="object-cover h-[25px] pl-2" src={GithubIcon} alt="" />
                            </a>
                            <a href="mailto:akhil.manjesh@sjsu.edu?subject=Email Akhil" className=''>
                                <img class="object-cover h-[25px] pl-2" src={MailIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
}

export default AboutMe;
