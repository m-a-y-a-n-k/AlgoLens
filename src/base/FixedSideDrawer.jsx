import React, { useRef, useState } from "react"
import "./SideDrawer.css"
import { pages } from "routing/base/routes"
import useOutsideClick from "common/hooks/useOutsideClick"

const SideDrawer = () => {
  const sideDrawerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [openSections, setOpenSections] = useState({})

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const toggleSection = (topic) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [topic]: !prevState[topic],
    }))
  }

  useOutsideClick(sideDrawerRef, () => {
    setIsOpen(false)
  })

  return (
    <div className="header">
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleDrawer}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div
        ref={sideDrawerRef}
        className={`side-drawer ${isOpen ? "show" : "hide"}`}
      >
        {pages.map((section) => (
          <div key={section.topic}>
            <h3 onClick={() => toggleSection(section.topic)}>
              {openSections[section.topic] ? "-" : "+"} {section.label}
            </h3>
            {openSections[section.topic] && (
              <ul>
                {section.pages.map((subpage) => (
                  <li key={subpage.topic}>
                    <div
                      className="route"
                      onClick={() => {
                        window.location.hash = `/${section.topic}/${subpage.topic}`
                        toggleDrawer()
                      }}
                    >
                      {subpage.label}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideDrawer
