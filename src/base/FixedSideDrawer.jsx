import React, { useState } from "react"
import "./SideDrawer.css"
import { pages } from "routing/base/routes"

const SideDrawer = () => {
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
      <div className={`side-drawer ${isOpen ? "show" : "hide"}`}>
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
