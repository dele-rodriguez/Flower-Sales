import React from "react";
import {QueryClient,QueryClientProvider,useQuery,} from '@tanstack/react-query';

function Blog() {

    const { isLoading, error, data } = useQuery(['repoData'], async () => {
        const response = await fetch('https://perenual.com/api/species-list?key=sk-Y5L1650c4639d65fe2243&q=monstera');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
    
      if (isLoading) return 'Loading...';
    
    if (error) return 'An error has occurred: ' + error.message;

    console.log(data);

    return (
        <>
            <section className="blog">
                <p>{data.to}</p>
                {data.data.map((item) => (
                    <img src={item.default_image.original_url}> </img>
                ))}
            </section>
        </>
    )
}


export default Blog;