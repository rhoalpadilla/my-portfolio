import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Rhoal Chun T. Padilla</h1>
        <p className="text-xl text-gray-600">Graphic Designer | Web Developer</p>
      </header>

      {/* Image Gallery Section */}
      <section className="w-full max-w-3xl px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">My Design Portfolio</h2>
        <ImageGallery />
      </section>

      {/* About Me Section */}
      <section className="w-full max-w-3xl px-4 py-10 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600">
          I’m a self-taught graphic designer and web developer with a passion for creating visually stunning and
          functional designs. My expertise includes UI/UX design, web development, and video editing.
        </p>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-3xl px-4 py-10 mt-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-600">
          Want to work together? Get in touch with me via email at: <span className="font-bold">example@example.com</span>
        </p>
      </section>
    </div>
  );
}
