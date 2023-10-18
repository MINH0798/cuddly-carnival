import Header from "../components/Header"
import Typography from '@mui/material/Typography';

export default function Demo_view() {
    return (
        <div>
            <Header />

            <main>
                <div className='mb-4 p-3 mt-20 flex justify-between'>
                    <Typography variant="h3" fontWeight="bold">My Project</Typography>
                    <div className='flex items-center'>
                     <Typography variant="h1" sx={{ fontWeight: 'bold', marginLeft: '10px' }}>Search Bar</Typography>
                        <input style={{ background: "#f8f8f8" }} className='border-none outline-none rounded-md px-1.5 py-2 box-border' type="text" placeholder='Enter something...' />
                    </div>
                </div>
                <div className=' flex flex-wrap  justify-between gap-x-1 gap-y-5'>
                    {
                        Array.from({ length: 9 }, (_, i) => (
                            <a key={i} className=' w-96 h-60  rounded-lg' style={{ background: '#d9d9d8', width: "29rem" }}
                                href='https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1' rel="noopener noreferrer" target={"_blank"} >

                            </a>
                        ))
                    }
                </div>
            </main>

        </div>

    )
}