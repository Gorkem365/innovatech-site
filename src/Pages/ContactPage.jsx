function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-gray-700 mb-8 text-center">
        Have a project in mind? We'd love to hear from you.
      </p>

      {/* FORM TALİMATLARI:
        1. formspree.io sitesine gidin ve (GitHub hesabınızla) ücretsiz üye olun.
        2. 'New form' (Yeni form) oluşturun, size https://formspree.io/f/xxxxxxxx gibi bir URL verecektir.
        3. O URL'yi kopyalayın ve aşağıdaki "action" etiketindeki "YOUR_FORM_ID_HERE" ile değiştirin.
      */}
      <form 
        action="https://formspree.io/f/YOUR_FORM_ID_HERE" // <-- BU ADRESİ GÜNCELLEYECEKSİNİZ
        method="POST"
        className="bg-white p-8 rounded-lg shadow-md"
      >
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name" // "name" özniteliği Formspree için önemlidir
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email" // "name" özniteliği Formspree için önemlidir
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Message Textarea */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message" // "name" özniteliği Formspree için önemlidir
            rows="5"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;