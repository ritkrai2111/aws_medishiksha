import { Link } from "lucide-react";
import React from "react";

const CreateCourseForm = () => {
  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name Your Course</h1>
        <p className="text-sm">
          What would you like to name your course, Don&apos;t worry you can
          change this later!
        </p>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text text-lg">Course Title</span>
          </label>
          <input
            type="text"
            placeholder="eg: Introduction to Paramedico"
            className="input input-bordered bg-white border-black w-full max-w-xs"
          />
        </div>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text text-lg">Course Category</span>
          </label>
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="bg-white border-black btn m-1"
            >
              Add categories to your course
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white border-black rounded-box w-52"
            >
              <li>
                <div className="flex  justify-between">
                  AYUSH
                  <input type="checkbox" className="checkbox" />
                </div>
              </li>
              <li>
                <div className="flex  justify-between">
                  MBBS/MD
                  <input type="checkbox" className="checkbox" />
                </div>
              </li>
              <li>
                <div className="flex  justify-between">
                  PARAMEDICS
                  <input type="checkbox" className="checkbox" />
                </div>
              </li>
              <li>
                <div className="flex  justify-between">
                  NON MEDICO
                  <input type="checkbox" className="checkbox" />
                </div>
              </li>
              <li>
                <div className="flex  justify-between">
                  Integrative medicine
                  <input type="checkbox" className="checkbox" />
                </div>
              </li>
              <li>
                <div className="flex  justify-between">
                  Emergency
                  <input type="checkbox" className="checkbox" />
                </div>
              </li>
              <li>
                <div className="flex  justify-between">
                  Palliative care
                  <input type="checkbox" className="checkbox" />
                </div>
              </li>
              <li>
                <div className="flex  justify-between">
                  Level 1
                  <input type="checkbox" className="checkbox" />
                </div>
              </li>
              <li>
                <div className="flex  justify-between">
                  Level 2
                  <input type="checkbox" className="checkbox" />
                </div>
              </li>
              <li>
                <div className="flex  justify-between">
                  Level 3
                  <input type="checkbox" className="checkbox" />
                </div>
              </li>
              <button className="btn btn-sm bg-yellow-400">Save Changes</button>
            </ul>
          </div>
        </div>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text text-lg">Course Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered border-black bg-white h-24"
            placeholder="eg: This course aims to provide advanced information about paramedico"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text text-lg">Set Course Price</span>
          </label>
          <input
            type="text"
            placeholder="eg: 2499"
            className="input input-bordered bg-white border-black w-full max-w-xs"
          />
        </div>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text text-lg">Set Course Thumbnail</span>
          </label>
          <input
            type="file"
            className="file-input file-input-ghost bg-white border-black w-full max-w-xs"
          />
        </div>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text text-lg">Upload Course Video Here</span>
          </label>
          <input
            type="file"
            className="file-input file-input-ghost bg-white border-black w-full max-w-xs"
          />
        </div>
        <div className="flex items-center mt-4 gap-x-2">
          <button className="btn bg-red-500">Cancel</button>
          <button className="btn bg-yellow-400">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseForm;
