export const Footer = () => {
    return (
        <footer class="bg-gray-800">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#about" className=" hover:underline mb-6 font-bold">About</a>
                            
                        </li>
                        <li class="mb-4">
                            <a href="/menu" className="hover:underline mb-6 font-bold">Menu</a>
                        </li>
                        <br />
                        Contact us at:<h1 className="font-semibold text-lg text-yellow-600 py-2"> feedback@delicious.com
                            </h1>
                    </ul>
                </div>
            </div>
            <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-300 sm:text-center">© 2023 Food Delivery. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}