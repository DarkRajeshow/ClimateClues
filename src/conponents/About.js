import React from 'react'

export default function About() {
    return (
        <div className='xl:col-start-3 xl:col-end-13 min-[320px]:col-span-full'>
            {/* // < !--1. name section-- > */}
            <div className="section1">
                <a href="/"><i className="about-icons fa-solid fa-biohazard lg:text-4xl min-[320px]:text-xl"></i></a>
                <h1 className="name lg:text-4xl min-[320px]:text-2xl">Who we are?</h1>
                <span className="subheading lg:text-xl min-[320px]:text-sm w-3/5 text-center">Programmer? Blogger? Developer?</span>
            </div>

            {/* <!--2. biographypage-- > */}
            <div className="section2 grid grid-cols-5 w-full">
                <div className="biography md:col-span-3 min-[320px]:col-span-full">
                    <span className="fa-solid fa-arrows-spin"></span>
                    <span className="sectionheading lg:text-2xl min-[320px]:text-xl">Brief Introduction to us.</span>
                    <h3 className="subheading lg:text-xl min-[320px]:text-sm">- how we started this jorney</h3>
                    <p className="biographyPara lg:text-xl min-[320px]:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis, maxime
                        reprehenderit magni cum non inventore vitae vel consequatur corrupti, modi autem quos. Pariatur, ipsum.
                        Deleniti ullam unde neque non?.</p>
                    <p className="biographyPara lg:text-xl min-[320px]:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores illo at sed, eius
                        laudantium cupiditate quam itaque, quia placeat ratione amet incidunt suscipit fugit, iusto magnam ut
                        distinctio in temporibus siblings.</p>
                    <p className="biographyPara lg:text-xl min-[320px]:text-sm md:block min-[320px]:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ab iusto. Rem tempora
                        eaque ad iusto autem hic reprehenderit eligendi, quam, necessitatibus in magni illo..</p>
                </div>
                <div className="picture md:col-span-2 min-[320px]:col-span-full">
                    <img src="https://content.techgig.com/photo/77087595/Guide-How-to-build-career-as-a-programmer-without-college-degree.jpg"
                        alt="" className='md:h-auto min-[320px]:h-auto m-auto md:p-3 md:pt-14 min-[320px]:p-14' />
                </div>
            </div>

            {/* <!--3. quote text-- > */}
            <div className="section3 mb-10 w-full m-auto">
                <i className="about-icons about-icons fa-solid fa-quote-left"></i>
                <h3 className="quotetext md:text-base min-[320px]:text-xs">Don't take rest after your first victory because if you fail in second, <br /> more lips are
                    waiting to say that your first victory was just luck.</h3>
                <i className="about-icons fa-solid fa-quote-right"></i>
            </div>


            {/* <!--achivements of dr apj-- > */}
            <div className="section4_main">
                <h2 className="sectionheading text-xl">
                    Our Experties
                </h2>
                <div className="section2 grid grid-cols-5 w-full">
                    <div className="biography min-[320px]:col-span-full">
                        <span className="fa-solid fa-arrows-spin"></span>
                        <span className="sectionheading lg:text-2xl min-[320px]:text-xl">Are we Programmer?</span>
                        <h3 className="subheading lg:text-xl min-[320px]:text-sm">- The short answer is Yes</h3>
                        <p className="biographyPara lg:text-xl min-[320px]:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis, maxime
                            reprehenderit magni cum non inventore vitae vel consequatur corrupti, modi autem quos. Pariatur, ipsum.
                            Deleniti ullam unde neque non?.</p>
                        <p className="biographyPara lg:text-xl min-[320px]:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores illo at sed, eius
                            laudantium cupiditate quam itaque, quia placeat ratione amet incidunt suscipit fugit, iusto magnam ut
                            distinctio in temporibus siblings.</p>
                        <p className="biographyPara lg:text-xl min-[320px]:text-sm md:block min-[320px]:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ab iusto. Rem tempora
                            eaque ad iusto autem hic reprehenderit eligendi, quam, necessitatibus in magni illo..</p>
                    </div>
                    <div className="biography min-[320px]:col-span-full mt-16">
                        <span className="fa-solid fa-arrows-spin"></span>
                        <span className="sectionheading lg:text-2xl min-[320px]:text-xl">Are we Blogger?</span>
                        <h3 className="subheading lg:text-xl min-[320px]:text-sm">Yes you can say that.</h3>
                        <p className="biographyPara lg:text-xl min-[320px]:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis, maxime
                            reprehenderit magni cum non inventore vitae vel consequatur corrupti, modi autem quos. Pariatur, ipsum.
                            Deleniti ullam unde neque non?.</p>
                        <p className="biographyPara lg:text-xl min-[320px]:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores illo at sed, eius
                            laudantium cupiditate quam itaque, quia placeat ratione amet incidunt suscipit fugit, iusto magnam ut
                            distinctio in temporibus siblings.</p>
                        <p className="biographyPara lg:text-xl min-[320px]:text-sm md:block min-[320px]:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ab iusto. Rem tempora
                            eaque ad iusto autem hic reprehenderit eligendi, quam, necessitatibus in magni illo..</p>
                    </div>
                </div>
                <div className="buttons mb-10">
                    <a href="/contact"><button type="button"
                        className="mt-3 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 submit-button">Contact
                        us</button></a>
                    <a href="/blogs"><button type="button"
                        className="mt-3 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 submit-button">
                        Explore</button></a>
                </div>
            </div>

            {/* <!--5. quote text --> */}
            <div className="section3">
                <i className="about-icons about-icons fa-solid fa-quote-left"></i>
                <h3 className="quotetext md:text-base min-[320px]:text-xs">The best brains of the nations may be <br /> found on the last benches of the classrooms.</h3>
                <i className="about-icons fa-solid fa-quote-right"></i>
            </div>

            <div className="section6">
                <div className="table">
                    <i className="about-icons fa-solid fa-award"></i>
                    <span className="sectionheading lg:text-2xl min-[320px]:text-xl">Achivements</span>
                    <h3 className="subheading lg:text-xl min-[320px]:text-sm">– Some of the important achivements which need to be shown.</h3>
                </div>
                <div className="awards grid grid-cols-4">
                    <div className="award1 transition-all xl:col-span-1 md:col-span-2 min-[320px]:col-span-full" >
                        <h2>Lorem, ipsum dolor.</h2>
                        <span>Year : 2009</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, harum..</p>
                    </div>
                    <div className="award2 transition-all xl:col-span-1 md:col-span-2 min-[320px]:col-span-full" >
                        <h2>Lorem, ipsum dolor.</h2>
                        <span>Year : 2010</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, harum..</p>
                    </div>
                    <div className="award3 transition-all xl:col-span-1 md:col-span-2 min-[320px]:col-span-full">
                        <h2>Lorem, ipsum dolor.</h2>
                        <span>Year : 2012</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, harum..</p>
                    </div>
                    <div className="award4 transition-all xl:col-span-1 md:col-span-2 min-[320px]:col-span-full">
                        <h2>Lorem, ipsum dolor.</h2>
                        <span>Year : 2019</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, harum..</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
