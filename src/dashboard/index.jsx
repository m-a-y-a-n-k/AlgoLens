import React, { useEffect, useState } from "react"
import useWindowDimensions from "common/helpers/dimensions"
import constants from "common/helpers/constants"
import Placeholder from "common/components/Placeholder"
import "./Dashboard.css"

export default function Dashboard() {
  const windowDimensions = useWindowDimensions()
  const isDesktop = windowDimensions.width > 768

  const knowMoreText = `${constants.BRAND_NAME} is an excellent and proud platform designed by
  strongly passionate Computer Science alumni of Delhi
  Technological University, Delhi, India to bridge the gap
  between new comers in Computer Science and those who are
  masters of the field by acting as a solution that helps both
  in learning and teaching related concepts. It is an effort in
  the direction of improving fundamentals of those who want to
  pursue Computer Science or who use it on a daily basis in
  their life. Primarily for Programming Professionals,
  Professors and Students from various institutions across the
  globe.`

  const [siteLogoSrc, setSiteLogoSrc] = useState("")

  useEffect(() => {
    const loadBrandLogo = async () => {
      const logoSrc = await import(`common/assets/AlgoLens.jpg`).then(
        (module) => module.default
      )
      setSiteLogoSrc(logoSrc)
    }
    loadBrandLogo()
  }, [])

  return (
    <div className="dashboard-root">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="card dashboard-card">
              <div className="card-header dashboard-header">
                <div className="d-flex align-items-center">
                  <div className="dashboard-avatar">AL</div>
                  <div className="ms-3">
                    <h5 className="mb-0 text-primary">Meet The Platform</h5>
                    <small className="text-muted">
                      Initiative since Nov 2019
                    </small>
                  </div>
                </div>
              </div>
              <div className="dashboard-img-bg">
                {siteLogoSrc ? (
                  <img
                    src={siteLogoSrc}
                    title={constants.BRAND_NAME}
                    className="card-img-top dashboard-logo"
                    alt={constants.BRAND_NAME}
                    loading="eager"
                    width="320"
                    height="320"
                  />
                ) : (
                  <Placeholder variant="rect" height={320} width={"100%"} />
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  {constants.BRAND_NAME} stands for Computer Science
                  Visualizations
                </h5>
                {isDesktop && (
                  <div className="dashboard-paper">
                    <p className="card-text">{knowMoreText}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
