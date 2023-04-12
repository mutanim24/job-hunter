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
                    <p>The Context API is a feature in React that allows you to share data between components without having to pass props down through every level of the component tree. We use context API When you need to pass data down to many levels of nested components: In cases where you have a large component tree and you need to pass data down to many levels, using the Context API can simplify your code and reduce the number of props you need to pass.</p>
                </div>
                <div className='border border-2 border-cyan-600 p-7 rounded'>
                    <h1 className='text-3xl font-semibold mb-3'>2. What is a custom hook?</h1>
                    <p>In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to extract and reuse logic between components. Custom hooks are a way to share stateful logic between components without relying on inheritance or higher-order components.

                        Custom hooks typically encapsulate complex functionality that can be reused across different components, such as API calls, form handling, or animations. By abstracting this functionality into a custom hook, you can make your code more modular, easier to understand, and easier to maintain.</p>
                </div>
                <div className='border border-2 border-cyan-600 p-7 rounded'>
                    <h1 className='text-3xl font-semibold mb-3'>3. What is useRef?</h1>
                    <p>In React, useRef is a hook that provides a way to create a mutable reference to an element or a value that persists across re-renders.

                        Unlike state variables created using the useState hook, changes to the value of a useRef reference do not trigger a re-render of the component.

                        The useRef hook can be used in a variety of ways. One common use case is to get a reference to a DOM element in the component, which can then be used to manipulate the DOM directly.</p>
                </div>
                <div className='border border-2 border-cyan-600 p-7 rounded'>
                    <h1 className='text-3xl font-semibold mb-3'>4. What is useMemo?</h1>
                    <p>In React, useMemo is a hook that can be used to memoize expensive computations so that they are only executed when their inputs have changed.

                        The useMemo hook takes two arguments: a function that computes the memoized value, and an array of dependencies that are used to determine when to recompute the value. If any of the dependencies change between renders, the function is re-executed to compute the new value. Otherwise, the cached value from the previous render is returned.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;