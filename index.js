const input_tag = document.querySelector(".input-tag");
const tags_length = document.querySelector(".tags-length");
let tags_list = [];

input_tag.addEventListener("keyup", (e) => {
  const val = input_tag.value;
  if (e.key == "Enter") {

    if (tags_list.some((e) => e.text == val)) return alert("Duplicate tags");

    if (val == "") return;

    const tags = val.split(",").map((e) => e.trim()).filter((e) => e !== "");

    for (let i of tags) {
      tags_list.push({
        id: Math.random().toString(10).substring(2, 10),
        text: i
      });
    }

    input_tag.value = "";

    RenderTags();
  }
});

const RenderTags = () => {
  const wrapper_tags = document.querySelector(".wrapper-tags");
  let cache = "";

  document.querySelectorAll(".item-tag").forEach((e) => e.remove());
  cache = "";

  tags_list.forEach((e) => {
    cache = `<div class="item-tag">
              <span>${e.text}</span>
              <button type="button" data-id="${e.id}" class="btn-rm-tag">
                X
              </button>
            </div>`;
    wrapper_tags.insertAdjacentHTML("afterbegin", cache);
    HandleRmTags();
  });

  tags_length.textContent = `${tags_list.length} Tags`
}

const HandleRmTags = () => {
  const btns = document.querySelectorAll(".btn-rm-tag");
  if (btns.length > 0) {
    btns.forEach((e) => {
      e.onclick = () => {
        const data_id = Number(e.getAttribute("data-id"));
        tags_list = tags_list.filter((x) => x.id != data_id);
        RenderTags();
      }
    });
  }
}

const last_child = document.querySelector(".parent").lastElementChild;
const button = document.querySelector(".button");

button.addEventListener("click", () => console.log(last_child.innerHTML));