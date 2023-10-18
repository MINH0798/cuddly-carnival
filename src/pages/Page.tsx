import Header from "../components/Header";
import Box from '@mui/material/Box';

const block1 = {
    backgroundColor: 'lightpink',
    padding: '10px',
    width: '500px', 
    height: '300px',
    color: 'white',
    display: 'inline-block',
    margin:'30px',
  };

  const p1 = {
    fontSize: '50px', // You can set the size to your preferred value
  };


export default function Page() {
    return (
        <div> 
             <Header />
             <br />
             <br />
             <h1>My project</h1>
             <main>
                <div style={block1}>
                    <h1>this is the block</h1>
                    <p>This is a link to <a href="https://google.com">Example Website</a></p>
             </div>
             <div style={block1}>
                    <h1>this is the block</h1>
                    <p>This is a link to <a href="https://google.com">Example Website</a></p>
             </div>
             <div style={block1}>
                    <h1>this is the block</h1>
                    <p>This is a link to <a href="https://google.com">Example Website</a></p>
             </div>
             <div style={block1}>
                    <h1>this is the block</h1>
                    <p>This is a link to <a href="https://google.com">Example Website</a></p>
             </div>
             <div style={block1}>
                    <h1>this is the block</h1>
                    <p>This is a link to <a href="https://google.com">Example Website</a></p>
             </div>


             </main>

             
            

            
        </div>
       
    )
}