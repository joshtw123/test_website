const COURSES = [
	{
		id: "course-1",
		course_title: "Japanese Vegetarian",
		course_subtitle: "Five week course",
		course_description: "A five week introduction to traditional Japanese vegetarian meals, teaching you a selection of rice and noodle dishes.",
		image: "images/bok-choi.jpg",
		image_title: "Bok Choi"
	},
	{
		id: "course-2",
		course_title: "Sauces Masterclass",
		course_subtitle: "One day workshop",
		course_description: "An intensive one-day course looking at how to create the most delicious sauces for use in a range of Japanese cookery.",
		image: "images/teriyaki.jpg",
		image_title: "Teriyaki Sauce"
	},
	{
		id: "course-3",
		course_title: "Gyoza Japanese Dumplings",
		course_subtitle: "Half a day workshop",
		course_description: "A practical course looking at how to make dumplings that you can pan-fry, stem, boil, deep fry, or simply add a couple to your noodle soup!",
		image: "images/gyoza.jpg",
		image_title: "Gyoza Dumplings"
	},
	{
		id: "course-4",
		course_title: "Sushi at Home",
		course_subtitle: "Four weeks course",
		course_description: "These classes are a fantastic introduction to sushi rolling. The focus of the class is on �Maki Sushi�. Maki means roll and you will learn four different type of Maki sushi in this class. ",
		image: "images/suhi.jpg",
		image_title: "Sushi"
	},
	{
		id: "course-5",		
		course_title: "Learn All about Sashimi",
		course_subtitle: "5 days",
		course_description: "Learn deeper techniques of sashimi preparation to making a platter in just five days.",
		image: "images/sashimi.jpg",
		image_title: "Sashimi"
	},
 ];

/***********************************************************************************************************************
 * TASK 1
 **********************************************************************************************************************/

/**
 * Creates the HTML required for displaying a course.
 *
 * This function is intended to be used for displaying a course
 * in the homepage.
 *
 * @param	{object}	course	The course to be displayed following the properties of objects in the COURSES array
 *
 * @return	{object}	Returns the HTML as jQuery element.
 */
 
function createCourseHTML(course) {
	// Create an article element to hold all course's content
	let courseHTML = $("<article>");

	// Create a figure element for displaying the course's image
  let courseImages = $("<figure>");
  courseImages.append('<img src="' + course.image + '"' + 'alt="' + course.image_title + '"/>')
  courseImages.append("<figcaption>" + course.image_title + "</figcaption>")
  courseImages.append("</figure>")

	// Create a heading element for displaying the course's title
  let courseTitle = $("<h2>");
  courseTitle.append(course.course_title)
  courseTitle.append("</h2>")
  
	// Create a heading element for displaying the course's subtitle
  let courseSubtitle = $("<h3>");
  courseSubtitle.append(course.course_subtitle)
  courseSubtitle.append("</h3>")

	// Create a paragraph element for displaying the course's description
  let description = $("<p>");
  description.append(course.course_description)
  description.append("</p>")
  
  courseHTML.append(courseImages);
  courseHTML.append(courseTitle);
  courseHTML.append(courseSubtitle);
  courseHTML.append(description);
  courseHTML.append("</article>");

	return courseHTML;
}

/***********************************************************************************************************************
 * END OF TASK 1
 **********************************************************************************************************************/

/**
 * Displays an array of courses.
 *
 * This function is intended to be used for displaying a list of courses
 * in the homepage either when the page loads or after a search query.
 *
 * @param	{object}	courses	An array of courses following the properties of objects in the COURSES array
 *
 */
function displayCourses(courses) {
	let coursesList = $("#coursesList");

	// Empty previous courses
	coursesList.empty();
	for(let course of courses) {
		let courseHTML = createCourseHTML(course);
		coursesList.append(courseHTML);
	}
}

// Display a subset of courses when the page loads
$(document).ready(function(){
	let mainCourses = [COURSES[0], COURSES[1]];

	displayCourses(mainCourses);
});

/***********************************************************************************************************************
 * TASK 2
 **********************************************************************************************************************/

/**
 * Event handler for displaying search results
 *
 * This function handles the user's action of searching for courses.
 *
 */
function search() {
		// Get the query string
		let query = $("#searchText").val();

		// Standardize the query (you must do the same when comparing this value against the course_title string)
		query = query.toLowerCase().trim();

		// Hold the matched queries
		let matches = [];

		// Search for courses matching the query string using the course_title property
		for (let course of COURSES) {
			if ((course.course_title.toLowerCase()).includes(query)) {
				matches.push(course)
			}
		}


		// Add each matched course to the matches array

		// Display all matched courses
		displayCourses(matches);
}

/***********************************************************************************************************************
 * END OF TASK 2
 **********************************************************************************************************************/
