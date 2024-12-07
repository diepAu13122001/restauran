import Nav from "../component/nav.js";
import Footer from "../component/footer.js";
import Login from "./login.js";
import app from "../app.js";
import { database } from "../data/firebase-app.js";
import {
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import Menu from "./menu.js";

export default class Home {
  constructor() {
    document.title = "Home";
    this.nav = new Nav();
    this.footer = new Footer();
  }
  async render(mainContainer) {
    // add nav
    this.nav.render(mainContainer);
    const main = document.createElement("main");

    // Create section element
    const section1 = document.createElement("section");
    section1.id = "home";

    // Create div element
    const div = document.createElement("div");

    // Create image container div
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Create img element
    const img = document.createElement("img");
    img.src =
      "https://vcdn-suckhoe.vnecdn.net/2022/03/07/thuc-pham-ung-thu-vu-5176-1646638824.jpg";
    img.alt = "...";
    img.style.width = "100%";
    img.style.height = "auto";

    // Create h1 element
    const h1 = document.createElement("h1");
    h1.classList.add("m1");
    h1.textContent = "Fooday";

    // Append img and h1 to image container
    imageContainer.appendChild(img);
    imageContainer.appendChild(h1);

    // Append image container to div
    div.appendChild(imageContainer);

    // Append div to section
    section1.appendChild(div);

    // Append section to the body (or another container element)
    main.appendChild(section1);

    //-----------------------------------------------------------------
    // Create section element
    const section2 = document.createElement("section");
    section2.id = "about";

    // Create title div
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = "About";

    // Create content div
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    contentDiv.textContent =
      "We bring you unforgettable moments with the most delicious dishes.";

    // Create carousel div
    const carouselDiv = document.createElement("div");
    carouselDiv.id = "carouselExampleAutoplaying";
    carouselDiv.classList.add("carousel", "slide");
    carouselDiv.setAttribute("data-bs-ride", "carousel");

    // Create carousel-inner div
    const carouselInner1 = document.createElement("div");
    carouselInner1.classList.add("carousel-inner");

    // Create first carousel item (active)
    const carouselItem2 = document.createElement("div");
    carouselItem2.classList.add("carousel-item", "active");
    const img2 = document.createElement("img");
    img2.src =
      "https://duopig.com/wp-content/uploads/2020/11/bánh-xèo-JP-delivery-1-scaled.jpg";
    img2.classList.add("d-block", "w-100");
    img2.alt = "...";
    carouselItem2.appendChild(img2);

    // Create second carousel item
    const carouselItem3 = document.createElement("div");
    carouselItem3.classList.add("carousel-item");
    const img3 = document.createElement("img");
    img3.src =
      "https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/ngtnnn/2022_07_27/2707banhxeo.jpg.webp";
    img3.classList.add("d-block", "w-100");
    img3.alt = "...";
    carouselItem2.appendChild(img3);

    // Create third carousel item
    const carouselItem4 = document.createElement("div");
    carouselItem4.classList.add("carousel-item");
    const img4 = document.createElement("img");
    img4.src =
      "https://bizweb.dktcdn.net/100/339/225/files/thuc-an-nhanh.jpg?v=1627638748869";
    img4.classList.add("d-block", "w-100");
    img4.alt = "...";
    carouselItem4.appendChild(img4);

    // Append carousel items to carousel-inner
    carouselInner1.appendChild(carouselItem2);
    carouselInner1.appendChild(carouselItem3);
    carouselInner1.appendChild(carouselItem4);

    // Create carousel controls (previous)
    const prevButton = document.createElement("button");
    prevButton.classList.add("carousel-control-prev");
    prevButton.type = "button";
    prevButton.setAttribute("data-bs-target", "#carouselExampleAutoplaying");
    prevButton.setAttribute("data-bs-slide", "prev");
    const prevIcon1 = document.createElement("span");
    prevIcon1.classList.add("carousel-control-prev-icon");
    prevIcon1.setAttribute("aria-hidden", "true");
    const prevText1 = document.createElement("span");
    prevText1.classList.add("visually-hidden");
    prevText1.textContent = "Previous";
    prevButton.appendChild(prevIcon1);
    prevButton.appendChild(prevText1);

    // Create carousel controls (next)
    const nextButton = document.createElement("button");
    nextButton.classList.add("carousel-control-next");
    nextButton.type = "button";
    nextButton.setAttribute("data-bs-target", "#carouselExampleAutoplaying");
    nextButton.setAttribute("data-bs-slide", "next");
    const nextIcon1 = document.createElement("span");
    nextIcon1.classList.add("carousel-control-next-icon");
    nextIcon1.setAttribute("aria-hidden", "true");
    const nextText1 = document.createElement("span");
    nextText1.classList.add("visually-hidden");
    nextText1.textContent = "Next";
    nextButton.appendChild(nextIcon1);
    nextButton.appendChild(nextText1);

    // Append controls and inner carousel to carousel div
    carouselDiv.appendChild(carouselInner1);
    carouselDiv.appendChild(prevButton);
    carouselDiv.appendChild(nextButton);

    // Append title, content, and carousel to section
    section2.appendChild(titleDiv);
    section2.appendChild(contentDiv);
    section2.appendChild(carouselDiv);

    // Append section to the body (or another container element)
    main.appendChild(section2);
    //--------------------------------------------------------------------------------
    const section3 = document.createElement("section");
    section3.id = "customer-feedback";

    // Title
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "our customer's feedback";
    section3.appendChild(title);

    // Feedback List
    const feedbackList = document.createElement("div");
    feedbackList.id = "feedback-list";

    // Carousel Wrapper
    const carousel = document.createElement("div");
    carousel.id = "carouselExampleIndicators";
    carousel.className = "carousel slide";

    // Carousel Indicators
    const indicators = document.createElement("div");
    indicators.className = "carousel-indicators";

    const button1 = document.createElement("button");
    button1.type = "button";
    button1.dataset.bsTarget = "#carouselExampleIndicators";
    button1.dataset.bsSlideTo = "0";
    button1.className = "active";
    button1.ariaCurrent = "true";
    button1.ariaLabel = "Slide 1";

    const button2 = document.createElement("button");
    button2.type = "button";
    button2.dataset.bsTarget = "#carouselExampleIndicators";
    button2.dataset.bsSlideTo = "1";
    button2.ariaLabel = "Slide 2";

    const button3 = document.createElement("button");
    button3.type = "button";
    button3.dataset.bsTarget = "#carouselExampleIndicators";
    button3.dataset.bsSlideTo = "2";
    button3.ariaLabel = "Slide 3";

    indicators.append(button1, button2, button3);
    carousel.appendChild(indicators);

    // Carousel Inner
    const carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";

    // Carousel Item 1
    const carouselItem1 = document.createElement("div");
    carouselItem1.className = "carousel-item active";

    const cards1 = document.createElement("div");
    cards1.className = "cards";

    // Card 1 in Item 1
    const card1 = document.createElement("div");
    card1.className = "card";

    const cardImg1 = document.createElement("div");
    cardImg1.className = "card-img";

    const img1 = document.createElement("img");
    img1.src = "https://www.naturefresh.ca/wp-content/uploads/Plate.png";
    img1.alt = "";

    const rating1 = document.createElement("div");
    rating1.className = "rating";

    const star1_1 = document.createElement("img");
    star1_1.src =
      "https://img.icons8.com/?size=100&id=YRgTeE4zIm16&format=png&color=000000";

    const star1_2 = star1_1.cloneNode();
    const star1_3 = star1_1.cloneNode();
    const star1_4 = star1_1.cloneNode();
    const star1_5 = star1_1.cloneNode();

    rating1.append(star1_1, star1_2, star1_3, star1_4, star1_5);

    cardImg1.appendChild(img1);
    cardImg1.appendChild(rating1);

    const cardContent1 = document.createElement("div");
    cardContent1.className = "card-content";

    const feedbackUsername1 = document.createElement("div");
    feedbackUsername1.className = "feedback-username";
    feedbackUsername1.textContent = "abc-anc";

    const feedbackContent1 = document.createElement("div");
    feedbackContent1.className = "feedback-content";
    feedbackContent1.textContent =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

    cardContent1.append(feedbackUsername1, feedbackContent1);
    card1.append(cardImg1, cardContent1);
    cards1.appendChild(card1);

    // Add to Carousel
    carouselItem1.appendChild(cards1);
    carouselInner.appendChild(carouselItem1);

    // Add to Carousel
    carousel.appendChild(carouselInner);

    // Carousel Controls
    const controlPrev = document.createElement("button");
    controlPrev.className = "carousel-control-prev";
    controlPrev.type = "button";
    controlPrev.dataset.bsTarget = "#carouselExampleIndicators";
    controlPrev.dataset.bsSlide = "prev";

    const prevIcon = document.createElement("span");
    prevIcon.className = "carousel-control-prev-icon";
    prevIcon.ariaHidden = "true";

    const prevText = document.createElement("span");
    prevText.className = "visually-hidden";
    prevText.textContent = "Previous";

    controlPrev.append(prevIcon, prevText);

    const controlNext = document.createElement("button");
    controlNext.className = "carousel-control-next";
    controlNext.type = "button";
    controlNext.dataset.bsTarget = "#carouselExampleIndicators";
    controlNext.dataset.bsSlide = "next";

    const nextIcon = document.createElement("span");
    nextIcon.className = "carousel-control-next-icon";
    nextIcon.ariaHidden = "true";

    const nextText = document.createElement("span");
    nextText.className = "visually-hidden";
    nextText.textContent = "Next";

    controlNext.append(nextIcon, nextText);

    // Add Controls to Carousel
    carousel.append(controlPrev, controlNext);

    // Add Carousel to Feedback List
    feedbackList.appendChild(carousel);
    section3.appendChild(feedbackList);

    // Append Section to Body
    main.appendChild(section3);
    //---------------------------------------------------------------------------------------------
    // Create section element
    const section4 = document.createElement("section");
    section4.id = "book";

    // Create container
    const container = document.createElement("div");
    container.className = "container-mt-5";

    // Create and append title
    const title1 = document.createElement("h1");
    title1.className = "text-center reservation-title mb-4";
    title1.textContent = "Book a table online";
    container.appendChild(title1);

    // Create and append booking message
    const bookingMessage = document.createElement("div");
    bookingMessage.className = "booking-message hide";
    bookingMessage.id = "booking-message";
    bookingMessage.innerHTML = `
    You need to log in first when booking so you can earn member points!
    <span>Login <a href="./html/login.html">here</a></span>
`;
    container.appendChild(bookingMessage);

    // Create form
    const form = document.createElement("form");
    form.id = "reservationForm";
    form.className = "needs-validation";
    form.setAttribute("novalidate", "");

    // Create form elements
    const createRow = () => document.createElement("div");
    const createInput = (type, id, name, className, required = true) => {
      const input = document.createElement("input");
      input.type = type;
      input.id = id;
      input.name = name;
      input.className = className;
      if (required) input.setAttribute("required", "");
      return input;
    };
    const createLabel = (text, htmlFor) => {
      const label = document.createElement("label");
      label.className = "form-label";
      label.htmlFor = htmlFor;
      label.textContent = text;
      return label;
    };
    const createInvalidFeedback = (message) => {
      const div = document.createElement("div");
      div.className = "invalid-feedback";
      div.textContent = message;
      return div;
    };

    // Add name field
    const row1 = createRow();
    row1.className = "row";
    const nameDiv = document.createElement("div");
    nameDiv.className = "col-md-6 mb-3";
    nameDiv.appendChild(createLabel("Name:", "name"));
    nameDiv.appendChild(createInput("text", "name", "name", "form-control"));
    nameDiv.appendChild(createInvalidFeedback("Please enter your name."));
    row1.appendChild(nameDiv);

    // Add email field
    const emailDiv = document.createElement("div");
    emailDiv.className = "col-md-6 mb-3";
    emailDiv.appendChild(createLabel("Email:", "email"));
    emailDiv.appendChild(
      createInput("email", "email", "email", "form-control")
    );
    emailDiv.appendChild(
      createInvalidFeedback("Please enter a valid email address.")
    );
    row1.appendChild(emailDiv);
    form.appendChild(row1);

    // Add phone field
    const phoneDiv = document.createElement("div");
    phoneDiv.className = "mb-3";
    phoneDiv.appendChild(createLabel("Phone number:", "phone"));
    const phoneInputGroup = document.createElement("div");
    phoneInputGroup.className = "input-group";
    const phonePrefix = document.createElement("span");
    phonePrefix.className = "input-group-text";
    phonePrefix.textContent = "+84";
    phoneInputGroup.appendChild(phonePrefix);
    phoneInputGroup.appendChild(
      createInput("tel", "phone", "phone", "form-control")
    );
    phoneDiv.appendChild(phoneInputGroup);
    phoneDiv.appendChild(
      createInvalidFeedback("Please enter a valid phone number.")
    );
    form.appendChild(phoneDiv);

    // Add date and time fields
    const row2 = createRow();
    row2.className = "row";
    const dateDiv = document.createElement("div");
    dateDiv.className = "col-md-6 mb-3";
    dateDiv.appendChild(createLabel("Date:", "date"));
    dateDiv.appendChild(createInput("date", "date", "date", "form-control"));
    dateDiv.appendChild(createInvalidFeedback("Please select a date."));
    row2.appendChild(dateDiv);

    const timeDiv = document.createElement("div");
    timeDiv.className = "col-md-6 mb-3";
    timeDiv.appendChild(createLabel("Hour:", "time"));
    timeDiv.appendChild(createInput("time", "time", "time", "form-control"));
    timeDiv.appendChild(createInvalidFeedback("Please select a time."));
    row2.appendChild(timeDiv);
    form.appendChild(row2);

    // Add guests field
    const guestsDiv = document.createElement("div");
    guestsDiv.className = "mb-3";
    guestsDiv.appendChild(createLabel("The number of guests:", "guests"));
    const guestsInput = createInput(
      "number",
      "guests",
      "guests",
      "form-control"
    );
    guestsInput.min = "1";
    guestsDiv.appendChild(guestsInput);
    guestsDiv.appendChild(
      createInvalidFeedback("Please enter number of guests.")
    );
    form.appendChild(guestsDiv);

    // Add note field
    const noteDiv = document.createElement("div");
    noteDiv.className = "mb-3";
    noteDiv.appendChild(createLabel("Take notes:", "note"));
    const noteTextarea = document.createElement("textarea");
    noteTextarea.id = "note";
    noteTextarea.name = "note";
    noteTextarea.className = "form-control";
    noteDiv.appendChild(noteTextarea);
    form.appendChild(noteDiv);

    // Add submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = "btn btn-primary";
    submitButton.textContent = "Book";
    form.appendChild(submitButton);

    // Append form to container
    container.appendChild(form);

    // Append container to section
    section4.appendChild(container);

    // Append section to body
    main.appendChild(section4);

    mainContainer.appendChild(main);

    // add footer
    this.footer.render(mainContainer);
  }
  async booktable(event) {
    event.preventDefault();
    //get input data
    const name = "";
    const phonenumber = "";
    const email = "";
    const date = "";
    const hour = "";
    const guets = "";
    const note = "";
    // validate form
    if (!name && !phonenumber && !email && !date && !hour && !guets && !note) {
      alert("pls fill all form");
      return;
    }

    //creatre data on fire strore
    try {
      const auth = getAuth(firebaseApp);
      const user = auth.currentUser;
      const docRef = await addDoc(collection(database, "books"), {
        name: name,
        email: email,
        phonenumber: phonenumber,
        hour: hour,
        date: date,
        guets: guets,
        note: note,
        created_by: user.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  async updatepoint() {
    // Reference the document
    try {
      const auth = getAuth(firebaseApp);
      const user = auth.currentUser;
      const docRef1 = doc(database, "users", user.uid);

      // Fetch the document
      const docSnap = await getDoc(docRef1);
      const newpoint = docSnap.data().point + 100;

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }

      // Reference the document you want to update
      const docRef2 = doc(database, "users", user.uid);

      // Update the document
      await updateDoc(docRef2, {
        point: newpoint,
      });
      console.log("Document written with ID: ", docRef2.id);
      alert("Create post successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  goto_login() {
    const login = new Login();
    app.renderComponent(login);
  }
  goto_menu() {
    const menu = new Menu();
    app.renderComponent(menu);
  }
  scrollto_home() {
    const target_section = document.getElementById("home");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  scrollto_about() {
    const target_section = document.getElementById("abot");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  scrollto_book() {
    const target_section = document.getElementById("book");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
