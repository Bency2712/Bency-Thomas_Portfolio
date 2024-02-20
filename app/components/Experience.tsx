export default function Experience(){
    return(
        <section id="experience">
            <div className="center">
                <h2>Experience</h2>
                <div className="timeline">
                    <div className="item">
                        <div className="date"><span className="year">2022</span><span className="arrow"></span></div>
                        <div className="separator">
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                        <div className="texts">
                            <h3>Team Lead - Software Engineer</h3>
                            <h4>The Shams Group</h4>
                            <p>
                                ● Automated OCR monitoring using SQL, reducing errors by 30% and enhancing data accuracy for multiple hospitals <br />
                                ● Conducted code reviews, implemented Java program modifications & refactored 20+ production systems <br />
                                ● Led agile migration of 40+ large databases to Azure data warehouse with cross-functional teams <br />
                                ● Enhanced customer experience with SSRS reports, reducing inquiry time by 35%  <br />
                                ● Accelerated employee onboarding from 6 to 4 weeks via mentoring 20+ junior engineers <br />
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="date"><span className="year">2018</span><span className="arrow"></span></div>
                        <div className="separator">
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                        <div className="texts">
                            <h3>Software Engineer</h3>
                            <h4>The Shams Group</h4>
                            <p>
                                ● Resolved 300+ production and deployment issues by identifying root causes and debugging problems for customers <br />
                                ● Deployed ETranWebPortal, a transcription management system, enabling 1k+ users to edit, & submit patient reports <br />
                                ● Optimized EHR(Electronic Health Records) annotation accuracy with stored procedures, reducing errors by 20% <br />
                                ● Enabled automation of ETL processes using SSIS and DTS for efficient clinical data transfer saving 17 hours a week <br />
                                ● Boosted Database performance by troubleshooting and tuning indexes using Execution Plan, SQL Profiler <br />
                                ● Engaged with stakeholders to analyze requirements, concurrently upgrading legacy software with 10+ features <br />
                            </p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="date"><span className="year">2016</span><span className="arrow"></span></div>
                        <div className="separator">
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                        <div className="texts">
                            <h3>Fellow</h3>
                            <h4>Teach For India</h4>
                            <p>
                                ● Achieved 1.5-grade year avg growth teaching Math, Science, and English to 4th-graders in a government school<br />
                                ● Maximized resources for under-resourced teachers and trained global volunteers to plan intervention classes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}