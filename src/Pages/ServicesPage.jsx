function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                    <p className="text-gray-700">
                        We build fast, responsive, and modern websites tailored to your needs.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                    <p className="text-gray-700">
                        Our design team creates intuitive and beautiful user interfaces.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                    <p className="text-gray-700">
                        Cross-platform mobile application development for iOS and Android.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default ServicesPage;