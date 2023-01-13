// create our books to be rendered and DOM elements

function Book(authors, language, subject, title, comments) {
  this.authors = authors;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.isFavorite = false;
  this.comments = [];


  this.getAuthorNames = function () {
    let names = "";
    for (let i = 0; i <= this.authors.length - 1; i++) {
      let name = this.authors[i];
      if (name.indexOf(" ") >= 0) {
        let last = name.slice(0, name.indexOf(","));
        let first = name.slice(name.indexOf(" "));
        names += `${first} ${last}`;
      } else {
        names += `${name}`;
      }
    }
    return names;
  };

  this.render = function () {
    const li = document.createElement("li");
    li.classList.add("book");
    li.textContent = `${this.title} by ${this.getAuthorNames()}`;

// Create a DOM element for Favorite

    const favButton = document.createElement("button");
    favButton.textContent = this.isFavorite ? "	⭐" : "*";
    li.append(favButton);

    favButton.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite;
      favButton.textContent = this.isFavorite ? "	⭐" : "*";
    });

// Create DOM to remove book 
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
      bookshelf.removeBook();
    });

    li.prepend(removeBtn);

// Create DOM element for Comments

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("commentContainer");
    li.append(commentDiv);

    const commentBtn = document.createElement("button");
    commentBtn.textContent = "Comment";
    commentDiv.append(commentBtn);

    commentBtn.addEventListener("click", () => {
      const commentInputElement = document.createElement("input");
      commentInputElement.placeholder = "What would you like to say..";
      commentInputElement.classList.add("commentInputBox");
      commentInputElement.maxLength = 280;
      commentDiv.append(commentInputElement);

      const enterBtn = document.createElement("button");
      enterBtn.textContent = "enter";
      commentDiv.append(enterBtn);

      enterBtn.addEventListener("click", () => {
        const userInput = commentInputElement.value;
        if (userInput.length > 280) {
          alert("ERROR");
        }

        this.comments.push(userInput);
        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.textContent = userInput;

        commentDiv.append(comment);
        
        commentDiv.removeChild(commentInputElement)
        commentDiv.removeChild(sendBtn)
        this.render();
      });
    });

    if (this.comments.length > 0) {
      for (let comment of this.comments){
        const singComment = document.createElement("li")
        singComment.classList.add(".singleComment")
        singComment.textContent = comment;
        commentContainer.append(singleComment); 
      }
    }

    return li;
  };
}
