export default function HomePage() {
  return (
    <div className="pb-6">
      {/* 검색, 프리미엄, 프로필*/}
      <div className="sticky top-0 h-16 bg-(--bg-elev-1)]/90 backdrop-blur z-40 flex items-center justify-between px-6">
        {/* Navigation Arrows -.. 아직 기능 추가 안함*/}
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-black/50 text-(--text-secondary)] grid place-items-center">
            {"<"}
          </button>
          <button className="w-8 h-8 rounded-full bg-black/50 text-(--text-secondary)] grid place-items-center">
            {">"}
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-64 h-8 rounded-full bg-[#2a2a2a] px-4 text-sm placeholder:text-(--text-secondary) text-white outline-none"
            />
          </div>
          <button className="h-8 rounded-full bg-white text-black text-sm font-bold px-4 hover:scale-[1.03]">
            Explore Premium
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-700 text-white text-sm grid place-items-center">
            B
          </button>
        </div>
      </div>

      <div className="container-app pt-6">
        {" "}
        {/* 콘텐츠 폭 제한 여기서 해야하나용.. */}
        {/* Banner (Christmas Pop 출력 확인) */}
        <div className="bg-[#8b2a3c] h-60 w-full rounded-lg overflow-hidden relative p-6 flex items-end mb-6">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.scdn.co/image/ab67616d0000b273410a51c4e7230058b725c4e7')",
            }}
          >
            {/* Artist Image*/}
            <img
              src="https://i.scdn.co/image/ab67616d00001e02de84adf0e48248ea2d769c3e"
              alt="Artist"
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 object-contain"
            />
          </div>
          <div className="relative z-10 text-white">
            <div className="text-sm font-semibold mb-2 flex items-center gap-2">
              <span className="bg-(--color-brand) text-black px-2 py-0.5 rounded-full">
                LISTEN ON
              </span>
              <span className="text-white">Sponsored</span>
            </div>
            <h2 className="text-5xl font-extrabold">Christmas Pop</h2>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Discover picks for you</h1>
            <button className="text-sm text-(--text-secondary) hover:underline">
              Show all
            </button>
          </div>

          {/* Nav pills (All, Music, Podcasts) */}
          <div className="flex gap-2 mb-4">
            <button className="px-3 py-1 rounded-full bg-white text-black text-sm font-semibold">
              All
            </button>
            <button className="px-3 py-1 rounded-full bg-[#2a2a2a] text-white text-sm hover:bg-[#3e3e3e]">
              Music
            </button>
            <button className="px-3 py-1 rounded-full bg-[#2a2a2a] text-white text-sm hover:bg-[#3e3e3e]">
              Podcasts
            </button>
          </div>

          {/* 플리 카드 만들기 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* 카드 1*/}
            <div className="group cursor-pointer select-none">
              <div className="relative overflow-hidden rounded-md bg-(--bg-elev-2) p-4 hover:bg-(--bg-elev-2)/80 transition">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png"
                  alt="1989 - Taylor Swift"
                  className="aspect-square w-full object-cover rounded-md shadow-lg"
                />
                <button
                  className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-(--color-brand) text-black
                               opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all grid place-items-center"
                  aria-label="재생"
                >
                  ▶
                </button>
              </div>
              <div className="mt-3">
                <div className="text-[16px] font-semibold line-clamp-1">
                  Style
                </div>
                <div className="text-[14px] text-(--text-secondary) line-clamp-2">
                  Taylor Swift
                </div>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="group cursor-pointer select-none">
              <div className="relative overflow-hidden rounded-md bg-(--bg-elev-2) p-4 hover:bg-(--bg-elev-2)/80 transition">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a7/Ros%C3%A9_-_Rosie.png"
                  alt="Rosie"
                  className="aspect-square w-full object-cover rounded-md shadow-lg"
                />
                <button
                  className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-(--color-brand) text-black
                               opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all grid place-items-center"
                  aria-label="재생"
                >
                  ▶
                </button>
              </div>
              <div className="mt-3">
                <div className="text-[16px] font-semibold line-clamp-1">
                  Rosie
                </div>
                <div className="text-[14px] text-(--text-secondary) line-clamp-2">
                  Rose
                </div>
              </div>
            </div>

            {/* 카드 3 */}
            <div className="group cursor-pointer select-none">
              <div className="relative overflow-hidden rounded-md bg-(--bg-elev-2) p-4 hover:bg-(--bg-elev-2)/80 transition">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/7/7e/Ariana_Grande_-_Eternal_Sunshine.png"
                  alt="Eternal sunshine"
                  className="aspect-square w-full object-cover rounded-md shadow-lg"
                />
                <button
                  className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-(--color-brand) text-black
                               opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all grid place-items-center"
                  aria-label="재생"
                >
                  ▶
                </button>
              </div>
              <div className="mt-3">
                <div className="text-[16px] font-semibold line-clamp-1">
                  Eternal sunshine
                </div>
                <div className="text-[14px] text-(--text-secondary) line-clamp-2">
                  Ariana Grande
                </div>
              </div>
            </div>

            {/* 카드 4 */}
            <div className="group cursor-pointer select-none">
              <div className="relative overflow-hidden rounded-md bg-(--bg-elev-2) p-4 hover:bg-(--bg-elev-2)/80 transition">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/2/2e/Jennie_%E2%80%93_Ruby_%28album_cover%29.png"
                  alt="Love Hangover"
                  className="aspect-square w-full object-cover rounded-md shadow-lg"
                />
                <button
                  className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-(--color-brand) text-black
                               opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all grid place-items-center"
                  aria-label="재생"
                >
                  ▶
                </button>
              </div>
              <div className="mt-3">
                <div className="text-[16px] font-semibold line-clamp-1">
                  Love Hangover (feat. DOMINIC FIKE)
                </div>
                <div className="text-[14px] text-(--text-secondary) line-clamp-2">
                  JENNIE, Dominic Fike
                </div>
              </div>
            </div>
          </div>

          {/* Recently Played Section */}
          <div className="flex justify-between items-center pt-6">
            <h2 className="text-2xl font-bold">Recently played</h2>
            <button className="text-sm text-(--text-secondary) hover:underline">
              Show all
            </button>
          </div>

          {/* Recently Played Card*/}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <div className="group cursor-pointer select-none">
              <div className="relative overflow-hidden rounded-md bg-(--bg-elev-2) p-4 hover:bg-(--bg-elev-2)/80 transition">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f8/d0/e2/f8d0e2bb-134f-56a9-bf68-d4864dd421b8/886449300099.jpg/600x600bf-60.jpg"
                  alt="take me where your heart is"
                  className="aspect-square w-full object-cover rounded-md shadow-lg"
                />
                <button
                  className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-(--color-brand) text-black
                                       opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all grid place-items-center"
                  aria-label="재생"
                >
                  ▶
                </button>
              </div>
              <div className="mt-3">
                <div className="text-[16px] font-semibold line-clamp-1">
                  take me where your heart is
                </div>
                <div className="text-[14px] text-(--text-secondary) line-clamp-2">
                  Q
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
