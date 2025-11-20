export default function BlogPage() {
    const timeline = [
        {
            year: "1991",
            title: "Linux Kernel",
            text: "Linus Torvalds merilis kernel Linux pertama kali — awal berkembangnya ekosistem open-source.",
        },
        {
            year: "1993",
            title: "Distribusi Awal",
            text: "Munculnya beberapa distribusi awal seperti Slackware dan Debian yang membantu penyebaran Linux.",
        },
        {
            year: "2004",
            title: "Ubuntu",
            text: "Ubuntu diluncurkan, menargetkan kemudahan penggunaan untuk pengguna desktop.",
        },
        {
            year: "2008",
            title: "Linux di Server",
            text: "Linux semakin populer di server dan cloud, menjadi andalan infrastruktur modern.",
        },
    ];

    const distros = [
        { name: "Ubuntu", desc: "Ramai dipakai, cocok untuk pemula.", color: "bg-orange-500" },
        { name: "Debian", desc: "Stabil dan handal untuk server.", color: "bg-rose-500" },
        { name: "Fedora", desc: "Cepat mengadopsi teknologi terbaru.", color: "bg-sky-500" },
        { name: "Arch Linux", desc: "Ringan dan cocok untuk pengguna mahir.", color: "bg-indigo-500" },
    ];

    return (
        <div className="min-h-screen container-custom pt-24 lg:pt-32 pb-16">
            <div className="max-w-6xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold">Selamat Datang di Dunia Linux</h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Artikel dan rangkuman tentang sejarah, distribusi populer, serta
                        tips dan tutorial seputar Linux dan open-source.
                    </p>
                </div>

                {/* Timeline */}
                <div className="mb-16">
                    <h2 className="text-center text-xl font-semibold mb-8">Sejarah Linux</h2>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-red-200" />

                        <div className="space-y-12">
                            {timeline.map((item, idx) => {
                                const left = idx % 2 === 0;
                                return (
                                    <div key={item.year} className="flex flex-col md:flex-row items-center">
                                        <div className={`md:w-1/2 w-full ${left ? "md:pr-8 md:justify-end flex" : "md:pl-8"}`}>
                                            {left && (
                                                <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
                                                    <div className="text-sm text-orange-500 font-semibold">{item.year}</div>
                                                    <div className="text-lg font-bold mt-2">{item.title}</div>
                                                    <p className="mt-2 text-gray-600">{item.text}</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="w-12 flex items-center justify-center">
                                            <div className="w-4 h-4 rounded-full bg-white border-4 border-orange-200 shadow" />
                                        </div>

                                        <div className={`md:w-1/2 w-full ${!left ? "md:pl-8" : "md:pr-8 md:hidden"}`}>
                                            {!left && (
                                                <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
                                                    <div className="text-sm text-orange-500 font-semibold">{item.year}</div>
                                                    <div className="text-lg font-bold mt-2">{item.title}</div>
                                                    <p className="mt-2 text-gray-600">{item.text}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Distribusi */}
                <div className="mb-8">
                    <h2 className="text-center text-xl font-semibold mb-6">Distribusi Linux Populer</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {distros.map((d) => (
                            <div key={d.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className={`h-28 flex items-center justify-center ${d.color} text-white font-bold text-lg`}>
                                    {d.name}
                                </div>
                                <div className="p-4">
                                    <p className="text-gray-600">{d.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}