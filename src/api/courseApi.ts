import { Course } from "./../interface/index";
import { firestore } from "./../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getCourses = async () => {
  const coursesSnapshot = await getDocs(collection(firestore, "courses"));

  const courses: Course[] = [];

  coursesSnapshot.forEach((course) => {
    courses.push({
      id: course.id,
      name: course.data().name,
      available: course.data().available,
      lessons: course.data().lessons,
      pricePerMonth: course.data().pricePerMonth,
      studentPerClass: course.data().studentPerClass,
    });
  });
  return courses;
};

