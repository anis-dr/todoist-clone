import { firebase } from "../firebase";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";
import { useState } from "react";

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();
  console.log(projectId);
  const { setProjects } = useProjectsValue();

  const addProject = () => {
    projectName &&
      firebase
        .firestore()
        .collection("projects")
        .add({
          projectId,
          name: projectName,
          userId: "6z7uyWuOBCamMylkS88U",
        })
        .then(() => {
          setProjects([]);
          setProjectName("");
          setShow(false);
        });
  };

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            aria-label="Cancel adding project"
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setShow(false);
            }}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
      <div
        aria-label="Add Project"
        data-testid="add-project-action"
        onClick={() => setShow(!show)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setShow(!show);
        }}
        role="button"
        tabIndex={0}
      >
        <span className="add-project__plus">+</span>
        <span className="add-project__text">Add Project</span>
      </div>
    </div>
  );
};
