import { workExperiences, languages, publicationsList } from "../constants/index"

const isScrollable = workExperiences.length > 3

// Desktop + tablet: single column
const LanguageList = () => (
  <ul className="list-none m-0 p-0 flex flex-col gap-2">
    {languages.map((lang, index) => (
      <li key={index} className="group flex items-center gap-2 cursor-default">
        <div className="tech-logo techstack-logo shrink-0 xl2:w-10 xl2:h-10 xl2:p-2">
          <img src={lang.path} alt={lang.label} className="w-4 h-4 xl2:w-6 xl2:h-6 object-contain" />
        </div>
        <span className="text-base leading-5 whitespace-nowrap text-white-600 transition-colors duration-200 group-hover:text-white cursor-text">
          {lang.label}: {lang.sublabel}
        </span>
      </li>
    ))}
  </ul>
)

// Mobile: 2-column grid, column-flow so order reads down each column
const LanguageListMobile = () => (
  <ul
    className="list-none m-0 p-0 gap-2"
    style={{
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: `repeat(${Math.ceil(languages.length / 2)}, auto)`,
    }}
  >
    {languages.map((lang, index) => (
      <li key={index} className="group flex items-center gap-2 cursor-default">
        <div className="tech-logo techstack-logo shrink-0">
          <img src={lang.path} alt={lang.label} className="w-4 h-4 object-contain" />
        </div>
        <span className="text-base leading-5 whitespace-nowrap text-white-600 transition-colors duration-200 group-hover:text-white cursor-text">
          {lang.label}: {lang.sublabel}
        </span>
      </li>
    ))}
  </ul>
)

const PublicationsList = () => (
  <ul className="list-disc pl-4 flex flex-col gap-3 marker:text-white-600">
    {publicationsList.map((pub, index) => (
      <li key={index} className="text-base leading-5 text-white-600">
        {"\u201C"}
        <a
          href={pub.link}
          target="_blank"
          rel="noreferrer"
          className="underline text-white-600 hover:text-white transition-colors duration-300"
        >
          {pub.title}
        </a>
        {"\u201D"}, in {pub.published}
      </li>
    ))}
  </ul>
)

const WorkList = ({ className = "", style = {} }) => (
  <div className={`sm:px-5 px-2.5 ${className}`} style={style}>
    {workExperiences.map((item, index) => (
      <div key={index} className="work-content_container group">
        <div className="flex flex-col h-full justify-start items-center py-2">
          <div className="work-content_logo">
            <img className="w-full h-full" src={item.icon} alt="" />
          </div>
          <div className="work-content_bar" />
        </div>
        <div className="sm:p-5 px-2.5 py-5">
          <p className="font-bold text-white-800">{item.name}</p>
          <p className="text-base mb-5 text-white-600">{item.pos} -- {item.duration}</p>
          <p className="text-base leading-5 text-white-600 group-hover:text-white transition-colors ease-in-out duration-500">{item.title}</p>
        </div>
      </div>
    ))}
  </div>
)

const Experience = () => {
  return (
    <section id="experience" className="c-space my-20 scroll-mt-20 sm2:scroll-mt-25 xl2:scroll-mt-22">

      {/* ── DESKTOP layout (≥ xl2 / 1100px) ── */}
      <div
        className="hidden xl2:grid gap-3"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "auto 1fr 1fr",
          minHeight: "680px",
        }}
      >
        {/* Title — full width */}
        <div className="col-span-4 grid-container !p-7 !gap-0 justify-center">
          <p className="section-label-horizontal">My Work Experience</p>
        </div>

        {/* Languages — col 1, row 2 */}
        <div className="col-start-1 row-start-2 grid-container">
          <p className="grid-headtext">Languages</p>
          <LanguageList />
        </div>

        {/* Publications — col 1, row 3 */}
        <div className="col-start-1 row-start-3 grid-container">
          <p className="grid-headtext">Publications</p>
          <PublicationsList />
        </div>

        {/* Work content — cols 2-4, rows 2-3 */}
        <div className={`col-start-2 col-span-3 row-start-2 row-span-2 work-content ${isScrollable ? "relative overflow-hidden" : ""}`}>
          {isScrollable ? (
            <div className="absolute inset-0 overflow-y-auto work-scrollbar sm:px-5 px-2.5 py-5">
              {workExperiences.map((item, index) => (
                <div key={index} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>
                    <div className="work-content_bar" />
                  </div>
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-base mb-5 text-white-600">{item.pos} -- {item.duration}</p>
                    <p className="text-base leading-5 text-white-600 group-hover:text-white transition-colors ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <WorkList className="sm:py-10 py-5" />
          )}
        </div>
      </div>

      {/* ── TABLET layout (sm2 ≤ viewport < xl2 / 680px–1100px) ── */}
      <div className="hidden sm2:flex xl2:hidden flex-col gap-3">

        <div className="grid-container !p-7 !gap-0">
          <p className="section-label-horizontal">My Work Experience</p>
        </div>

        <div className="work-content w-full">
          {isScrollable ? (
            <WorkList
              className="overflow-y-auto work-scrollbar py-5"
              style={{ maxHeight: "480px" }}
            />
          ) : (
            <WorkList className="sm:py-10 py-5" />
          )}
        </div>

        {/* Tablet: Languages takes 1/3, Publications takes 2/3 */}
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1 grid-container !py-5 !px-5 !gap-2">
            <p className="grid-headtext !mb-0">Languages</p>
            <LanguageList />
          </div>
          <div className="col-span-2 grid-container !py-5 !px-5 !gap-2">
            <p className="grid-headtext !mb-0">Publications</p>
            <PublicationsList />
          </div>
        </div>

      </div>

      {/* ── MOBILE layout (< sm2 / 680px) ── */}
      <div className="flex sm2:hidden flex-col gap-3">

        <div className="grid-container !p-7 !gap-0">
          <p className="section-label-horizontal">My Work Experience</p>
        </div>

        <div className="work-content w-full">
          {isScrollable ? (
            <WorkList
              className="overflow-y-auto work-scrollbar py-5"
              style={{ minHeight: "320px", maxHeight: "420px" }}
            />
          ) : (
            <WorkList className="py-5" />
          )}
        </div>

        {/* Mobile: Languages in 2-column grid, column-flow order */}
        <div className="grid-container !gap-2">
          <p className="grid-headtext !mb-0">Languages</p>
          <LanguageListMobile />
        </div>

        <div className="grid-container !gap-2">
          <p className="grid-headtext !mb-0">Publications</p>
          <PublicationsList />
        </div>

      </div>

    </section>
  )
}

export default Experience
