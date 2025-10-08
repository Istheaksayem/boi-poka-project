import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() =>{
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //        setAllBooks(data)
    //     })
    // },[])
    // const bookpromise = fetch('./booksData.json')
    // .then(res => res.json())
    return (
        <div>
            <h2 className='text-3xl text-center font-bold py-6'>Books</h2>
            <Suspense fallback={<span>Loading....</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;