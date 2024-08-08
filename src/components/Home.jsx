import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
          <div className='home' id='home'>
              <main>
                  <h1>Help-Tech</h1>
                  <p>Solution to all your Problems!!</p>
              </main>
          </div>

          <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>Solving user problems in tech is about creating seamless, intuitive solutions that make technology work effortlessly. By addressing challenges with innovation and clarity, we ensure users achieve their goals efficiently, turning complexity into simplicity.</p>
            </div>
          </div>

          <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>Welcome to [Help-Tech]. My name is "Rachit" your go-to destination for tech support and solution provider. We specialize in providing clear, step-by-step guidance to help you navigate the complexities of the digital world. Whether you're troubleshooting software issues, seeking advice on the latest gadgets, or looking to optimize your tech setup, we're here to make technology accessible and stress-free. Our mission is to empower you with the knowledge and tools you need to solve your tech challenges quickly and effectively. At [Help-Tech], we make technology work for you.</p>
            </div>
          </div>

          <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div style ={{
                        animationDelay: "0.3s" ,
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>

                    <div style ={{
                        animationDelay: "0.5s" ,
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>

                    <div style ={{
                        animationDelay: "0.7s" ,
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>

                    <div style ={{
                        animationDelay: "1.0s" ,
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
          </div>

    </>
  )
}

export default Home;
