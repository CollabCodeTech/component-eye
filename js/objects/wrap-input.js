const $wrapInput = document.querySelector(".wrap-input");
const $inputCollab = $wrapInput.querySelector(".input-collab");
const $eyeCollab = $wrapInput.querySelector(".eye-collab");

$eyeCollab.addEventListener("click", () => {
  $inputCollab.type == "password" ? $type='text' :$type="password"
  $inputCollab.setAttribute('type',$type)

  $wrapInput.classList.toggle("-show");
});
