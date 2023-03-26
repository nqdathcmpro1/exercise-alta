import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { courseSelector } from "./slice/courseSlice";
import { getCoursesThunk } from "./thunks/courseThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getAllCourses = async () => {
      await dispatch(getCoursesThunk());
    };
    getAllCourses();
  }, [dispatch]);

  const getCoursesSelector = useAppSelector(courseSelector);

  return (  
    <div className="App">
      <div className="w-full min-h-screen bg-black text-white flex flex-col gap-10 items-center">
        <p className="text-6xl font-bold text-center">Courses</p>
        <div className="w-1/2 text-white flex flex-col items-center gap-5">
          {getCoursesSelector.isLoading ? (
            <p className="text-xl">Loading...</p>
          ) : (
            getCoursesSelector.courses?.map((course) => (
              <div
                className={`w-full h-fit border-4 rounded-xl p-3 ${
                  course.available
                    ? "border-green-400 text-green-400"
                    : "border-red-500 text-red-500"
                }`}
              >
                <p className="text-2xl font-bold">{course.name}</p>
                <p className="text-xl">
                  Price: {course.pricePerMonth}VND per Month
                </p>
                <p className="text-xl">Number of lessons: {course.lessons}</p>
                <p className="text-xl">
                  Students per class: {course.studentPerClass}
                </p>
                <p className="text-lg">
                  {course.available ? "Availble" : "Out of slots"}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
