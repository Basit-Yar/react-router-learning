

function Home() {
    return (
        <div className="flex flex-wrap ">
            <div className="w-1/2 flex justify-center items-center max-h-screen">
                <img
                    className="w-3/5"
                    src="https://static.vecteezy.com/system/resources/thumbnails/011/153/360/small_2x/3d-web-developer-working-on-project-illustration-png.png" alt="err_img"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center pr-40">
                <h1 className="text-4xl mb-4">He is building a React App</h1>
                <p className="text-gray-500 w-3/5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi beatae illo debitis, explicabo odio dolorum vitae repudiandae aperiam?</p>
                <button className="w-2/5 mt-8 text-green-700 px-2 py-1 border-2 border-green-700 shadow">Know more</button>
            </div>
        </div>
    );
}

export default Home;