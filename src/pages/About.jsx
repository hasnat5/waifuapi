import React from 'react'
import hasnatDev from '../assets/hasnat_dev.jpg'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5'

const About = () => {
    return (
        <section className='container mx-auto px-4'>
            <div className='grid px-4 gap-4'>
                <div>
                    <h2 className='font-bold my-3'>Hasnat Ferdiananda</h2>
                    <p>Tech Enthuisiast (Student / Developer / Weeb)</p>
                </div>
                <img className='justify-self-center w-24 rounded-full border-2 border-white' src={hasnatDev} alt="developer_img" />

                <article>
                    <h3 className='underline underline-offset-[6px] decoration-4 my-4'>Description</h3>
                    <p className='indent-4 text-justify'>Hasnat merupakan seorang pelukis cendekiawan yang menganggap bahwa website merupakan kanvasnya. Tak hanya itu, diapun bersikeras untuk membawa manfaat kepada orang lain melalui website</p>
                </article>

                <article>
                    <h3 className='underline underline-offset-[6px] decoration-4 my-4'>I ♥</h3>
                    <p className='indent-4 text-justify'>Anime, Skateboarding, Action figure, Diecast, Playing Penspinning</p>
                </article>

                <article className='mb-4'>
                    <h3 className='underline underline-offset-[6px] decoration-4 my-4'>Social</h3>
                    <ul className='font-medium text-cyan-600'>
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
        </section>
    )
}

export default About