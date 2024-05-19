
import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import e from 'cors';
import NavBar from '../../../common/navbar';
import "./styles/about.css";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const currentSEO = SEO.find((item) => item.page === "about");

    return (
        <React.Fragment>
            {/* <Helmet>
                <title>{`About | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet> */}

            <div className="page-content">
                <NavBar active="about" />
                <div className="content-wrapper">


                    <div className="about-container">
                        <div className="about-main">
                            <div className="about-left-side">
                                <div className="about-image-container">
                                    <div className="about-image-wrapper">
                                        <img
                                            src="public\Tem1photo1.png"
                                            alt="about"
                                            className="image"
                                        />
                                    </div>
                                </div>


                            </div>

                            <div className="about-right-side">
                                <div className="title about-title">
                                    {/* {INFO.about.title} */}
                                    Full-stack web and mobile app developer, and amateur astronaut.
                                </div>

                                <div className="subtitle about-subtitle">
                                    {/* {INFO.about.description} */}
                                    I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
                                </div>
                            </div>

                            
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default About;