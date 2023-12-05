
const Banner = () => {

    const containerStyle = {
        backgroundImage: 'url(https://i.ibb.co/dJ8yXMg/Teal-Illustration-Digital-Business-Blog-Banner.png)',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
      };
    return (
        <div  className='min-h-screen flex py-28 md:py-20 lg:py28 px-8 md:px-12' style={containerStyle}>
            <h1 className='text-6xl  font-semibold'>We are here to help
            <br /> you find 
            <br /><span className='text-cyan-400'>your dream</span></h1>
            
        </div>
    );
};

export default Banner;