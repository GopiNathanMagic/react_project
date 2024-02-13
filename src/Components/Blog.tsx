// import React from 'react'
import anchorright from "../assets/anchor-right.svg"
import blog from "../assets/blog-1.png"
import blogtwo from "../assets/blog-2.png"


const Blog = () => {
  return (
    <>
    {/* header */}
    <section className="blog-outer">
        <div className="container">
            <div className="blog-title">
                <div className="blog-content">
                    <h2>Read our blog</h2>
                    <p>We give actionable tips, strategies, and techniques to grow your business.</p>
                </div>
                <div className="blog-button">
                <a href="#" className="btn">View All <img src={anchorright} alt="" /></a>
                </div>
            </div>    
                <div className="blog-inner">
                    <div className="blog">
                        <div className="blog-image">
                            <a href="#"><img src={blog} alt="blog" /></a>
                        </div>
                        <div className="blog-bottom">
                            <h3>Improve your business ecommerce management</h3>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="blog-image">
                        <a href="#"><img src={blogtwo} alt="blog" /></a>
                        </div>
                        <div className="blog-bottom">
                            <h3>Ecommerce Hosting: What to Look for in a Host</h3>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="blog-image">
                        <a href="#"><img src={blog} alt="blog" /></a>
                        </div>
                        <div className="blog-bottom">
                            <h3>Improve your business ecommerce management</h3>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
        </div>
    </section>

    </>
  )
}

export default Blog