import { Link } from 'react-router-dom';

function HomePage() {
    return (
        // React Fragment (<>), birden fazla bölümü gruplamamızı sağlar
        <>
            {/* ----- 1. BÖLÜM: HERO (Mevcut) ----- */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-16 sm:py-24">
                    <div className="flex flex-col md:flex-row items-center">

                        {/* Sol Taraf: Metin ve Buton */}
                        <div className="md:w-1/2 lg:w-3/5 md:pr-12 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                                Build Your Digital Future
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                                We build cutting-edge digital products and solutions that drive growth and innovation for your business.
                            </p>
                            <Link
                                to="/services"
                                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
                            >
                                Explore Our Services
                            </Link> {/* <-- HATA BURADAYDI, </D> YERİNE </Link> OLARAK DÜZELTİLDİ */}
                        </div>

                        {/* Sağ Taraf: Görsel */}
                        <div className="md:w-1/2 lg:w-2/5">
                            <img
                                src="/hero-image.jpg"
                                alt="Innovatech Technology Solutions"
                                className="rounded-lg shadow-xl w-full"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* ----- 2. BÖLÜM: ÖNE ÇIKAN HİZMETLER (Mevcut) ----- */}
            <section className="bg-gray-100 py-16 sm:py-24">
                <div className="container mx-auto px-4">

                    {/* Bölüm Başlığı */}
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Our Core Services
                    </h2>

                    {/* Hizmet Kartları */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                            <p className="text-gray-700">
                                Fast, responsive, and modern websites tailored to your needs.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                            <p className="text-gray-700">
                                Intuitive and beautiful user interfaces that users love.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                            <p className="text-gray-700">
                                Cross-platform mobile applications for iOS and Android.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ----- 3. BÖLÜM: CALL TO ACTION (CTA - YENİ EKLENEN) ----- */}
            <section className="bg-blue-600">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Have a project in mind?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Let's build something great together. Get in touch with us today.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 text-lg"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}

export default HomePage;