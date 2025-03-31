document.addEventListener("DOMContentLoaded", function () {
    // Select all class buttons
    const classButtons = document.querySelectorAll(".class-btn");

    classButtons.forEach(button => {
        button.addEventListener("click", function () {
            const className = this.textContent.trim(); // Get the button text

            // Redirect to corresponding class page
            const classPages = {
                "Class 6": "class6.html",
                "Class 7": "class7.html",
                "Class 8": "class8.html",
                "Class 9": "class9.html",
                "Class 10": "class10.html"
            };

            // Redirect only if a valid class page exists
            if (classPages[className]) {
                window.location.href = classPages[className];
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const feedbackInput = document.getElementById("feedbackInput");
    const submitFeedback = document.getElementById("submitFeedback");
    const feedbackList = document.getElementById("feedbackList");

    // Create "More" button dynamically
    const moreButton = document.createElement("button");
    moreButton.textContent = "More";
    moreButton.id = "moreFeedback";
    moreButton.style.display = "none"; // Initially hidden
    moreButton.style.width = "100%";
    moreButton.style.padding = "10px";
    moreButton.style.marginTop = "10px";
    moreButton.style.fontSize = "18px";
    moreButton.style.background = "#007bff";
    moreButton.style.color = "white";
    moreButton.style.border = "none";
    moreButton.style.borderRadius = "8px";
    moreButton.style.cursor = "pointer";
    moreButton.style.transition = "background 0.3s ease-in-out";
    moreButton.addEventListener("click", function () {
        window.location.href = "feedback.html"; // Redirect to feedback page
    });

    feedbackList.parentNode.appendChild(moreButton); // Add button to the feedback section

    // Load existing feedback from local storage
    function loadFeedback() {
        feedbackList.innerHTML = ""; // Clear existing list
        const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

        feedbacks.slice(0, 5).forEach(feedback => { // Show only the latest 5 feedbacks
            const li = document.createElement("li");
            li.textContent = feedback;
            feedbackList.appendChild(li);
        });

        // Show "More" button if feedback count exceeds 5
        if (feedbacks.length > 5) {
            moreButton.style.display = "block";
        } else {
            moreButton.style.display = "none";
        }
    }

    // Submit feedback
    submitFeedback.addEventListener("click", function () {
        const feedback = feedbackInput.value.trim();
        if (feedback) {
            let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
            feedbacks.push(feedback);
            localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
            feedbackInput.value = ""; // Clear input
            loadFeedback(); // Reload feedback list
        }
    });

    loadFeedback(); // Load feedback on page load
});
