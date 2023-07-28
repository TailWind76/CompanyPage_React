import calendar from './icons/Calendar.svg'
import axios from 'axios'
import { useState, useEffect } from 'react';

function Blog() {
    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        TakeBlogJson();
    }, []);

    function TakeBlogJson() {
        const jsonURL = "blog.json";

        axios.get(jsonURL)
        .then(response => {
            const JsonData = response.data;
            processJsonData(JsonData);
        })
        .catch(error => {  
            console.error('fetching error', error);
        })
    }
  
    function processJsonData(data) {
        const blogItemsData = data;
        setBlogItems(blogItemsData);
    }

    return (
        <div id='blog' className="Blog">
            <h2>Recent Blog Post</h2>
            <p>We cover a wide range of topics, including network security, data protection, cloud security, incident response, privacy regulations, and much more. Our blog post aims to address common challenges, shed light on industry trends, and provide guidance on how to mitigate risks effectively.</p>
            <div className="Blog__main">
                {blogItems.map((item) => (
                    <div key={item.NewsId} className="Blog__main__item">
                        <img src={item.newsImage} />
                        <div className="blog_info">
                            <div className="blog__date">
                                <img src={calendar} />  <p> {item.newsDate} </p>     
                            </div>   
                            <div className='blog_text'> 
                                <h3>{item.newsTitle}</h3>
                                <p>{item.newsText}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog;
