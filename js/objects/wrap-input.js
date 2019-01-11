const $wrapInput = document.querySelector(".wrap-input");
const $inputCollab = $wrapInput.querySelector(".input-collab");
const $eyeCollab = $wrapInput.querySelector(".eye-collab");

$eyeCollab.addEventListener("click", () => {
  if ($wrapInput.classList.contains("-show")) {
    $inputCollab.setAttribute("type", "password");
  } else {
    $inputCollab.setAttribute("type", "text");
  }

  $wrapInput.classList.toggle("-show");
});
