import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PackageContext } from "../contexts";

const PackageInfo = () => {
  const { platform, name } = useParams();
  const { activeProject, fetchActiveProject } = useContext(PackageContext);

  useEffect(() => {
    if (!activeProject && platform && name) fetchActiveProject(platform, name);
  }, [platform, name]);

  if (!activeProject)
    // in real life I'd use a loading state machine here
    return (
      <p>
        Could not locate package {platform} {name}
      </p>
    );
  return (
    <>
      <h1>
        {platform?.toUpperCase()} {name?.toUpperCase()}
      </h1>
      <p>{activeProject.description}</p>
      <a href={activeProject.homepage}>{activeProject.homepage}</a>
      <p>License: {activeProject.licenses}</p>
      <p>Dependency count: {activeProject.dependents_count}</p>
      <p>Versions:</p>
      <ul>
        {activeProject?.versions?.map((v) => (
          <li>
            {v?.number} - {v?.published_at}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PackageInfo;
