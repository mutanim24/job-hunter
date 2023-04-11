import React from 'react';
import backgroundBanner from "../../assets/All Images/Vector.png"

const Blog = () => {
    return (
        <div className='mx-20'>
            <div style={{ backgroundImage: `url(${backgroundBanner})` }}>
                <h1 className='text-4xl font-bold text-center p-4 md:p-9'>Blog</h1>
            </div>
            <div className='grid md:grid-cols-2 gap-6 my-16'>
                <div className='border border-2 border-cyan-600 p-7 rounded'>
                    <h1 className='text-3xl font-semibold mb-3'>1. When should you use context API?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, exercitationem fuga. Architecto optio nobis error et nam labore aperiam corrupti alias eum sit mollitia similique maxime officia, quasi quam obcaecati!</p>
                </div>
                <div className='border border-2 border-cyan-600 p-7 rounded'>
                    <h1 className='text-3xl font-semibold mb-3'>2. What is a custom hook?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, exercitationem fuga. Architecto optio nobis error et nam labore aperiam corrupti alias eum sit mollitia similique maxime officia, quasi quam obcaecati!</p>
                </div>
                <div className='border border-2 border-cyan-600 p-7 rounded'>
                    <h1 className='text-3xl font-semibold mb-3'>3. What is useRef?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, exercitationem fuga. Architecto optio nobis error et nam labore aperiam corrupti alias eum sit mollitia similique maxime officia, quasi quam obcaecati!</p>
                </div>
                <div className='border border-2 border-cyan-600 p-7 rounded'>
                    <h1 className='text-3xl font-semibold mb-3'>4. What is useMemo?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, exercitationem fuga. Architecto optio nobis error et nam labore aperiam corrupti alias eum sit mollitia similique maxime officia, quasi quam obcaecati!</p>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;