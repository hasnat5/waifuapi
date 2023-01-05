import React from 'react'
import hasnatDev from '../assets/hasnat_dev.jpg'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5'

const About = () => {
    return (
        <section className='bg-primary container mx-auto px-4'>
            <div className='grid px-4 gap-4'>
                <div>
                    <h2 className='my-3'>Hasnat Ferdiananda</h2>
                    <p>Tech Enthusiast (Student / Developer / Weeb)</p>
                </div>
                <img className='justify-self-center w-24 rounded-full border-2 border-white' src={hasnatDev} alt="developer_img" />

                <article>
                    <h3 className='underline underline-offset-[6px] decoration-4 my-4'>About Me</h3>
                    <div className='indent-4 grid gap-2 text-justify text-quaternary'>
                        <p>
                            The 11th-grade high school student from Indonesia.
                        </p>
                        <p>
                            I am a technology developer and action figure enthusiast who always wants to learn more about the latest technology and how to use it to solve problems.
                        </p>
                        <p>
                            Have experience as a front-end developer at <a href='https://www.cobadulu.academy' target='_blank' rel="noopener noreferrer" className='text-blue-700 hover:underline'>codadulu.academy</a> startup and I am very eager to start building my professional career in the workplace. I have a particular interest in web application development.
                        </p>
                    </div>
                </article>

                <article>
                    <h3 className='underline underline-offset-[6px] decoration-4 my-4'>I ♥</h3>
                    <p className='indent-4 text-justify text-quaternary'>
                        <a href="https://www.netflix.com/id/title/80182123" target='_blank' rel="noopener noreferrer" className='text-blue-700 hover:underline' >Anime</a>, Skateboarding, Action figure, Diecast, Playing Penspinning
                    </p>
                </article>

                <article className='mb-4'>
                    <h3 className='underline underline-offset-[6px] decoration-4 my-4'>Social</h3>
                    <ul className='font-medium text-secondary'>
                        <li>
                            <a href="https://github.com/hasnat5" target='_blank' rel="noopener noreferrer">
                                <button className='pl-4 flex items-center h-10'>
                                    <span className='mr-2'><IoLogoGithub /></span>
                                    @hasnat5
                                </button>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/hasnatf" target='_blank' rel="noopener noreferrer">
                                <button className='pl-4 flex items-center h-10'>
                                    <span className='mr-2'><IoLogoLinkedin /></span>
                                    @hasnatf
                                </button>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/hasnat5_/" target='_blank' rel="noopener noreferrer">
                                <button className='pl-4 flex items-center h-10'>
                                    <span className='mr-2'><IoLogoInstagram /></span>
                                    @hasnat5_
                                </button>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com/@hasnat5_" target='_blank' rel="noopener noreferrer">
                                <button className='pl-4 flex items-center h-10'>
                                    <span className='mr-2'><IoLogoYoutube /></span>
                                    @hasnat5_
                                </button>
                            </a>
                        </li>

                    </ul>
                </article>
            </div>
        </section >
    )
}

export default About