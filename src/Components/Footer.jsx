function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2025 Innovatech Solutions. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    {/* Bu linkler (href="#") şu an bir yere gitmiyor, sadece yer tutucu */}
                    <a href="#" className="hover:text-white">
                        LinkedIn
                    </a>
                    <a href="#" className="hover:text-white">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-white">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;