import { timeline, distros } from "../data/BlogData";
import mascot from "../assets/tug-mascot.png";

export default function BlogPage() {
    return (
        <div className="min-h-screen container-custom pt-24 lg:pt-32 pb-16 relative">
            <div className="max-w-6xl mx-auto">

                {/* ====================== HERO SECTION ====================== */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 mb-20 px-2">

                    {/* LEFT IMAGE */}
                    <div className="w-auto flex md:justify-center">
                        <img
                            src={mascot}
                            alt="Linux Mascot"
                            className="
                                w-[130px]
                                md:w-[150px]
                                lg:w-[170px]
                                object-contain
                            "
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="w-full md:w-fit text-center md:text-left self-center">
                        <h1 className="text-3xl font-bold text-gray-800 leading-tight">
                            Selamat Datang di Dunia Linux
                        </h1>

                        <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
                            Artikel dan rangkuman tentang sejarah, distribusi populer,
                            serta tips dan tutorial seputar Linux dan open-source.
                        </p>
                    </div>

                </div>

                {/* ====================== TIMELINE SECTION ====================== */}
                <div className="mb-20">
                    <h2 className="text-center text-2xl font-bold mb-10 text-gray-800">
                        Sejarah Linux
                    </h2>

                    <div className="relative">

                        {/* Vertical line (desktop only) */}
                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-orange-100" />

                        <div className="space-y-12">
                            {timeline.map((item, idx) => {
                                const left = idx % 2 === 0;

                                return (
                                    <div
                                        key={item.year}
                                        className="flex flex-col md:flex-row items-center group relative"
                                    >

                                        {/* LEFT SIDE CARD */}
                                        <div
                                            className={`md:w-1/2 w-full ${
                                                left
                                                    ? "md:pr-12 md:justify-end flex"
                                                    : "md:pl-12"
                                            }`}
                                        >
                                            {left && (
                                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 w-full max-w-md border-l-4 border-orange-500">
                                                    <div className="text-orange-600 text-xl font-bold mb-1">
                                                        {item.year}
                                                    </div>
                                                    <div className="text-xl font-bold text-gray-800">
                                                        {item.title}
                                                    </div>
                                                    <p className="mt-2 text-gray-600 leading-relaxed">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* TIMELINE MARKER */}
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                                            <div className="w-4 h-4 rounded-full bg-white border-4 border-orange-500 shadow-lg group-hover:scale-150 transition-transform duration-300" />
                                        </div>

                                        {/* RIGHT SIDE CARD */}
                                        <div
                                            className={`md:w-1/2 w-full ${
                                                !left
                                                    ? "md:pl-12"
                                                    : "md:pr-12 md:hidden"
                                            }`}
                                        >
                                            {!left && (
                                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-md border-l-4 border-orange-500">
                                                    <div className="text-orange-600 text-xl font-bold mb-1">
                                                        {item.year}
                                                    </div>
                                                    <div className="text-xl font-bold text-gray-800">
                                                        {item.title}
                                                    </div>
                                                    <p className="mt-2 text-gray-600 leading-relaxed">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ====================== DISTRO SECTION ====================== */}
                <div className="mb-8">
                    <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">
                        Distribusi Linux Populer
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
                        {distros.map((d) => (
                            <a
                                key={d.name}
                                href={d.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col relative">

                                    {/* HEADER */}
                                    <div
                                        className={`h-32 bg-linear-to-br ${d.gradient} flex items-center justify-center relative overflow-hidden`}
                                    >

                                        {/* Glow Animation */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white opacity-20 rounded-full blur-xl scale-0 group-hover:scale-[2.5] transition-transform duration-700 ease-out pointer-events-none" />
                                        </div>

                                        {/* Logo */}
                                        <div className="relative z-10 bg-white p-3 rounded-full shadow-lg w-16 h-16 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out">
                                            <img
                                                src={d.logo}
                                                alt={d.name}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-6 grow flex flex-col justify-between text-center">
                                        <div>
                                            <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                                                {d.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {d.desc}
                                            </p>
                                        </div>

                                        <div className="mt-6">
                                            <span className="text-sm font-semibold text-orange-500 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                                                Kunjungi Situs →
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
