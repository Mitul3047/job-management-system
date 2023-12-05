

const Motivation = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row gap-4 p-4 lg:px-28 lg:pb-28'>

            <iframe className='rounded-lg max-w-lg' height="315" src="https://www.youtube.com/embed/bXGhtjezJPY?si=nd_Jm_nPMLGv1cuO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <div className='space-y-3 flex flex-col justify-center '>
                <h3 className='font-semibold text-3xl text-cyan-500'>Jack Ma's Ultimate Advice
                    <br />
                    for Students & Young People</h3>
                <p className='text-xl font-medium '>HOW TO SUCCEED IN LIFE</p>

            </div>
        </div>
    );
};

export default Motivation;