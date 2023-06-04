import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div id = "about" className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <br></br>
                    <p className="text-lg">
                    Welcome to Delicious, your go-to destination for convenient and delicious online food ordering. We are passionate about connecting hungry customers with a wide range of cuisines, all in one convenient platform.
                    At Delicious, we believe that good food brings people together. Whether you're looking for a quick bite, a hearty meal, or a special treat, our platform offers a diverse selection of cuisines to cater to every taste and craving. From local favorites to popular chains, we've curated a collection of dining options to satisfy your appetite.
                    We understand the importance of quality and convenience. Our user-friendly website allow you to browse through menus and read the description to understand what will be added in your dish with just a few clicks. Say goodbye to long waiting times and busy phone lines – with Delicious, ordering food has never been easier.
                    We prioritize customer satisfaction above all else. Our dedicated team works tirelessly to ensure that your food is delivered promptly and with care. 
                    Your satisfaction is our top priority.
                    Thank you for choosing Delicious. We are excited to serve you and be a part of your food journey.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}