import Menu from "./menu.js";
import app from "../app.js";
class Detail {
  constructor() {
    document.title = "Meal detail";
    this.nav = new Nav();
    this.footer = new Footer();
  }
  render(mainContainer) {
    // Create the main element
    const main = document.createElement("main");

    // Create the container div
    const container = document.createElement("div");
    container.className = "container";

    // Create the food detail section
    const foodDetail = document.createElement("div");
    foodDetail.id = "food-detail";

    // Add food image
    const foodImage = document.createElement("img");
    foodImage.id = "food-image";
    foodImage.style.display = "none"; // Initially hidden
    foodImage.alt = "Food Image";
    foodDetail.appendChild(foodImage);

    // Add food video
    const foodVideo = document.createElement("video");
    foodVideo.id = "food-video";
    foodVideo.autoplay = true;
    foodVideo.controls = true;
    foodDetail.appendChild(foodVideo);

    // Add food info
    const foodInfo = document.createElement("div");
    foodInfo.id = "food-info";

    // Add food name
    const foodName = document.createElement("h2");
    foodName.id = "food-name";
    foodInfo.appendChild(foodName);

    // Add food nutrients list
    const foodNutrients = document.createElement("ul");
    foodNutrients.id = "food-nutrients";
    const nutritionLabel = document.createElement("strong");
    nutritionLabel.textContent = "Nutrition: ";
    foodNutrients.appendChild(nutritionLabel);
    foodInfo.appendChild(foodNutrients);

    // Add food description
    const foodDescription = document.createElement("p");
    foodDescription.id = "food-description";
    foodInfo.appendChild(foodDescription);

    // Append food info to food detail
    foodDetail.appendChild(foodInfo);

    // Append food detail to container
    container.appendChild(foodDetail);

    // Create the comments section
    const commentsSection = document.createElement("div");
    commentsSection.id = "comments-section";

    // Add comments title
    const commentsTitle = document.createElement("h3");
    commentsTitle.textContent = "Comments";
    commentsSection.appendChild(commentsTitle);

    // Add comments list
    const commentsList = document.createElement("ul");
    commentsList.id = "comments-list";
    commentsSection.appendChild(commentsList);

    // Add comment form
    const commentForm = document.createElement("div");
    commentForm.id = "comment-form";

    // Add new comment input
    const newCommentInput = document.createElement("input");
    newCommentInput.type = "text";
    newCommentInput.id = "new-comment";
    newCommentInput.placeholder = "Add a comment";
    commentForm.appendChild(newCommentInput);

    // Add add-comment button
    const addCommentBtn = document.createElement("button");
    addCommentBtn.id = "add-comment-btn";

    const addCommentImg = document.createElement("img");
    addCommentImg.src =
      "https://png.pngtree.com/png-clipart/20230813/original/pngtree-arrow-business-button-circle-design-picture-image_7890421.png";
    addCommentImg.alt = "Add Comment";
    addCommentBtn.appendChild(addCommentImg);

    commentForm.appendChild(addCommentBtn);
    commentsSection.appendChild(commentForm);

    // Append comments section to container
    container.appendChild(commentsSection);

    // Append container to main
    main.appendChild(container);

    // Append main to the body or another container
    mainContainer.appendChild(main);
    this.footer.render(mainContainer);
  }
  goto_menu() {
    const menu = new Menu();
    app.changeComponent(menu);
  }
}
export default Detail;
