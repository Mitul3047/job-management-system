

const UserWelcome = () => {
    const imgStyle = {
        backgroundImage: 'url(https://i.ibb.co/Scj6Y4Y/tengku-nadia-fz8-SONk-BB8-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#000000B2',
        backgroundBlendMode: 'darken',

    };
    return (
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 " style={imgStyle}>
        <h1 className="text-white text-3xl mb-3">Welcome</h1>
        <div>
            <p className="text-white text-center">&quot;Unlock unforgettable moments with us. From dream weddings to joyful birthdays, we craft memories for every occasion – anniversaries, engagements, retirements, baby showers, and more. Join us to celebrate life&rsquo;s milestones in style!&quot;</p>
        </div>
    </div>
    );
};


export default UserWelcome;