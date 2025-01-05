import React, { lazy, useState } from "react"
import PropTypes from "prop-types"

const LightBox = lazy(() => import("common/components/LightBox"))

function ScrollTop(props) {
  const { children, window } = props
  const [trigger, setTrigger] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setTrigger(true)
      } else {
        setTrigger(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor")
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div
      onClick={handleClick}
      style={{
        display: trigger ? "flex" : "none",
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        backgroundColor: "#f50057",
        color: "white",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.node.isRequired,
}

function Copyright({ brandName }) {
  return (
    <div style={{ textAlign: "center", padding: "1rem", color: "white" }}>
      {"Copyright © "}
      <a
        href={`/${brandName}`}
        style={{
          color: "#25d4eb",
          textDecoration: "none",
        }}
      >
        {brandName}
      </a>{" "}
      {new Date().getFullYear()}.
    </div>
  )
}

Copyright.propTypes = {
  brandName: PropTypes.string.isRequired,
}

export default function StickyFooter(props) {
  const [dialogConfig, setDialogConfig] = useState(null)

  const whyWeBuilt = `Your brand is built to provide a platform for visualizing and explaining various data structures and algorithms in the vast field of Computer Science.`

  const bugReportDialogConfig = {
    title: "Report a Bug",
    content: (
      <div>
        <h3>Provide your description</h3>
        <p>Put your content here for plug and play.</p>
      </div>
    ),
    onClose: () => setDialogConfig(null),
  }

  return (
    <>
      <footer
        style={{
          padding: "1rem",
          backgroundColor: "#333",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <Copyright brandName="YourBrand" />
        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.1rem",
            textAlign: "center",
          }}
        >
          {whyWeBuilt}
        </p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            margin: "10px auto",
            cursor: "pointer",
            borderRadius: "4px",
          }}
          onClick={() => setDialogConfig(bugReportDialogConfig)}
        >
          Report A Bug
        </button>
        <ScrollTop {...props}>
          <span>&uarr;</span>
        </ScrollTop>
      </footer>
      {dialogConfig && <LightBox {...dialogConfig} />}
    </>
  )
}
