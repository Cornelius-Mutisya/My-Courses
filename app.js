const courseName = document.querySelector("#input-course-name");
const courseRating = document.querySelector("#input-course-rating");
const addCourseBtn = document.querySelector("#btn-add");
const courseList = document.querySelector("#course-list");
const alertCtrl = document.querySelector("ion-alert-controller");

addCourseBtn.addEventListener("click", () => {
  const enteredCourseName = courseName.value;
  const enteredCourseRating = courseRating.value;

  if (
    enteredCourseName.trim().length <= 0 ||
    enteredCourseRating.trim().length <= 0 ||
    enteredCourseRating < 1 ||
    enteredCourseRating > 5
  ) {
    alertCtrl
      .create({
        header: "Invalid Input",
        message: "Please enter a valid course name and rating",
        buttons: ["Okay"],
      })
      .then((alertEl) => alertEl.present());
    return;
  }

  const newItem = document.createElement("ion-item");
  newItem.innerHTML = `<strong>${enteredCourseName}:</strong>&nbsp;${enteredCourseRating}/5`;

  courseList.appendChild(newItem);

  courseName.value = "";
  courseRating.value = "";
});
