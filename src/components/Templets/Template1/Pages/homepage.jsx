
import React from 'react';
import "./styles/homepage.css"; 

    
const Homepage = () => {
    return (
        <div className="page-content">
            
            <div className="content-wrapper">
                

                <div className="homepage-container">
                    <div className="homepage-first-area">
                        <div className="homepage-first-area-left-side">
                            <div className="title homepage-title">
                                {/* {INFO.homepage.title} */}
                                I’m Tharindu N. I live in Sri Lanka, where I design the future.
                            </div>

                            <div className="subtitle homepage-subtitle">
                                {/* {INFO.homepage.description} */}
                                I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
                            </div>
                        </div>

                        <div className="homepage-first-area-right-side">
                            <div className="homepage-image-container">
                                <div className="homepage-image-wrapper">
                                    <img
                                        src="public\Guru.jpg"
                                        alt="about"
                                        className="homepage-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    {/* <div className="homepage-projects">
                        <AllProjects />
                    </div> */}

                    {/* <div className="homepage-after-title">
                        <div className="homepage-articles">
                            {myArticles.map((article, index) => (
                                <div
                                    className="homepage-article"
                                    key={(index + 1).toString()}
                                >
                                    <Article
                                        key={(index + 1).toString()}
                                        date={article().date}
                                        title={article().title}
                                        description={article().description}
                                        link={"/article/" + (index + 1)}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="homepage-works">
                            <Works />
                        </div>
                    </div> */}

                    
                </div>
            </div>
        </div>
    )
}
export default Homepage;